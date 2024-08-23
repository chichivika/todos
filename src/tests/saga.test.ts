import { askDeleteCompleted } from "appRedux/sagas/askDeleteSaga";
import { expectSaga } from "redux-saga-test-plan";
import { sagaActionsNames, sagaActionsGetter } from "appRedux/storeUtils";
import { race, take, call } from "redux-saga/effects";
import { testItems, activeItems } from "./testUtils";
import { createTodosSlice } from "appRedux/todos/todosSlice";
import { deleteCompletedTasks } from "service/requests";
import { createTask, updateTask } from "appRedux/sagas/updateTaskSaga";
import { updateTask as serviceUpdate, createTask as serviceCreate } from "service/requests";

describe('todos update saga', () => {
    it('create task', () => {
        const newTaskName = 'task_new';
        const newData = { desc: newTaskName, isActive: true };

        const todosSlice = createTodosSlice({ items: testItems });
        return expectSaga(createTask, sagaActionsGetter.createTask(newTaskName))
            .withReducer(todosSlice.reducer)
            .provide([
                [call(serviceCreate, newTaskName), { ...newData }]
            ])
            .hasFinalState({ items: [newData, ...testItems] })
            .run();
    });
    it('update task', () => {
        let updateData = { ...activeItems[0] };
        updateData.isActive = false;

        let updatedItems = [...activeItems];
        updatedItems[0] = updateData;

        const todosSlice = createTodosSlice({ items: activeItems });
        return expectSaga(updateTask, sagaActionsGetter.updateTask(updateData))
            .withReducer(todosSlice.reducer)
            .provide([
                [call(serviceUpdate, updateData), { ...updateData }]
            ])
            .hasFinalState({ items: updatedItems })
            .run();
    });
});

// describe('askDeleteCompletedSaga test', () => {
//     it('agree to clear completed', () => {
//         const todosSlice = createTodosSlice({ items: testItems });

//         return expectSaga(askDeleteCompleted)
//             .withReducer(todosSlice.reducer)
//             .provide([
//                 [race({
//                     ok: take(sagaActionsNames.confirmDialogOk),
//                     cancel: take(sagaActionsNames.confirmDialogCancel)
//                 }), { ok: true }],
//                 [call(deleteCompletedTasks, testItems), activeItems]
//             ])
//             .hasFinalState({ items: activeItems })
//             .run();
//     });
// });

// describe('askDeleteCompletedSaga test', () => {
//     it('agree to clear completed', () => {
//         const todosSlice = createTodosSlice({ items: testItems });

//         return expectSaga(askDeleteCompleted)
//             .withReducer(todosSlice.reducer)
//             .provide([
//                 [race({
//                     ok: take(sagaActionsNames.confirmDialogOk),
//                     cancel: take(sagaActionsNames.confirmDialogCancel)
//                 }), { ok: true }],
//                 [call(deleteCompletedTasks, []), activeItems]
//             ])
//             .hasFinalState({ items: activeItems })
//             .run();
//     });
//     it('disagree to clear completed', () => {
//         const todosSlice = createTodosSlice({ items: testItems });

//         return expectSaga(askDeleteCompleted)
//             .withReducer(todosSlice.reducer)
//             .provide([
//                 [race({
//                     ok: take(sagaActionsNames.confirmDialogOk),
//                     cancel: take(sagaActionsNames.confirmDialogCancel)
//                 }), { ok: false }]
//             ])
//             .hasFinalState({ items: testItems })
//             .run();
//     });
// });

