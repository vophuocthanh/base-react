import axiosClient from '@/api/axios-client';
import { LoginResponse, RegisterResponse } from '@/shared/interface/auth.interface';
import { AccountUser } from '@/shared/interface/user.interface';

export const authApi = {
  login(data: AccountUser): Promise<LoginResponse> {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },
  register(data: AccountUser): Promise<RegisterResponse> {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
};
