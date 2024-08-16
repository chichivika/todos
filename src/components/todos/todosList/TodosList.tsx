import { TodosItemsType, TodosItemType } from 'utils/appUtils';
import TodosItem from '../todosItem/TodosItem';

import './TodosListStyle.scss';

type Props = {
    items: TodosItemsType,
    listRef?: React.Ref<HTMLDivElement>,
    onStatusClick?: (itemData: TodosItemType) => void
}

const TodosList = function (props: Props) {
    return (
        <div className='todos-list'
            ref={props.listRef || null}>
            {renderItems()}
        </div>
    );

    function renderItems() {
        return props.items.map(itemData => renderOneItem(itemData));
    }
    function renderOneItem(itemData: TodosItemType) {
        return (
            <TodosItem {...itemData}
                key={itemData.desc}
                onStatusClick={() => props.onStatusClick?.(itemData)}
            />
        );
    }
}

export default TodosList;