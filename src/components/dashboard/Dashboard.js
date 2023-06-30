import React from 'react';
import Welcome from './Welcome';
import MonthlyRevenue from './Revenue';
import GuestToal from './Guests';

const styles = {
  flex: { display: 'flex' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  leftCol: { flex: 1, marginRight: '0.5em' },
  rightCol: { flex: 1, marginLeft: '0.5em' },
  singleCol: { marginTop: '1em', marginBottom: '1em' },
};
function Spacer() {
  return <span style={{ width: '1em' }} />;
}

export default function Dashboard() {
  return (
    <div>
      <div style={styles.singleCol}>
        <Welcome />
      </div>
      <div style={styles.flex}>
        <MonthlyRevenue />
        <Spacer />
        <GuestToal />
      </div>
    </div>
  );
}
