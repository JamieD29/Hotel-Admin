import { Admin, Resource, usePermissions } from 'react-admin';
import { useSelector } from 'react-redux';
import GroupIcon from '@mui/icons-material/Group';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import MyLoginPage from './layout/Login';
// import authProvider from './auth/authProvider';
import rooms from './components/rooms/index';
import guests from './components/guests/index';
import invoice from './components/invoices/index';
import Dashboard from './components/dashboard/index';
import dataProvider from './dataProvider/dataProvider';
import AuthProvider from './auth/authProvider';
import ListGuest from './components/guests/ListGuest';
import ShowGuest from './components/guests/ShowGuest';

function App() {
  const role = localStorage.getItem('role');
  // let authToken = localStorage.getItem('token');
  // const token = useSelector((state) => state.authenData.accessToken);
  // if (!authToken) {
  //   authToken = token;
  // }
  const renderPage = () => {
    if (role === 'invoice manager') {
      return (
        <Admin
          loginPage={MyLoginPage}
          authProvider={AuthProvider()}
          dataProvider={dataProvider()}
          dashboard={Dashboard.DashboardComponent}
          darkTheme={{ palette: { mode: 'dark' } }}
        >
          <Resource
            icon={GroupIcon}
            name="users"
            list={ListGuest}
            show={ShowGuest}
          />
          <Resource name="invoice" {...invoice} />
        </Admin>
      );
    }
    if (role === 'room manager') {
      return (
        <Admin
          loginPage={MyLoginPage}
          authProvider={AuthProvider()}
          dataProvider={dataProvider()}
          dashboard={Dashboard.DashboardComponent}
          darkTheme={{ palette: { mode: 'dark' } }}
        >
          <Resource
            icon={GroupIcon}
            name="users"
            list={ListGuest}
            show={ShowGuest}
          />
          <Resource icon={BedroomChildIcon} name="rooms" {...rooms} />
        </Admin>
      );
    }
    return (
      <Admin
        loginPage={MyLoginPage}
        authProvider={AuthProvider()}
        dataProvider={dataProvider()}
        dashboard={Dashboard.DashboardComponent}
        darkTheme={{ palette: { mode: 'dark' } }}
      >
        <Resource icon={BedroomChildIcon} name="rooms" {...rooms} />
        <Resource icon={GroupIcon} name="users" {...guests} />
        <Resource name="invoice" {...invoice} />
      </Admin>
    );
  };

  return renderPage();
}

export default App;
