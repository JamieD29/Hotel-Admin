import * as React from 'react';
import { Card, Box, Typography, Divider } from '@mui/material';
import { Link, To } from 'react-router-dom';
import PropTypes from 'prop-types';
import cartouche from '../img/cartouche.png';
import cartoucheDark from '../img/cartoucheDark.png';

function CardWithIcon({ icon, title, subtitle, to }) {
  return (
    <Card
      sx={{
        minHeight: 52,
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        '& a': {
          textDecoration: 'none',
          color: 'inherit',
        },
      }}
    >
      <Link to={to}>
        <Box
          sx={{
            overflow: 'inherit',
            padding: '16px',
            background: (theme) =>
              `url(${
                theme.palette.mode === 'dark' ? cartoucheDark : cartouche
              }) no-repeat`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .icon': {
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'inherit' : '#dc2440',
            },
          }}
        >
          <Box width="3em" className="icon">
            {React.createElement(icon, { fontSize: 'large' })}
          </Box>
          <Box textAlign="right">
            <Typography color="textSecondary">{title}</Typography>
            <Typography variant="h5" component="h2">
              {subtitle || ' '}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Card>
  );
}

CardWithIcon.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default CardWithIcon;
