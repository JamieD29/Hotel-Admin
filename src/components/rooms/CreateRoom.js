import React from 'react';
import { Create, SelectInput, SimpleForm, TextInput } from 'react-admin';
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

const numberRegex =
  (regexRule, message = 'Only number') =>
  (value) =>
    regexRule.test(value) ? undefined : message;

const validateRoomNum = [required(), numberRegex(/^\d+$/)];

const validatePrice = [required(), numberRegex(/^\d+$/), minValue(6)];

const validateBedNum = [required(), numberRegex(/^\d+$/)];

const validateRequired = [required()];

function RoomCreate() {
  return (
    <Create title="Create a room">
      <SimpleForm
        defaultValue={{
          id: '',
          price: '',
          type: '',
          bed_count: '',
          status: 'available',
        }}
      >
        <SectionTitle label="No.Rum" />
        <Box>
          <TextInput source="id" validate={validateRoomNum} fullWidth />
        </Box>
        <SectionTitle label="Price" />
        <Box>
          <TextInput source="price" validate={validatePrice} fullWidth />
        </Box>

        <SectionTitle label="Room Type" />
        <Box>
          <SelectInput
            source="type"
            validate={validateRequired}
            choices={[
              { id: 'normal', name: 'normal' },
              { id: 'vip', name: 'vip' },
            ]}
          />
        </Box>
        <SectionTitle label="Bed" />
        <Box>
          <TextInput source="bed_count" validate={validateBedNum} fullWidth />
        </Box>
      </SimpleForm>
    </Create>
  );
}

export default RoomCreate;
