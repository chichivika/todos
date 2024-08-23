import { expectSaga } from "redux-saga-test-plan";
import { sagaActionsGetter } from "appRedux/storeUtils";
import { call } from "redux-saga/effects";
import { testItems, activeItems } from "../testUtils";
import { createTodosSlice } from "appRedux/todos/todosSlice";
import { createTask, updateTask } from "appRedux/sagas/updateTaskSaga";
import { updateTask as serviceUpdate, createTask as serviceCreate } from "service/requests";
import { throwError } from "redux-saga-test-plan/providers";

describe('todos update saga', () => {
    it('create task success', () => {
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
    it('create task error', () => {
        const newTaskName = 'task_new';

        const todosSlice = createTodosSlice({ items: testItems });
        return expectSaga(createTask, sagaActionsGetter.createTask(newTaskName))
            .withReducer(todosSlice.reducer)
            .provide([
                [call(serviceCreate, newTaskName), throwError(new Error())]
            ])
            .hasFinalState({ items: testItems })
            .run();
    });
    it('update task success', () => {
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
    it('update task error', () => {
        let updateData = { ...activeItems[0] };
        updateData.isActive = false;

        let updatedItems = [...activeItems];
        updatedItems[0] = updateData;

        const todosSlice = createTodosSlice({ items: activeItems });
        return expectSaga(updateTask, sagaActionsGetter.updateTask(updateData))
            .withReducer(todosSlice.reducer)
            .provide([
                [call(serviceUpdate, updateData), throwError(new Error())]
            ])
            .hasFinalState({ items: activeItems })
            .run();
    });
});

