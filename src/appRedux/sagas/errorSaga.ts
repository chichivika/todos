import { put, take } from 'redux-saga/effects';
import { openConfirmDialog, closeConfirmDialog } from '../dialog/dialogSlice';
import { sagaActionsNames } from 'appRedux/storeUtils';

export function* showRequestError(err: unknown){
    const message = err instanceof Error ? err.message : 'Unknown error';
        
    yield put(openConfirmDialog({
        type: 'info',
        title: 'Error',
        text: message
    }));
    yield take(sagaActionsNames.confirmDialogOk);
    yield put(closeConfirmDialog());
}