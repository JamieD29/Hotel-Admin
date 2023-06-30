import React from 'react';
import {
  Edit,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextInput,
  email,
  useGetRecordId,
  usePermissions,
  useRecordContext,
} from 'react-admin';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
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

function UserType() {
  const record = useRecordContext();
  return <span>User {record ? `"${record.id}"` : ''}</span>;
}

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

function EditGuest() {
  const id = useGetRecordId();
  const { permissions } = usePermissions();
  const navigate = useNavigate();

  const renderEditPage = () => (
    <Edit title={<UserType />} aside={<Aside id={id} />}>
      <SimpleForm>
        <Box width={{ xs: '100%', xl: 800 }}>
          <TextInput disabled source="id" />
          <SectionTitle label="Email" />
          <Box>
            <TextInput source="email" validate={validateEmail} fullWidth />
          </Box>
          <SectionTitle label="Phone number" />
          <Box>
            <TextInput source="sdt" validate={validatePhoneNumber} fullWidth />
          </Box>
          <SectionTitle label="Full name" />
          <Box>
            <TextInput source="name" validate={validateName} fullWidth />
          </Box>

          <Grid container spacing={2} width={{ xs: '100%', xl: 800 }}>
            {/* <Grid item>
              <SectionTitle label="Password" />
              <PasswordInput disabled source="password" fullWidth />
            </Grid> */}

            <Grid item>
              <SectionTitle label="Change Password" />
              <PasswordInput
                source="password"
                validate={validatePassword}
                fullWidth
              />
            </Grid>
          </Grid>

          <SectionTitle label="Role" />
          <Box>
            <SelectInput
              source="role"
              validate={validateRole}
              choices={[
                { id: 'admin', name: 'admin' },
                { id: 'room manager', name: 'room manager' },
                { id: 'invoice manager', name: 'invoice manager' },
                { id: 'guest', name: 'guest' },
              ]}
            />
          </Box>
        </Box>
      </SimpleForm>
    </Edit>
  );
  const previousPage = () => navigate(-1);

  return permissions === 'admin' ? renderEditPage() : previousPage();
}

export default EditGuest;
