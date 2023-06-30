import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import React, { useEffect, useState } from 'react';
import { useGetRecordId, useLocaleState } from 'react-admin';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Aside() {
  return (
    <Box width={400} display={{ xs: 'none', lg: 'block' }}>
      <EventList />
    </Box>
  );
}

function EventList() {
  const room = useGetRecordId();
  const [locale] = useLocaleState();
  const [reservation, setReservation] = useState();
  const [inInvoice, setInInvoice] = useState();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const watchDetailAction = () => {
    if (role === 'admin') {
      return (
        <Button size="small">
          <NavLink
            to={`/invoice/${inInvoice?.id}/show`}
            style={{ textDecoration: 'none', color: 'blue' }}
          >
            See the invoice details
          </NavLink>
        </Button>
      );
    }
    return null;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/invoice`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((respond) => {
        respond.data.map((invoice) =>
          axios
            .get(`http://localhost:3000/invoice-detail/${invoice.id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              response.data.map((each) => {
                if (each.room.id === Number(room)) {
                  axios
                    .get(`http://localhost:3000/invoice/${each.invoice.id}`, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                    })
                    .then((reply) => {
                      setInInvoice(reply.data);
                      setReservation(reply.data.user);
                    });
                }
                return true;
              });
            }),
        );
      })
      .catch((err) => err.message);
  }, []);

  const renderAside = () => {
    if (inInvoice === undefined || reservation === undefined) {
      return null;
    }
    return (
      <Box ml={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" component="div">
              Date of Invoice
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <ReceiptIcon />
              {new Date(inInvoice?.invoice_date).toLocaleString(locale, {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </Typography>
            <Typography variant="h6" component="div">
              Reserved by
            </Typography>
            <Typography variant="body2">
              <NavLink
                to={`/users/${reservation?.id}/show`}
                style={{ textDecoration: 'none', color: 'blue' }}
              >
                <Typography variant="h6">{reservation?.name}</Typography>
              </NavLink>
            </Typography>
          </CardContent>
          <CardActions>{watchDetailAction()}</CardActions>
        </Card>
      </Box>
    );
  };

  return renderAside();
}

export default Aside;
