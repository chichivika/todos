import { askDeleteCompleted } from "appRedux/sagas/askDeleteSaga";
import { expectSaga } from "redux-saga-test-plan";
import { sagaActionsNames } from "appRedux/storeUtils";
import { race, take, call } from "redux-saga/effects";
import { testItems, activeItems } from "./testUtils";
import { createTodosSlice } from "appRedux/todos/todosSlice";
import { deleteCompletedTasks } from "service/requests";

describe('askDeleteCompletedSaga test', () => {
    it('agree to clear completed', () => {
        const todosSlice = createTodosSlice({items: testItems});

        return expectSaga(askDeleteCompleted)
            .withReducer(todosSlice.reducer)
            .provide([
                [race({
                    ok: take(sagaActionsNames.confirmDialogOk),
                    cancel: take(sagaActionsNames.confirmDialogCancel)
                }), {ok: true}],
                [call(deleteCompletedTasks, []), activeItems]
            ])
            .hasFinalState({items: activeItems})
            .run();
    });
    it('disagree to clear completed', () => {
        const todosSlice = createTodosSlice({items: testItems});

        return expectSaga(askDeleteCompleted)
            .withReducer(todosSlice.reducer)
            .provide([
                [race({
                    ok: take(sagaActionsNames.confirmDialogOk),
                    cancel: take(sagaActionsNames.confirmDialogCancel)
                }), {ok: false}]
            ])
            .hasFinalState({items: testItems})
            .run();
    });
});

