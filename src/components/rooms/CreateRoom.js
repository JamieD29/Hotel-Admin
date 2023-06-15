import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
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

function RoomCreate() {
  return (
    <Create title="Create a room">
      <SimpleForm
        defaultValue={{
          price: '',
          type: '',
          bed_count: '',
          status: 'unavailable',
        }}
      >
        {/* <TextInput disabled source="id" /> */}
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
    </Create>
  );
}

export default RoomCreate;
