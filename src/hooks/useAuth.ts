import Cookies from 'js-cookie';
import { useAppSelector } from '../store/store';
import { USER_INITIAL } from '../const';
import type { User } from '../const';

export const useAuth = (): User => {
  const { email, password, id, isAuth } = useAppSelector((state) => state.user);
  return {
    isAuth,
    email,
    password,
    id,
  };
};

export function getUserFromCookies(): User {
  const userString = Cookies.get('user');
  const user = userString ? JSON.parse(userString) : USER_INITIAL;
  return user;
}
