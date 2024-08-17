
import Input from '@mui/material/TextField';

type Props = {
    value: string,
    error: boolean,
    onSubmit: (value: string)=> void,
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}

const TodosInput = function(props: Props){
    return (
        <Input className='todos-input'
                error={props.error}
                value={props.value}
                fullWidth
                placeholder='What needs to be done?'
                variant='standard'
                helperText={props.error ? "The task is already in todos" : ' '}
                onKeyUp={onKeyUp}
                onChange={props.onChange}
            />
    );

    function onKeyUp(event: React.KeyboardEvent){
        //submit when Enter-code
        if(event.code !== 'Enter') return;
        //no submit if the value is empty
        if(props.value.length === 0) return;

        props.onSubmit(props.value);
    }
}

export default TodosInput;