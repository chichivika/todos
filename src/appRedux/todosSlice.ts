import { createSlice } from '@reduxjs/toolkit';
import { getInitialTodosState } from './storeUtils';

const todosSlice = createSlice({
    name: 'todos',
    initialState: getInitialTodosState(),
    reducers: {
        createItem: (state, action) => {
            state.items.unshift({
                desc: action.payload,
                isActive: true
            });
        },
        updateItem: (state, action) => {
            const newItem = action.payload;
            const index = state.items.findIndex(item => item.desc === newItem.desc);
            state.items.splice(index, 1, newItem);
        },
        deleteCompleted: (state) => {
            state.items = state.items.filter(item=>item.isActive);
        }
    }
})

export const { createItem, updateItem, deleteCompleted } = todosSlice.actions;
export default todosSlice.reducer;