import { createSlice } from '@reduxjs/toolkit';

export type DialogStateType = {
    confirm: {
        open: boolean,
        title?: string,
        text?: string
    }
};
export function getInitialDialogState(): DialogStateType {
    //data for all dialogs
    return {
        //data for confirm dialog
        confirm: {
            open: false
        }
    };
}

export function createDialogSlice(initialState:DialogStateType){

    return createSlice({
        name: 'dialog',
        initialState: initialState,
        reducers: {
            openConfirmDialog: (state, action) => {
                const data = action.payload;
                state.confirm = {
                    open: true,
                    text: data.text,
                    title: data.title
                };
            },
            closeConfirmDialog: (state) => {
                state.confirm = {
                    open: false
                };
            }
        }
    });
}
const dialogSlice = createDialogSlice(getInitialDialogState());
export default dialogSlice.reducer;
export const { openConfirmDialog, closeConfirmDialog } = dialogSlice.actions;
