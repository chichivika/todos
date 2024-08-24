import { TodosItemType } from "utils/appUtils";
import Checkbox from "components/base/checkbox/Checkbox";
import { StyledTodosItem, StyledItemDesc } from "./styled";

type Props = TodosItemType & {
    onStatusClick?: () => void
};

const TodosItem = function (props: Props) {

    return (
        <StyledTodosItem
            data-testid='todos-item'
            $completed={!props.isActive}
        >
            <Checkbox checked={!props.isActive}
                disabled={!props.isActive}
                onChange={event => props.onStatusClick?.()}
            />
            <StyledItemDesc>{props.desc}</StyledItemDesc>
        </StyledTodosItem>
    );
}
export default TodosItem;