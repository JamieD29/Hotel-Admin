import axios from 'axios';

const apiUrl = 'http://localhost:3000';
const authToken = localStorage.getItem('token');
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

const dataProvider = {
  getList: async (resource, params) =>
    axiosInstance.get(`/${resource}`, { params }).then((response) => {
      return {
        data: response.data,
        total: response.headers[response.data.length],
      };
    }),
  getOne: async (resource, params) => {
    const { id } = params;
    return axiosInstance.get(`/${resource}/${id}`).then((response) => {
      return {
        data: response.data,
      };
    });
  },

  create: (resource, params) =>
    axiosInstance.post(`/${resource}`, params.data).then((response) => {
      return {
        data: response.data,
      };
    }),
  update: async (resource, params) => {
    const { id } = params;
    return axiosInstance
      .put(`/${resource}/${id}`, params.data)
      .then((response) => {
        return {
          data: response.data,
        };
      });
  },

  delete: async (resource, params) => {
    const { id } = params;
    return axiosInstance.delete(`/${resource}/${id}`).then((response) => {
      return {
        data: response.data,
      };
    });
  },
};

export default dataProvider;
