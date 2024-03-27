import { useAppSelector } from '../store/store';

export const useUser = () => {
  const { email, token, id } = useAppSelector((state) => state.user);
  return {
    email,
    token,
    id,
  };
};
