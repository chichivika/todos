import { CircularProgress as UiProgress } from '@mui/material';
import { CircularProgressProps } from '@mui/material';
import colors from 'styles/colors';

const BusyIndicator = function (props: CircularProgressProps) {
    return <UiProgress {...props}
        sx={{ color: colors.baseColor }}
    />
}

export default BusyIndicator;