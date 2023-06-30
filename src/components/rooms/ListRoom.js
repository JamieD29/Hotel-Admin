import React from 'react';
import {
  Datagrid,
  List,
  ShowButton,
  TextField,
  Pagination,
  SearchInput,
} from 'react-admin';
import RoomFilterSidebar from './FilterAside';

const RoomFilters = [<SearchInput source="id" alwaysOn />];

function PostPagination() {
  return <Pagination rowsPerPageOptions={[5, 10, 20, 50]} />;
}

function RoomList() {
  return (
    <List
      pagination={<PostPagination />}
      filters={RoomFilters}
      aside={<RoomFilterSidebar />}
    >
      <Datagrid optimized rowClick="edit">
        <TextField source="id" />
        <TextField source="type" />
        <TextField source="bed_count" />
        <TextField source="status" />
        <TextField source="price" />
        <ShowButton />
      </Datagrid>
    </List>
  );
}

export default RoomList;
