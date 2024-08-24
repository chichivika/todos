import { TodosItemsType, TodosItemType } from 'utils/appUtils';
import TodosItem from '../todosItem/TodosItem';
import { StyledTodosList } from './styled';

type Props = {
    items: TodosItemsType,
    listRef?: React.Ref<HTMLDivElement>,
    onStatusClick?: (itemData: TodosItemType) => void
}

const TodosList = function (props: Props) {
    return (
        <StyledTodosList
            ref={props.listRef || null}>
            {renderItems()}
        </StyledTodosList>
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