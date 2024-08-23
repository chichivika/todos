import { takeEvery, call, select, put } from 'redux-saga/effects';
import { sagaActionsNames } from '../storeUtils';
import { getAllTasks } from 'service/requests';
import { TodosItemsType } from 'utils/appUtils';
import { selectItemsWereRead } from 'appRedux/status/statusSlice';
import { setItems } from 'appRedux/todos/todosSlice';
import { setItemsWereRead, setTodosLoading } from 'appRedux/status/statusSlice';

export function* readTasks() {
    const wereRead:boolean | undefined = yield select(selectItemsWereRead);
    if (wereRead) return;
    yield put(setItemsWereRead(true));
    yield put(setTodosLoading(true));

    try {
        const items: TodosItemsType = yield call(getAllTasks);
        yield put(setItems(items));
        console.log('reading');
    }
    catch (err) {
        alert(err);
    }
    finally{
        yield put(setTodosLoading(false));
    }
}

export function* readTasksSaga() {
    yield takeEvery(sagaActionsNames.readTasks, readTasks);
}