import {all, put, takeEvery, race, take} from 'redux-saga/effects';
import { sagaActionsNames } from './storeUtils';
import { deleteCompleted } from './todos/todosSlice';
import { openConfirmDialog, closeConfirmDialog } from './dialog/dialogSlice';


export function* askDeleteCompleted(){
    yield put(openConfirmDialog({
        title:'Clear completed tasks?',
        text: 'Are you sure you want to clear all your completed tasks forever?'
    }));

    const { ok } = yield race({
        ok: take(sagaActionsNames.confirmDialogOk),
        cancel: take(sagaActionsNames.confirmDialogCancel)
    })

    if(ok){
        yield put(deleteCompleted());
    }

    yield put(closeConfirmDialog());
}

function* deleteCompletedSaga(){
    yield takeEvery(sagaActionsNames.askDeleteCompleted, askDeleteCompleted);
}

export default function* rootSaga() {
    yield all([
        deleteCompletedSaga()
    ])
  }