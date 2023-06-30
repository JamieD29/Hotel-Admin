import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import ReceiptIcon from '@mui/icons-material/Receipt';
import React, { useEffect, useState } from 'react';
import { useLocaleState } from 'react-admin';
import PropTypes from 'prop-types';
import axios from 'axios';

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
      .get(`http://localhost:3000/invoice-detail/${idDetail}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((respond) => {
        setDataDetail(respond.data);
      })
      .catch((err) => err.message);
  }, []);
  return (
    <Box ml={2}>
      <Stepper orientation="vertical" sx={{ mt: 1 }}>
        {dataDetail?.map((detail) => (
          <Step key={detail.id} expanded active completed>
            <StepLabel icon={<ReceiptIcon />}>
              {new Date(detail.invoice.invoice_date).toLocaleString(locale, {
                weekday: 'long',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </StepLabel>
            <StepContent>
              <Typography variant="h6">
                Room {detail.room.id} - {detail.room.type.toUpperCase()}
              </Typography>
              <Typography variant="body1">Price:{detail.room.price}</Typography>
              <Typography variant="body1">
                Bed(s): {detail.room.bed_count}
              </Typography>
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
