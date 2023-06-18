import React, { useEffect, useState } from 'react';
import {
  ArrayInput,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin';
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

function CreateInvoice() {
  return (
    <Create title="Create a invoice" component="div">
      <SimpleForm
        defaultValue={{
          userId: 0,
          room: [],
        }}
      >
        {/* <TextInput disabled source="id" /> */}
        <SectionTitle label="User" />
        <Box>
          <TextInput source="userId" fullWidth />
        </Box>

        <SectionTitle label="Room reserved" />
        <Box>
          <ArrayInput source="room">
            <SimpleFormIterator inline>
              <TextInput source="roomId" />
              <TextInput source="type" />
              <TextInput source="price" />
            </SimpleFormIterator>
          </ArrayInput>
        </Box>
      </SimpleForm>
    </Create>
  );
}

export default CreateInvoice;
