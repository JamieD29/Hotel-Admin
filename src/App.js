import { Admin, Resource } from 'react-admin';
import GroupIcon from '@mui/icons-material/Group';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import MyLoginPage from './layout/Login';
import authProvider from './auth/authProvider';
import rooms from './components/rooms/index';
import guests from './components/guests/index';
import invoice from './components/invoices/index';
import Dashboard from './components/dashboard/index';
import dataProvider from './dataProvider/dataProvider';

function App() {
  return (
    <Admin
      loginPage={MyLoginPage}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard.DashboardComponent}
      darkTheme={{ palette: { mode: 'dark' } }}
    >
      <Resource icon={BedroomChildIcon} name="rooms" {...rooms} />
      <Resource icon={GroupIcon} name="users" {...guests} />
      <Resource name="invoice" {...invoice} />
    </Admin>
  );
}

export default App;
