import Button from 'components/base/button/Button';
import { ViewModeType } from 'utils/appUtils';
import BtnGroup from 'components/base/btnGroup/BtnGroup';
import {
    StyledFooter,
    StyledLeftPart,
    StyledRightPart
} from './styled';

type Props = {
    viewMode: ViewModeType,
    itemsToDone?: number,
    showClearCompleted?: boolean,
    onClearCompleted?: () => void,
    onModeChange?: (view: ViewModeType) => void
}

const TodosFooter = function (props: Props) {
    return (
        <StyledFooter>
            {renderLeftPart(props)}
            {renderCenterPart(props)}
            {renderRightPart(props)}
        </StyledFooter>
    );
}
//render how many uncompleted tasks
function renderLeftPart(props: Props) {
    if (typeof props.itemsToDone === 'number') {
        return (
            <StyledLeftPart>
                {`${props.itemsToDone} to be done`}
            </StyledLeftPart>
        );
    }
    return null;
}
//render clear completed btn
function renderRightPart(props: Props) {
    if (props.showClearCompleted === true) {
        return (
            <StyledRightPart>
                <Button size='small'
                    onClick={() => props.onClearCompleted?.()}
                >Clear Completed</Button>
            </StyledRightPart>
        );
    }
    return null;
}
//render buttons for view mode switching
function renderCenterPart(props: Props) {
    return (
        <BtnGroup
            selectedKey={props.viewMode}
            btnItems={[
                { key: 'all', text: 'All' },
                { key: 'active', text: 'Active' },
                { key: 'completed', text: 'Completed' }
            ]}
            onClick={(key: string) => {
                props.onModeChange?.(key as ViewModeType)
            }}
        />
    );
}


export default TodosFooter;