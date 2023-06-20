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

function RoomEdit() {
  return (
    <Edit title="Edit a room information" aside="">
      <SimpleForm>
        <TextInput source="id" validate={validateRoomNum} />
        <SectionTitle label="Price" />
        <Box>
          <TextInput source="price" validate={validatePrice} fullWidth />
        </Box>
        <SectionTitle label="Room Type" />
        <Box>
          <TextInput source="type" validate={validateRequired} fullWidth />
        </Box>
        <SectionTitle label="Bed" />
        <Box>
          <TextInput source="bed_count" validate={validateBedNum} fullWidth />
        </Box>
        <SectionTitle label="Rom status" />
        <Box>
          <TextInput source="status" validate={validateRequired} fullWidth />
        </Box>
      </SimpleForm>
    </Edit>
  );
}

export default RoomEdit;
