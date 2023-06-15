import {
  Avatar,
  Box,
  Card,
  CardActions,
  CircularProgress,
  Button,
  Typography,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import * as React from 'react';
import { useState } from 'react';
import {
  useLogin,
  useNotify,
  Notification,
  Form,
  TextInput,
} from 'react-admin';

function MyLoginPage() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = () => {
    // will call authProvider.login({ email, password })
    login({ username, password }).catch(() =>
      notify('Invalid email or password'),
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: 'url(https://source.unsplash.com/featured/1600x900)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Card sx={{ minWidth: 300, marginTop: '6em' }}>
          <Box
            sx={{
              margin: '1em',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              <LockIcon />
            </Avatar>
          </Box>
          <Box
            sx={{
              marginTop: '1em',
              display: 'flex',
              justifyContent: 'center',
              color: (theme) => theme.palette.grey[500],
            }}
          >
            Hint: john / 123
          </Box>
          <Box sx={{ padding: '0 1em 1em 1em' }}>
            <Box sx={{ marginTop: '1em' }}>
              <Typography variant="h6" gutterBottom>
                Username
              </Typography>
              <TextInput
                name="email"
                type="text"
                placeholder="Enter..."
                value={username}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Box>
            <Box sx={{ marginTop: '1em' }}>
              <Typography variant="h6" gutterBottom>
                Password
              </Typography>
              <TextInput
                name="password"
                placeholder="Enter..."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <CardActions sx={{ padding: '0 1em 1em 1em' }}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              disabled={loading}
              fullWidth
            >
              Login
              {loading && <CircularProgress size={25} thickness={2} />}
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Form>
  );
}

export default MyLoginPage;
