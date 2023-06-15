import * as React from 'react';
import DollarIcon from '@mui/icons-material/AttachMoney';
import { useTranslate } from 'react-admin';

import CardWithIcon from './utils/components/CardWithIcon';

function MonthlyRevenue(props) {
  // const { value } = props;
  const value = '10000000';
  return (
    <CardWithIcon
      to="/commands"
      icon={DollarIcon}
      title="MonthlyRevenue"
      subtitle={value}
    />
  );
}

export default MonthlyRevenue;
