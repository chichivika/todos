import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem} from "appRedux/todos/todosSlice";
import Todos from "./Todos";
import type { Dispatch } from 'redux'
import { TodosItemType } from "utils/appUtils";
import { StateType } from "appRedux/store";
import { sagaActionsGetter } from "appRedux/storeUtils";
import { selectTodosLoading } from "appRedux/status/statusSlice";

const ConnectedTodos = function () {
    const dispatch: Dispatch = useDispatch()
    return (
        <Todos items={useSelector((state: StateType)=>state.todos.items)}
                todosLoading={useSelector(selectTodosLoading)}
                onCreateItem = {(value:string)=>dispatch(createItem(value))}
                onUpdateItem = {(newData:TodosItemType)=>dispatch(updateItem(newData))}
                onDeleteCompleted = {()=>{dispatch(sagaActionsGetter.askDeleteCompleted())}}
        />
    );
};

export default ConnectedTodos;