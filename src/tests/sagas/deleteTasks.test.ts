import { askDeleteCompleted } from "appRedux/sagas/askDeleteSaga";
import { expectSaga } from "redux-saga-test-plan";
import { sagaActionsNames } from "appRedux/storeUtils";
import { race, take, call } from "redux-saga/effects";
import { testItems, activeItems, completedItems } from "../testUtils";
import { createTodosSlice } from "appRedux/todos/todosSlice";
import { deleteCompletedTasks } from "service/requests";
import { combineReducers } from "@reduxjs/toolkit";

describe('askDeleteCompletedSaga test', () => {
    it('agree to clear completed', () => {
        const initialState = { items: testItems };
        const todosSlice = createTodosSlice(initialState);

        return expectSaga(askDeleteCompleted)
            .withReducer(combineReducers({
                todos:todosSlice.reducer
            }))
            .withState({todos: initialState})
            .provide([
                [race({
                    ok: take(sagaActionsNames.confirmDialogOk),
                    cancel: take(sagaActionsNames.confirmDialogCancel)
                }), { ok: true }],
                [call(deleteCompletedTasks, completedItems), activeItems]
            ])
            .hasFinalState({todos: { items: activeItems }})
            .run();
    });
    it('disagree to clear completed', () => {
        const initialState = { items: testItems };
        const todosSlice = createTodosSlice(initialState);

        return expectSaga(askDeleteCompleted)
            .withReducer(combineReducers({
                todos:todosSlice.reducer
            }))
            .withState({todos: initialState})
            .provide([
                [race({
                    ok: take(sagaActionsNames.confirmDialogOk),
                    cancel: take(sagaActionsNames.confirmDialogCancel)
                }), { ok: false }]
            ])
            .hasFinalState({todos: initialState})
            .run();
    });
});