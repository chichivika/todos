import styled from "styled-components";
import Input from '@mui/material/TextField';
import { SxProps, TextFieldProps } from "@mui/material";
import colors from "styles/colors";

const StyledField = styled(Input)`
    div.MuiInputBase-root.MuiInput-root, div.MuiInputBase-root.MuiInput-root.Mui-focused{
            &::after, &::before{
                border-bottom-color: ${colors.lightBaseColor};
            }
    }`;
const inputSX: SxProps = {
    padding: '0px 2rem',
    boxSizing: 'border-box'
};
export const StyledInput = (props: TextFieldProps) => {
    let {sx={},...attr} = props;
    return <StyledField sx={{...inputSX, ...sx}} {...attr} />
}