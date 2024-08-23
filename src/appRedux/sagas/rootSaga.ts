import { all } from 'redux-saga/effects';
import { deleteCompletedSaga } from "./askDeleteSaga"
import { readTasksSaga } from './readTasksSaga';

export default function* rootSaga() {
    yield all([
        deleteCompletedSaga(),
        readTasksSaga()
    ])
}