import { StyledTodos, todosInputSX } from './styled';
import TodosInput from "../todosInput/TodosInput";
import TodosList from '../todosList/TodosList';
import BusyBlock from '../../base/busyBlock/BusyBlock';
import { TodosItemType, TodosItemsType } from 'utils/appUtils';
import TodosFooter from '../todosFooter/TodosFooter';
import { useState } from 'react';
import { ViewModeType, getTodosItemsByStatus } from 'utils/appUtils';
import { useRef } from 'react';

export type UpdateItem = (newData: TodosItemType) => void;
export type CreateItem = (desc: string) => void;
export type DeleteCompleted = () => void;

type TodosProps = {
    items: TodosItemsType,
    todosLoading?: boolean,
    onUpdateItem?: UpdateItem,
    onCreateItem?: CreateItem,
    onDeleteCompleted?: DeleteCompleted
};

const Todos = function (props: TodosProps) {
    //show input error state
    let [error, setError] = useState<boolean>(false);
    let [viewMode, setViewMode] = useState<ViewModeType>('all');
    let [inputValue, setInputValue] = useState<string>('');

    let listRef = useRef<HTMLDivElement>(null);

    return (
        <StyledTodos>
            <TodosInput
                sx={todosInputSX}
                error={error}
                value={inputValue}
                onSubmit={onSubmitInput}
                onChange={event => onChangeInput(event.target.value)}
            />
            <TodosList listRef={listRef}
                items={getFilteredItems(viewMode)}
                onStatusClick={onStatusClick}
            />
            <TodosFooter
                itemsToDone={getFilteredItems('active').length}
                showClearCompleted={getFilteredItems('completed').length > 0}
                onClearCompleted={() => props.onDeleteCompleted?.()}
                viewMode={viewMode}
                onModeChange={key => setViewMode(key)}
            />
            <BusyBlock busy={props.todosLoading || false}/>
        </StyledTodos>
    );

    function onStatusClick(itemData: TodosItemType) {
        //no update if the task is completed
        if (!itemData.isActive) return;

        //complete the task
        props.onUpdateItem?.({
            desc: itemData.desc,
            isActive: false
        })
    }
    function onChangeInput(value: string) {
        setInputValue(value);
        setError(false);
    }
    function onSubmitInput(inputValue: string) {

        //if the task is already in todo list
        //find by its description
        if (props.items.find(item => item.desc === inputValue)) {
            setError(true);
            return;
        }

        props.onCreateItem?.(inputValue);
        setError(false);
        //clear input value
        setInputValue('');

        //scroll to top
        let listCnt = listRef.current;
        if (listCnt !== null) {
            listCnt.scrollTop = 0;
        }
    }
    //get items by view mode
    function getFilteredItems(viewMode: ViewModeType): TodosItemsType {
        switch (viewMode) {
            case 'active':
                return getTodosItemsByStatus(props.items, true);
            case 'completed':
                return getTodosItemsByStatus(props.items, false);
        }

        return props.items;
    }
}

export default Todos;