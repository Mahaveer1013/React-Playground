import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'

const store = configureStore({
  devTools: import.meta.env.MODE !== 'production',
  reducer: {
    auth: authReducer,
  },
});

export default store;
