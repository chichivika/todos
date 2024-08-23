import { createSlice } from '@reduxjs/toolkit';

export type DialogStateType = {
    confirm: {
        open: boolean,
        type: 'info' | 'confirm',
        title?: string,
        text?: string
    }
};
export function getInitialDialogState(): DialogStateType {
    //data for all dialogs
    return {
        //data for confirm dialog
        confirm: getInitialConfirmState()
    };
}
function getInitialConfirmState():DialogStateType['confirm']{
    return {
        open: false,
        type: 'info'
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
                    type: data.type,
                    text: data.text,
                    title: data.title
                };
            },
            closeConfirmDialog: (state) => {
                state.confirm = getInitialConfirmState();;
            }
        }
    });
}

const dialogSlice = createDialogSlice(getInitialDialogState());
export default dialogSlice.reducer;
export const { openConfirmDialog, closeConfirmDialog } = dialogSlice.actions;
