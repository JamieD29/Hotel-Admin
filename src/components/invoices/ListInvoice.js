import React from 'react';
import {
  Datagrid,
  List,
  SearchInput,
  ShowButton,
  TextField,
} from 'react-admin';
// import InvoiceFilterSidebar from './FilterAside';

const InvoiceFilter = [<SearchInput source="invoice_date" alwaysOn />];

function ListInvoice() {
  return (
    <List filters={InvoiceFilter}>
      <Datagrid optimized rowClick="show">
        <TextField source="id" />
        <TextField source="total_price" />
        <TextField source="invoice_date" />
        <TextField source="user.name" />
        <TextField source="status" />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

export default ListInvoice;
