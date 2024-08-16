import Button from 'components/base/button/Button';
import './TodosFooterStyle.scss';
import BtnGroup from 'components/base/btnGroup/BtnGroup';
import { ViewModeType } from 'utils/appUtils';

type Props = {
    viewMode: ViewModeType,
    itemsToDone?: number,
    showClearCompleted?: boolean,
    onClearCompleted?: () => void,
    onModeChange?: (view: ViewModeType) => void
}

const TodosFooter = function (props: Props) {
    return (
        <div className='todos-footer'>
            {renderLeftPart(props)}
            {renderCenterPart(props)}
            {renderRightPart(props)}
        </div>
    );
}
function renderLeftPart(props: Props) {
    if (typeof props.itemsToDone === 'number') {
        return (
            <div className='todos-footer-left'>
                {`${props.itemsToDone} to be done`}
            </div>
        );
    }
    return null;
}
function renderRightPart(props: Props) {
    if (props.showClearCompleted === true) {
        return (
            <div className='todos-footer-right'>
                <Button size='small'
                    onClick={() => props.onClearCompleted?.()}
                >Clear Completed</Button>
            </div>
        );
    }
    return null;
}
function renderCenterPart(props: Props) {
    return (
        <BtnGroup
            className='todos-footer-center'
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