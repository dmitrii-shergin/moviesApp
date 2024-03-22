export interface User {
  isAuth: boolean;
  email: string | null;
  id: string | null;
  password: string | null;
}

export const USER_INITIAL: User = {
  isAuth: false,
  email: null,
  id: null,
  password: null,
};
