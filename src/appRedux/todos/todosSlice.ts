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

export function createTodosSlice(initialState: TodosStateType) {

    return createSlice({
        name: 'todos',
        initialState: initialState,
        reducers: {
            //put my tasks in store
            setItems: (state, action) => {
                state.items = action.payload;
            },
            //create new task
            createItem: (state, action) => {
                state.items.unshift(action.payload);
            },
            //update task
            updateItem: (state, action) => {
                const newItem = action.payload;
                const index = state.items.findIndex(item => item.desc === newItem.desc);
                state.items.splice(index, 1, newItem);
            }
        },
        selectors: {
        }
    });
}
const todosSlice = createTodosSlice(getInitialTodosState());
export default todosSlice.reducer;
export const { createItem, updateItem, setItems } = todosSlice.actions;
