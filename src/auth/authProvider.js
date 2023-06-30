import { useDispatch } from 'react-redux';

const AuthProvider = () => {
  const dispatch = useDispatch();
  return {
    login: async ({ email, password }) => {
      const request = new Request('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      if (data.user.role === 'guest') {
        return false;
      }
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('role', data.user.role);
      dispatch({
        type: 'accessToken',
        payload: data.access_token,
      });
    },
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
      return Promise.resolve();
    },
    checkAuth: () =>
      localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
      const { status } = error;
      if (status === 401 || status === 403) {
        localStorage.removeItem('token');
        return Promise.reject();
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
    },
    getIdentity: () =>
      fetch(`http://localhost:3000/users/${localStorage.getItem('userId')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) =>
          Promise.resolve({
            id: data.id,
            fullName: data.name,
          }),
        ),
    getPermissions: () => {
      const role = localStorage.getItem('role');
      return role ? Promise.resolve(role) : Promise.reject();
    },
  };
};

export default AuthProvider;
