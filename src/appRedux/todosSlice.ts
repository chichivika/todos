import { createSlice } from '@reduxjs/toolkit';
import { TodosStateType } from './storeUtils';

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
