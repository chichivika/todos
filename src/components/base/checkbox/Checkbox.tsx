import { CheckboxProps, Checkbox as UiCheckbox } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PanoramaFishEyeRoundedIcon from '@mui/icons-material/PanoramaFishEyeRounded';

type Props = CheckboxProps;

const Checkbox = function(props: Props){

    return (
        <UiCheckbox {...props}
        icon={<PanoramaFishEyeRoundedIcon/>}
        checkedIcon={<TaskAltIcon/>}
        />
    );
}

export default Checkbox;