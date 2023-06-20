import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

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

function EditInvoice() {
  return (
    <Edit title="Edit a invoice information">
      <SimpleForm>
        <TextInput disabled source="id" />
        <SectionTitle label="Total" />
        <Box>
          <TextInput source="total_price" fullWidth />
        </Box>
        <SectionTitle label="Created Date" />
        <Box>
          <TextInput source="invoice_date" fullWidth />
        </Box>
        <SectionTitle label="Guest" />
        <Box>
          <TextInput disabled source="user.id" fullWidth />
        </Box>
      </SimpleForm>
    </Edit>
  );
}

export default EditInvoice;
