import React, { useEffect, useState } from 'react';
import {
  Show,
  SimpleShowLayout,
  useGetRecordId,
  useRecordContext,
  TextField,
} from 'react-admin';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
  //   console.log(record);
  return <span>User {record ? `"${record.name}"` : ''}</span>;
}

function ShowGuest() {
  const id = useGetRecordId();
  const navigate = useNavigate();

  if (id === 0) {
    navigate('/users');
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
