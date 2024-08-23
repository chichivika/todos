import { TodosItemType } from "utils/appUtils";

export type Action<dataType> = {
    type: string,
    payload?: dataType
};
export function getAction<dataType>(action: string, data?: dataType): Action<dataType> {
    return { type: action, payload: data };
}

export const sagaActionsNames = {
    askDeleteCompleted: 'todos/deleteCompletedSaga',
    confirmDialogCancel: 'dialog/confirmCancel',
    confirmDialogOk: 'dialog/confirmOk',
    readTasks: 'todos/readTasks',
    createTask: 'todos/createTask',
    updateTask: 'todos/updateTask'
};

export const sagaActionsGetter = {
    askDeleteCompleted: () => getAction(sagaActionsNames.askDeleteCompleted),
    confirmDialogCancel: () => getAction(sagaActionsNames.confirmDialogCancel),
    confirmDialogOk: () => getAction(sagaActionsNames.confirmDialogOk),
    readTasks: ()=> getAction(sagaActionsNames.readTasks),
    createTask: (desc: string)=> getAction(sagaActionsNames.createTask, desc),
    updateTask: (item: TodosItemType)=> getAction(sagaActionsNames.updateTask, item)
};