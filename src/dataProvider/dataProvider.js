import axios from 'axios';
import queryString from 'query-string';
import { fetchUtils } from 'react-admin';
import { useSelector } from 'react-redux';

const DataProvider = () => {
  const apiUrl = 'http://localhost:3000';
  const httpClient = fetchUtils.fetchJson;
  let authToken = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const token = useSelector((state) => state.authenData.accessToken);
  if (!authToken) {
    authToken = token;
  }
  const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return {
    getList: async (resource, params) => {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const { filter } = params;
      const query = {
        page,
        perPage,
        sort: JSON.stringify([field, order]),
        filter: JSON.stringify(filter),
      };
      // const query = {
      //   sort: JSON.stringify([field, order]),
      //   range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      //   filter: JSON.stringify(params.filter),
      // };
      let roleUrl = '';
      switch (role) {
        case 'admin':
          roleUrl = 'admin';
          break;
        case 'invoice manager':
          roleUrl = 'invoice-manager';
          break;
        case 'room manager':
          roleUrl = 'room-manager';
          break;
        default:
          break;
      }
      let url = `${apiUrl}/${resource}?${queryString.stringify(query)}`;
      if (resource === 'users') {
        url = `${apiUrl}/${resource}/${roleUrl}?${queryString.stringify(
          query,
        )}`;
      }

      const requestHeaders = new Headers({
        Authorization: `Bearer ${authToken}`,
      });

      return httpClient(url, { headers: requestHeaders }).then(
        ({ headers, json }) => {
          const filteredData = json.filter((item) => {
            for (const key in filter) {
              if (!item[key].toString().includes(filter[key])) {
                return false;
              }
            }
            return true;
          });
          const collator = new Intl.Collator(undefined, {
            numeric: true,
          });
          const sortedData = filteredData.sort((a, b) => {
            if (order === 'ASC') {
              return collator.compare(a[field], b[field]);
            }
            return collator.compare(b[field], a[field]);
          });
          const start = (page - 1) * perPage;
          const end = page * perPage;
          const data = sortedData.slice(start, end);

          // const sortedData = data.sort((a, b) => {
          //   if (order === 'ASC') {
          //     return collator.compare(a[field], b[field]);
          //   }
          //   return collator.compare(b[field], a[field]);
          // });
          return {
            data,
            total: parseInt(headers.get('x-total-count'), 10),
          };
        },
      );
    },
    getOne: async (resource, params) => {
      const { id } = params;
      return axiosInstance
        .get(`/${resource}/${id}`, { params })
        .then((response) => {
          return {
            data: response.data,
          };
        });
    },

    create: (resource, params) =>
      axiosInstance.post(`/${resource}`, params.data).then((response) => {
        return {
          data: {
            id: response.data.id,
            ...response.data,
          },
        };
      }),
    update: async (resource, params) => {
      const { id } = params;
      const tempId = id;
      return axiosInstance
        .put(`/${resource}/${id}`, params.data)
        .then((response) => {
          return {
            data: {
              id: Number(tempId),
              ...response.data,
            },
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
    deleteMany: async (resource, params) => {
      const { ids } = params;
      const deleteRequests = ids.map((id) =>
        axiosInstance.delete(`/${resource}/${id}`),
      );

      return Promise.all(deleteRequests).then((responses) => {
        return {
          data: responses.map((response) => response.data),
        };
      });
    },
  };
};

export default DataProvider;
