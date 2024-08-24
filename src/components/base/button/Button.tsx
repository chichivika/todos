import BtnUi from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import colors from 'styles/colors';

const styles = {
    color: colors.baseColor
};
const Button = function (props: ButtonProps) {
    let { children, sx = {}, ...attr } = props;

    attr.size = 'small';

    return (
        <BtnUi {...attr}
            sx={{ ...styles, ...sx }}
        >
            {children}
        </BtnUi>
    );
}

export default Button;