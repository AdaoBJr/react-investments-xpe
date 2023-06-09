import { api } from '../api';
import { getEnv } from 'environment';
import { GetInvestments } from 'types/domain';

export const useInvestimentsApi = () => {
  const { URL_BASE } = getEnv();

  const getInvestiments = async () => {
    const res = await api.get<GetInvestments>(URL_BASE);
    return res.data;
  };

  return { getInvestiments };
};
