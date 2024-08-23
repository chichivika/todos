import { createSlice } from '@reduxjs/toolkit';

export type StatusStateType = {
    //initial reading of my tasks
    itemsWereRead: boolean,
    //true if there are some requests for tasks
    todosLoading: boolean
};
export function getInitialStatusState(): StatusStateType {
    return {
        itemsWereRead: false,
        todosLoading: false
    };
}

export function createStatusSlice(initialState: StatusStateType) {

    return createSlice({
        name: 'status',
        initialState: initialState,
        reducers: {
            //update property itemsWereRead
            setItemsWereRead: (state, action) => {
                state.itemsWereRead = action.payload;
            },
            setTodosLoading: (state, action) => {
                state.todosLoading = action.payload;
            },
        },
        selectors: {
            selectItemsWereRead: state => {
                return state.itemsWereRead;
            },
            selectTodosLoading: state => {
                return state.todosLoading;
            }
        }
    });
}
const statusSlice = createStatusSlice(getInitialStatusState());
export default statusSlice.reducer;
export const { setItemsWereRead, setTodosLoading } = statusSlice.actions;
export const { selectItemsWereRead, selectTodosLoading } = statusSlice.selectors;
