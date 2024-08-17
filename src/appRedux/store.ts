import { configureStore } from '@reduxjs/toolkit';
import { TodosStateType } from './storeUtils';
import { createTodosSlice } from './todosSlice';
import { getInitialTodosState } from './storeUtils';

export function configureStoreDataByInitialState(initialState: TodosStateType) {
  const todosSlice = createTodosSlice(initialState);
  return {
    store: configureStore({
      reducer: todosSlice.reducer
    }),
    todosSlice
  };
}
export function configureStoreByState(initialState: TodosStateType){
  const {store} = configureStoreDataByInitialState(initialState);
  return store;
}

const {store, todosSlice} = configureStoreDataByInitialState(getInitialTodosState());
export default store;
export const { createItem, updateItem, deleteCompleted } = todosSlice.actions;
export type StateType = ReturnType<typeof store.getState>;