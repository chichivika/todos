import { put, takeEvery, race, take, select, call } from 'redux-saga/effects';
import { sagaActionsNames } from '../storeUtils';
import { openConfirmDialog, closeConfirmDialog } from '../dialog/dialogSlice';
import { deleteCompletedTasks } from 'service/requests';
import { TodosItemsType } from 'utils/appUtils';
import { showRequestError } from './errorSaga';
import { setItems } from 'appRedux/todos/todosSlice';
import { setTodosLoading } from 'appRedux/status/statusSlice';
import { selectItems } from 'appRedux/todos/todosSlice';


export function* askDeleteCompleted() {
    yield put(openConfirmDialog({
        type: 'confirm',
        title: 'Clear completed tasks?',
        text: 'Are you sure you want to clear all your completed tasks forever?'
    }));

    const { ok } = yield race({
        ok: take(sagaActionsNames.confirmDialogOk),
        cancel: take(sagaActionsNames.confirmDialogCancel)
    })
    yield put(closeConfirmDialog());
    if (!ok) return;

    yield put(setTodosLoading(true));
    let items: TodosItemsType = yield select(selectItems);
    try {
        let newItems: TodosItemsType = yield call(deleteCompletedTasks, items);
        yield put(setItems(newItems));
    }
    catch (err) {
        yield call(showRequestError, err);
    }
    finally{
        yield put(setTodosLoading(false));
    }
}

export function* deleteCompletedSaga() {
    yield takeEvery(sagaActionsNames.askDeleteCompleted, askDeleteCompleted);
}