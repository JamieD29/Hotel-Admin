import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocaleState } from 'react-admin';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Receipt } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Aside({ id }) {
  return (
    <Box width={400} display={{ xs: 'none', lg: 'block' }}>
      <EventList idDetail={id} />
    </Box>
  );
}

Aside.propTypes = {
  id: PropTypes.string.isRequired,
};

function EventList({ idDetail }) {
  const [dataDetail, setDataDetail] = useState();
  const [locale] = useLocaleState();
  const token = localStorage.getItem('token');
  useEffect(() => {
    axios
      .get(`http://localhost:3000/invoice/user/${idDetail}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((respond) => {
        setDataDetail(respond.data);
      })
      .catch((err) => err);
  }, []);
  return (
    <Box ml={2}>
      <Stepper orientation="vertical" sx={{ mt: 1 }}>
        {dataDetail?.map((invoice) => (
          <Step key={`${invoice.id}`} expanded active completed>
            <StepLabel icon={<Receipt />}>
              <Link to={`/invoice/${invoice.id}/show`}>
                {new Date(invoice.invoice_date).toLocaleString(locale, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </Link>
            </StepLabel>
            <StepContent>
              <Typography> Total: {invoice.total_price}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

EventList.propTypes = {
  idDetail: PropTypes.string.isRequired,
};

export default Aside;
