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

function RoomEdit() {
  return (
    <Edit title="Edit a room information" aside="">
      <SimpleForm>
        <TextInput disabled source="id" />
        <SectionTitle label="Price" />
        <Box>
          <TextInput source="price" fullWidth />
        </Box>
        <SectionTitle label="Room Type" />
        <Box>
          <TextInput source="type" fullWidth />
        </Box>
        <SectionTitle label="Bed" />
        <Box>
          <TextInput source="bed_count" fullWidth />
        </Box>
        <SectionTitle label="Rom status" />
        <Box>
          <TextInput source="status" fullWidth />
        </Box>
      </SimpleForm>
    </Edit>
  );
}

export default RoomEdit;
