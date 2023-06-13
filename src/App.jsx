import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from 'react-admin';
//import { dataProvider } from "./dataProvider";
import jsonServerProvider from 'ra-data-json-server';
import { PostEdit, PostList } from './posts';
import { UserList } from './user';
function App() {
  return (
    <Admin
      dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
    >
      <Resource name="posts" list={PostList} edit={PostEdit} />
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
