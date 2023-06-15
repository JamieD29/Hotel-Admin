// in src/MyLayout.js
import { Layout } from 'react-admin';

import MyMenu from './Menu';

export default function MyLayout(props) {
  return <Layout {...props} menu={MyMenu} />;
}
