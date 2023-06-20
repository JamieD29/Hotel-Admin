import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  useGetRecordId,
  DateField,
} from 'react-admin';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Aside from './Aside';

function SectionTitle({ label }) {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
}

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

function ShowInvoice() {
  const invoice = useGetRecordId();
  const invoiceTitle = `Show a ${invoice} invoice information`;

  return (
    <Show title={invoiceTitle} aside={<Aside id={invoice} />}>
      <SimpleShowLayout
        sx={{
          fontSize: '18px',
        }}
      >
        <TextField disabled source="id" />

        <TextField
          label="Total"
          source="total_price"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <DateField
          label="Created"
          source="invoice_date"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Guest"
          source="user.name"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
}

export default ShowInvoice;
