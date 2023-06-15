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

function CreateGuest() {
  return (
    <Create title="Create a room">
      <SimpleForm
        defaultValue={{
          email: '',
          sdt: '',
          name: '',
          password: '',
          role: '',
        }}
      >
        {/* <TextInput disabled source="id" /> */}
        <SectionTitle label="Email" />
        <Box>
          <TextInput source="email" fullWidth />
        </Box>

        <SectionTitle label="Full name" />
        <Box>
          <TextInput source="name" fullWidth />
        </Box>
        <SectionTitle label="Password" />
        <Box>
          <TextInput source="password" fullWidth />
        </Box>
        <SectionTitle label="Role" />
        <Box>
          <TextInput source="role" fullWidth />
        </Box>
      </SimpleForm>
    </Create>
  );
}

export default CreateGuest;
