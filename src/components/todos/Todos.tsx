import './TodosStyle.scss';
import TodosInput from './todosInput/TodosInput';
import TodosList from './todosList/TodosList';
import { TodosItemType, TodosItemsType } from 'utils/appUtils';
import TodosFooter from './todosFooter/TodosFooter';
import { useState } from 'react';
import { ViewModeType, getTodosItemsByStatus } from 'utils/appUtils';
import { useRef } from 'react';

export type UpdateItem = (newData: TodosItemType) => void;
export type CreateItem = (desc: string) => void;
export type DeleteCompleted = () => void;

type TodosProps = {
    items: TodosItemsType,
    onUpdateItem?: UpdateItem,
    onCreateItem?: CreateItem,
    onDeleteCompleted?: DeleteCompleted
};

const Todos = function (props: TodosProps) {
    let [error, setError] = useState<boolean>(false);
    let [viewMode, setViewMode] = useState<ViewModeType>('all');
    let [inputValue, setInputValue] = useState<string>('');

    let listRef = useRef<HTMLDivElement>(null);

    return (
        <div className='todos-cnt'>
            <TodosInput
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
        </div>
    );

    function onStatusClick(itemData: TodosItemType) {
        if (!itemData.isActive) return;

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

        if (props.items.find(item => item.desc === inputValue)) {
            setError(true);
            return;
        }

        props.onCreateItem?.(inputValue);
        setError(false);
        setInputValue('');

        let listCnt = listRef.current;
        if (listCnt !== null) {
            listCnt.scrollTop = 0;
        }
    }
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