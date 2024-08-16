import Button from "../button/Button";

import './BtnGroupStyle.scss';

type BtnItem = {
    key: string,
    text: string
};
type Props = {
    selectedKey: string,
    btnItems: BtnItem[],
    className?: string,
    onClick?: (key: string) => void
}

const groupClassName = 'app-btn-group';

const BtnGroup = function (props: Props) {
    if(props.btnItems.length === 0){
        return null;
    }
    let className = props.className ? `${groupClassName} `.concat(props.className) : groupClassName;
     return (
        <div className={className}>
            {props.btnItems.map(btnData => renderBtn(btnData, props))}
        </div>
     )
}
function renderBtn(data: BtnItem, props: Props) {
    let className = 'app-btn-item';
    let key = data.key;

    if (props.selectedKey === key) {
        className = className.concat(' app-btn-item-selected');
    }

    return (
        <Button
            className={className}
            key={key}
            onClick={() => { onBtnClick(key, props) }}>
            {data.text}
        </Button>
    );
}
function onBtnClick(key: string, props: Props) {
    if (typeof props.onClick === 'function') {
        props.onClick(key);
    }
}

export default BtnGroup;