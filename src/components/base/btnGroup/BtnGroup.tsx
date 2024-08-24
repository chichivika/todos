import { StyledBtnGroup, StyledBtnItem} from "./styled";

type BtnItem = {
    key: string,
    text: string
};
type Props = {
    selectedKey: string,
    btnItems: BtnItem[],
    onClick?: (key: string) => void
}

const BtnGroup = function (props: Props) {
    if (props.btnItems.length === 0) {
        return null;
    }
    return (
        <StyledBtnGroup>
            {props.btnItems.map(btnData => renderBtn(btnData, props))}
        </StyledBtnGroup>
    );
}
//render one button of the group
function renderBtn(data: BtnItem, props: Props) {
    let key = data.key;

    return (
        <StyledBtnItem
            key={key}
            onClick={() => { onBtnClick(key, props) }}
            $selected = {props.selectedKey === key}
        >
            {data.text}
        </StyledBtnItem>
    );
}
function onBtnClick(key: string, props: Props) {
    if (typeof props.onClick === 'function') {
        props.onClick(key);
    }
}

export default BtnGroup;