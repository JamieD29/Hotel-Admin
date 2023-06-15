import { Menu } from 'react-admin';

export default function MyMenu() {
  return (
    <Menu>
      <Menu.DashboardItem />
      <Menu.ResourceItem name="posts" />
      {/* <Menu.ResourceItem name="comments" /> */}
      <Menu.ResourceItem name="users" />
    </Menu>
  );
}
