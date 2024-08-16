import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

const store = configureStore({
  reducer: todosReducer
});

export default store;
export type StateType = ReturnType<typeof store.getState>;