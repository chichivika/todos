
import { SxProps } from "@mui/material";
import { StyledInput } from "./styled";

type Props = {
    value: string,
    error: boolean,
    sx?: SxProps,
    onSubmit: (value: string) => void,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TodosInput = function (props: Props) {
    let {sx={}} = props;

    return (
        <StyledInput error={props.error}
            sx={sx}
            value={props.value}
            fullWidth
            placeholder='What needs to be done?'
            variant='standard'
            helperText={props.error ? "The task is already in todos" : ' '}
            onKeyUp={onKeyUp}
            onChange={props.onChange}
        />
    );

    function onKeyUp(event: React.KeyboardEvent) {
        //submit when Enter-code
        if (event.code !== 'Enter') return;
        //no submit if the value is empty
        if (props.value.length === 0) return;

        props.onSubmit(props.value);
    }
}

export default TodosInput;