const authProvider = {
  login: ({ email, password }) => {
    const request = new Request('http://localhost:3000/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.access_token);
      });
  },
  logout: () => {
    localStorage.removeItem('token');
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
  getIdentity: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
