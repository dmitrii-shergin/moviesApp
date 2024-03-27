import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_INITIAL, User } from '../../const';

const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL,
  reducers: {
    setUser: (_, action: PayloadAction<User>) => action.payload,
    removeUser: () => USER_INITIAL,
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
