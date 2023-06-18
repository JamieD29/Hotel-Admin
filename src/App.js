import { Admin, Resource, fetchUtils } from 'react-admin';
// import { dataProvider } from "./dataProvider";
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
import GroupIcon from '@mui/icons-material/Group';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import MyLoginPage from './layout/Login';
import authProvider from './auth/authProvider';
import rooms from './components/rooms/index';
import guests from './components/guests/index';
import invoice from './components/invoices/index';
import CreateInvoice from './components/payment';
import Dashboard from './components/dashboard/index';
import dataProvider from './dataProvider/dataProvider';

// const httpClient = (url, options = {}) => {
//   let { headers } = options;
//   if (!headers) {
//     headers = new Headers({ Accept: 'application/json' });
//   }
//   const { token } = JSON.parse(localStorage.getItem('token'));
//   headers.set('Authorization', `Bearer ${token}`);
//   return fetchUtils.fetchJson(url);
// };

// const dataProvider = simpleRestProvider('http://localhost:3000', httpClient);

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
      <Resource name="payment" list="" create={<CreateInvoice />} />
    </Admin>
  );
}

export default App;
