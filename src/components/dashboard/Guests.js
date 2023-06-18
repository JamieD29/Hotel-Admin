import React, { useEffect, useState } from 'react';
import { useTranslate } from 'react-admin';
import axios from 'axios';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardWithIcon from './utils/components/CardWithIcon';

function GuestTotal(props) {
  // const { value } = props;
  const token = localStorage.getItem('token');
  const [user, setUsers] = useState();
  const value = user?.length;
  useEffect(() => {
    axios
      .get('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((respond) => {
        setUsers(respond.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <CardWithIcon
      to="/users"
      icon={PeopleAltIcon}
      title="Guests"
      subtitle={value}
    />
  );
}

export default GuestTotal;
