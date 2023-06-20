import React from 'react';
import {
  Datagrid,
  EditButton,
  Link,
  List,
  ReferenceField,
  ShowButton,
  TextField,
  TextInput,
} from 'react-admin';

const GuestFilter = [<TextInput label="Search" source="id" alwaysOn />];

function ListGuest() {
  return (
    <List filters={GuestFilter}>
      <Datagrid>
        <TextField disabled source="id" />
        <TextField source="email" />
        <TextField source="sdt" />
        <TextField source="name" />
        <TextField source="role" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

export default ListGuest;
