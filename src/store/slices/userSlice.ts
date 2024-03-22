import Cookies from 'js-cookie';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserFromCookies } from '../../hooks/useAuth';
import { USER_INITIAL, User } from '../../const';

const userSlice = createSlice({
  name: 'user',
  initialState: getUserFromCookies(),
  reducers: {
    setUser: (_, action: PayloadAction<User>) => {
      Cookies.set('user', JSON.stringify(action.payload));
      return action.payload;
    },
    removeUser: () => {
      Cookies.remove('user');
      return USER_INITIAL;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
