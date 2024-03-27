export interface User {
  email: string | null;
  id: string | null;
  token: string | null;
}

export const USER_INITIAL: User = {
  email: null,
  id: null,
  token: null,
};
