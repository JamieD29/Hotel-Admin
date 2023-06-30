import React from 'react';
import { Box, Card, Typography } from '@mui/material';

function Welcome() {
  let styleByRole = {};
  const role = localStorage.getItem('role');
  if (role === 'room manager') {
    styleByRole = {
      backgroundImage:
        'linear-gradient(to right top, #342ced, #2540ed, #1c4fec, #1e5ce9, #2967e5, #0076e7, #0083e7, #008fe5, #009fe3, #00acd8, #00b7c8, #32c0b7)',
    };
  } else if (role === 'invoice manager') {
    styleByRole = {
      backgroundColor: 'rgb(34,193,195)',
      background:
        'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    };
  } else {
    styleByRole = {
      backgroundColor: 'rgb(97,97,108)',
      background:
        'linear-gradient(90deg, rgba(97,97,108,1) 8%, rgba(103,103,136,1) 45%, rgba(188,213,218,1) 84%)',
    };
  }

  return (
    <Card
      sx={{
        ...styleByRole,
        color: '#fff',
        padding: '20px',
        marginTop: 2,
        marginBottom: '1em',
      }}
    >
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h3" component="h2" gutterBottom>
            Welcome to Hotel Administrator
          </Typography>
          <Box width="100%">
            <Typography variant="body1" component="p" gutterBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis soluta, architecto vel quod in obcaecati quam ullam
              aspernatur error officia inventore suscipit ut vero at accusantium
              incidunt voluptatum quos debitis sapiente odit recusandae maiores.
              Eaque sunt inventore atque voluptatibus, saepe facere non vitae
              tempora tenetur. Debitis ipsum itaque ullam quisquam.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Welcome;
