import React from 'react';
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

const required =
  (message = 'Required') =>
  (value) =>
    value ? undefined : message;

const numberRegex =
  (regexRule, message = 'Only number') =>
  (value) =>
    regexRule.test(value) ? undefined : message;

const maxLength =
  (max, message = 'Over-length range') =>
  (value) =>
    value && value.length > max ? message : undefined;

const validatePhoneNumber = [required(), maxLength(10), numberRegex(/^\d+$/)];

const validateRoomNum = [required(), numberRegex(/^\d+$/)];

function CreateInvoice() {
  return (
    <Create title="Create a invoice">
      <SimpleForm
        defaultValue={{
          userId: 0,
          room: [],
        }}
      >
        {/* <TextInput disabled source="id" /> */}
        <SectionTitle label="User" />
        <Box>
          <TextInput source="sdt" validate={validatePhoneNumber} fullWidth />
        </Box>

        <SectionTitle label="Room reserved" />
        <Box>
          <ArrayInput source="room">
            <SimpleFormIterator inline>
              <TextInput source="roomId" validate={validateRoomNum} />
            </SimpleFormIterator>
          </ArrayInput>
        </Box>
      </SimpleForm>
    </Create>
  );
}

export default CreateInvoice;
