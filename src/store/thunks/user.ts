import type { User } from '../../types/user';

import { createAppAsyncThunk } from '../../hooks/store';
import { Endpoint } from '../../utils/data';

export const checkAuth = createAppAsyncThunk<User, undefined>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<User>(Endpoint.Login);
    return response.data;
  },
);

type LoginData = {
  email: string;
  password: string;
};

export const login = createAppAsyncThunk<User, LoginData>(
  'auth/login',
  async (body, { extra: api }) => {
    const response = await api.post<User>(Endpoint.Login, body);
    return response.data;
  },
);

export const logout = createAppAsyncThunk<unknown, undefined>(
  'auth/logout',
  async (_, { extra: api }) => {
    await api.delete(Endpoint.Logout);
  },
);
