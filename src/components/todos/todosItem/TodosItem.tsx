import { TodosItemType } from "utils/appUtils";
import Checkbox from "components/base/checkbox/Checkbox";
import './TodosItemStyle.scss';

type Props = TodosItemType & {
    onStatusClick?: () => void
};

const TodosItem = function (props: Props) {
    let sClassName = 'todos-list-item';
    if (!props.isActive) {
        sClassName = sClassName.concat(' todos-item-completed');
    }

    return (
        <div className={sClassName}
            data-testid='todos-item'
        >
            <Checkbox checked={!props.isActive}
                disabled={!props.isActive}
                onChange={event => props.onStatusClick?.()}
            />
            <div className='todos-item-desc'>{props.desc}</div>
        </div>
    );
}
export default TodosItem;