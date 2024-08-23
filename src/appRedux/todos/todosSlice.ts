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
            selectItems:(state)=>{
                return state.items;
            },
            selectActiveItems:(state)=>{
                return state.items.filter(item => item.isActive);
            },
            selectCompletedItems:(state)=>{
                return state.items.filter(item => !item.isActive);
            }
        }
    });
}
const todosSlice = createTodosSlice(getInitialTodosState());
export default todosSlice.reducer;
export const { createItem, updateItem, setItems } = todosSlice.actions;
export const {selectItems, selectActiveItems, selectCompletedItems} = todosSlice.selectors;
