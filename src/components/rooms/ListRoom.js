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

const RoomFilters = [<TextInput label="Search" source="id" alwaysOn />];

function RoomList() {
  return (
    <List filters={RoomFilters}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="type" />
        <TextField source="bed_count" />
        <TextField source="status" />
        <TextField source="price" />

        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

export default RoomList;
