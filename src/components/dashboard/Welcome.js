import * as React from 'react';
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';

function Welcome() {
  return (
    <Card
      sx={{
        backgroundColor: 'rgb(97,97,108)',
        background:
          'linear-gradient(90deg, rgba(97,97,108,1) 8%, rgba(103,103,136,1) 45%, rgba(188,213,218,1) 84%)',
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
