import { Chip } from '@mui/material';
import React from 'react';
import {
  Datagrid,
  List,
  SearchInput,
  ShowButton,
  TextField,
} from 'react-admin';
// import PropTypes from 'prop-types';
import PostFilterSidebar from './FilterAside';

// function QuickFilter({ label }) {
//   return <Chip sx={{ marginBottom: 1 }} label={label} />;
// }
// QuickFilter.propTypes = {
//   label: PropTypes.string.isRequired,
// };

const GuestFilter = [<SearchInput source="sdt" alwaysOn />];

function ListGuest() {
  const role = localStorage.getItem('role');
  let action = '';
  if (role === 'invoice manager' || role === 'room manager') {
    action = 'show';
  } else {
    action = 'edit';
  }

  return (
    <List filters={GuestFilter} aside={<PostFilterSidebar />}>
      <Datagrid optimized rowClick={action}>
        <TextField disabled source="id" />
        <TextField source="email" />
        <TextField source="sdt" />
        <TextField source="name" />
        <TextField source="role" />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

export default ListGuest;
