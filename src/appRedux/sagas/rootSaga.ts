import { all } from 'redux-saga/effects';
import { deleteCompletedSaga } from "./askDeleteSaga"
import { readTasksSaga } from './readTasksSaga';
import {updateTaskSaga, createTaskSaga} from './updateTaskSaga';

export default function* rootSaga() {
    yield all([
        deleteCompletedSaga(),
        readTasksSaga(),
        createTaskSaga(),
        updateTaskSaga()
    ])
}