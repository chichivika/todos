import { TodosStateType } from "appRedux/todos/todosSlice";
import { configureStore } from "@reduxjs/toolkit";
import { createTodosSlice } from "appRedux/todos/todosSlice";

export function configureTodosStoreByState(initialState: TodosStateType) {
    const todosReducer = createTodosSlice(initialState).reducer;
    const store = configureStore({
        reducer: todosReducer
    });
    return store;
}