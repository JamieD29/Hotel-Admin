import React from 'react';
import { Create, SelectInput, SimpleForm, TextInput, email } from 'react-admin';
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

const required =
  (message = 'Required') =>
  (value) =>
    value ? undefined : message;
const minValue =
  (min, message = 'Too small') =>
  (value) =>
    value && value.length < min ? message : undefined;

const maxLength =
  (max, message = 'Over-length range') =>
  (value) =>
    value && value.length > max ? message : undefined;

const nameRegex =
  (regexRule, message = 'Do not contain number') =>
  (value) =>
    regexRule.test(value) ? message : undefined;

const phoneRegex =
  (regexRule, message = 'Only number') =>
  (value) =>
    regexRule.test(value) ? undefined : message;

const validateEmail = [required(), email()];

const validateName = [required(), minValue(3), nameRegex(/\d/)];

const validatePassword = [required(), minValue(8)];

const validatePhoneNumber = [required(), maxLength(10), phoneRegex(/^\d+$/)];

const validateRole = [required()];

function CreateGuest() {
  return (
    <Create title="Create a Guest">
      <SimpleForm
        defaultValue={{
          id: 0,
          email: '',
          sdt: '',
          name: '',
          password: '',
          role: '',
        }}
      >
        <SectionTitle label="Email" />
        <Box>
          <TextInput source="email" validate={validateEmail} fullWidth />
        </Box>

        <SectionTitle label="Full name" />
        <Box>
          <TextInput source="name" validate={validateName} fullWidth />
        </Box>
        <SectionTitle label="Phone number" />
        <Box>
          <TextInput source="sdt" validate={validatePhoneNumber} fullWidth />
        </Box>
        <SectionTitle label="Password" />
        <Box>
          <TextInput source="password" validate={validatePassword} fullWidth />
        </Box>
        <SectionTitle label="Role" />
        <Box>
          <SelectInput
            source="role"
            validate={validateRole}
            choices={[
              { id: 'admin', name: 'admin' },
              { id: 'guest', name: 'guest' },
            ]}
          />
        </Box>
      </SimpleForm>
    </Create>
  );
}

export default CreateGuest;
