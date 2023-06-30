import React, { useEffect } from 'react';
import {
  Show,
  SimpleShowLayout,
  useGetRecordId,
  useRecordContext,
  TextField,
  useShowContext,
  useGetOne,
} from 'react-admin';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Aside from './Aside';
import DataProvider from '../../dataProvider/dataProvider';

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
  return <span>User {record ? `"${record.name}"` : ''}</span>;
}

function ShowGuest() {
  const id = useGetRecordId();
  const navigate = useNavigate();
  const { data: user } = useGetOne('users', { id });
  const roleUser = localStorage.getItem('role');
  const role = user?.role;
  if (id === 0) {
    navigate('/users');
  }

  if (
    role === roleUser ||
    (role === 'admin' && roleUser === 'admin') ||
    (role === 'invoice manager' &&
      (roleUser === 'invoice manager' || roleUser === 'room manager')) ||
    (role === 'room manager' &&
      (roleUser === 'room manager' || roleUser === 'invoice manager'))
  ) {
    return null;
  }

  return (
    <Show title={<UserType />} aside={<Aside id={id} />}>
      <SimpleShowLayout
        sx={{
          fontSize: '18px',
        }}
      >
        <TextField
          label="Email"
          source="email"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Name"
          source="name"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Phone number"
          source="sdt"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Role"
          source="role"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
}

export default ShowGuest;
