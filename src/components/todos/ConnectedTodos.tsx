import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem, deleteCompleted } from "appRedux/todosSlice";
import Todos from "./Todos";
import type { Dispatch } from 'redux'
import { TodosItemType } from "utils/appUtils";
import { StateType } from "appRedux/store";

const ConnectedTodos = function () {
    const dispatch: Dispatch = useDispatch()
    return (
        <Todos items={useSelector((state: StateType)=>state.items)}
                onCreateItem = {(value:string)=>dispatch(createItem(value))}
                onUpdateItem = {(newData:TodosItemType)=>dispatch(updateItem(newData))}
                onDeleteCompleted = {()=>{dispatch(deleteCompleted())}}
        />
    );
};

export default ConnectedTodos;