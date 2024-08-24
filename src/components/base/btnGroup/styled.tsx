import Button from "../button/Button";
import styled from "styled-components";

export const StyledBtnGroup = styled.div``;
export const StyledBtnItem = styled(Button) <{ $selected?: boolean }>`
    &.MuiButtonBase-root.MuiButton-root{
        border-radius: 0px;
        border-bottom: 1px solid transparent;
        border-color: ${props => props.$selected ? 'grey' : 'transparent'};
    }
`