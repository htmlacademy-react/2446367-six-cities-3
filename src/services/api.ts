import axios from 'axios';

import type { AxiosError, AxiosInstance } from 'axios';

import { getToken } from './token';
import { toast } from 'react-toastify';

const enum Default {
  BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000,
}

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Default.BaseUrl as string,
    timeout: Default.Timeout as number,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const toastId = 'api-error-toast';
      if (error.response) {
        toast.error(`Server error: ${error.response.status}`, { toastId });
      } else if (error.request) {
        toast.error('Server is unavailable. Please try again later.', {
          toastId,
        });
      } else {
        toast.error('Unexpected error occurred.', { toastId });
      }

      return Promise.reject(error);
    },
  );

  return api;
};
