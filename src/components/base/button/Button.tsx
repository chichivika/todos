import { Button as UiBtn } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';

import './ButtonStyle.scss';

const btnClassName = 'app-btn';
const Button = function (props: ButtonProps) {
    let { children, ...attr } = props;

    attr.size = 'small';

    attr.className = attr.className ? `${btnClassName} `.concat(attr.className) : btnClassName;

    return (
        <UiBtn {...attr}>
            {children}
        </UiBtn>
    );
}

export default Button;