import React from 'react';
import {
  Show,
  SimpleShowLayout,
  useGetRecordId,
  useRecordContext,
  TextField,
} from 'react-admin';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

function RoomType() {
  const record = useRecordContext();
  //   console.log(record);
  return <span>Room {record ? `"${record.id}"` : ''}</span>;
}

function ShowRoom() {
  const id = useGetRecordId();
  const navigate = useNavigate();

  if (id === 0) {
    navigate('/rooms');
  }

  return (
    <Show title={<RoomType />} aside={<Aside />}>
      <SimpleShowLayout
        sx={{
          fontSize: '18px',
        }}
      >
        <TextField
          label="Room.No"
          source="id"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Type"
          source="type"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Price"
          source="price"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Bed(s)"
          source="bed_count"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Status"
          source="status"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
}

export default ShowRoom;
