import { TodosItemsType } from "utils/appUtils";

export type TodosStateType = {
    items: TodosItemsType
};
export function getInitialTodosState(): TodosStateType {
    return {
        items: []
    };
}