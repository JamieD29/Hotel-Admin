import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Decimal } from 'decimal.js';
import DollarIcon from '@mui/icons-material/AttachMoney';
import CardWithIcon from './utils/components/CardWithIcon';

function MonthlyRevenue() {
  const token = localStorage.getItem('token');
  const [value, setValue] = useState();

  if (value === undefined) {
    setValue('0');
  }
  useEffect(() => {
    axios
      .post(
        'http://localhost:3000/payment/revenue',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((respond) => {
        const result = respond.data.data;
        const number = new Decimal(result);
        const formattedNumber = number.toFixed();

        setValue(formattedNumber);
      })
      .catch((err) => err);
  }, []);

  return (
    <CardWithIcon
      to="/invoice"
      icon={DollarIcon}
      title="Revenue"
      subtitle={value}
    />
  );
}

export default MonthlyRevenue;
