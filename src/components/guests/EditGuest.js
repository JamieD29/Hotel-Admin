import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  useGetRecordId,
  useRecordContext,
} from 'react-admin';
import { Box, Typography, recomposeColor } from '@mui/material';
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

function EditGuest() {
  const id = useGetRecordId();
  return (
    <Edit title={<UserType />} aside={<Aside id={id} />}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <SectionTitle label="Email" />
        <Box>
          <TextInput source="email" fullWidth />
        </Box>
        <SectionTitle label="Phone number" />
        <Box>
          <TextInput source="sdt" fullWidth />
        </Box>
        <SectionTitle label="Full name" />
        <Box>
          <TextInput source="name" fullWidth />
        </Box>
        <SectionTitle label="Password" />
        <Box>
          <TextInput disabled source="password" fullWidth />
        </Box>
        <SectionTitle label="Change Password" />
        <Box>
          <TextInput source="password" fullWidth />
        </Box>
        <SectionTitle label="Role" />
        <Box>
          <TextInput source="role" fullWidth />
        </Box>
      </SimpleForm>
    </Edit>
  );
}

export default EditGuest;
