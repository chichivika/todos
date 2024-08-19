import { createSlice } from '@reduxjs/toolkit';
import { TodosItemsType } from "utils/appUtils";

export type TodosStateType = {
    items: TodosItemsType
};
export function getInitialTodosState(): TodosStateType {
    return {
        items: []
    };
}

export function createTodosSlice(initialState:TodosStateType){

    return createSlice({
        name: 'todos',
        initialState: initialState,
        reducers: {
            //create new task
            createItem: (state, action) => {
                state.items.unshift({
                    desc: action.payload,
                    isActive: true
                });
            },
            //update task
            updateItem: (state, action) => {
                const newItem = action.payload;
                const index = state.items.findIndex(item => item.desc === newItem.desc);
                state.items.splice(index, 1, newItem);
            },
            //clear all completed tasks
            deleteCompleted: (state) => {
                state.items = state.items.filter(item=>item.isActive);
            }
        }
    });
}
const todosSlice = createTodosSlice(getInitialTodosState());
export default todosSlice.reducer;
export const { createItem, updateItem, deleteCompleted } = todosSlice.actions;
