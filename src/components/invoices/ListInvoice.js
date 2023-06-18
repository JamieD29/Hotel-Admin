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

function ListInvoice() {
  return (
    <List filters={RoomFilters}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="total_price" />
        <TextField source="invoice_date" />
        <TextField source="user.name" />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

export default ListInvoice;
