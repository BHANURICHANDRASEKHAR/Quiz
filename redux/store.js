// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import problemlist from './problemlist';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    problemlist:problemlist.reducer
  
  },
});

export default store;
