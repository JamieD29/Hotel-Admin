import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardWithIcon from './utils/components/CardWithIcon';

function GuestTotal() {
  const token = localStorage.getItem('token');
  const [user, setUsers] = useState();
  const range = user?.length;
  const value = String(range);
  useEffect(() => {
    axios
      .get('http://localhost:3000/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((respond) => {
        const filteredResponse = respond.data.filter(
          (otherUser) => otherUser.role === 'guest',
        );
        setUsers(filteredResponse);
      })
      .catch((err) => err.message);
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
