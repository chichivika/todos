import { takeEvery, call, put } from "redux-saga/effects";
import { sagaActionsNames } from "appRedux/storeUtils";
import { TodosItemType } from "utils/appUtils";
import { Action } from "appRedux/storeUtils";
import { setTodosLoading } from 'appRedux/status/statusSlice';
import { updateTask as serviceUpdate, createTask as serviceCreate} from "service/requests";
import { showRequestError } from "./errorSaga";
import { createItem, updateItem } from "appRedux/todos/todosSlice";

export function* createTask(action: Action<string>){
    yield put(setTodosLoading(true));

    try{
        const desc = action.payload as string;
        let item: TodosItemType = yield call(serviceCreate, desc);
        yield put(createItem(item));
    }
    catch(err){
        yield call(showRequestError,err);
    }
    finally{
        yield put(setTodosLoading(false));
    }
}
export function* updateTask(action: Action<TodosItemType>){
    yield put(setTodosLoading(true));

    try{
        const item = action.payload as TodosItemType;
        const newItem: TodosItemType = yield call(serviceUpdate, item);
        yield put(updateItem(newItem));
    }
    catch(err){
        yield call(showRequestError,err);
    }
    finally{
        yield put(setTodosLoading(false));
    }
}


export function* updateTaskSaga() {
    yield takeEvery(sagaActionsNames.updateTask, updateTask);
}
export function* createTaskSaga() {
    yield takeEvery(sagaActionsNames.createTask, createTask);
}