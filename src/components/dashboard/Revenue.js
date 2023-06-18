import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DollarIcon from '@mui/icons-material/AttachMoney';
import CardWithIcon from './utils/components/CardWithIcon';

function MonthlyRevenue() {
  // const { value } = props;

  const [value, setValue] = useState();
  useEffect(() => {
    axios
      .post('http://localhost:3000/payment/revenue')
      .then((respond) => {
        console.log(respond);
        setValue(respond.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <CardWithIcon
      to="/invoice"
      icon={DollarIcon}
      title="MonthlyRevenue"
      subtitle={value}
    />
  );
}

export default MonthlyRevenue;
