import styled from "styled-components";
import { StyledBtnGroup } from 'components/base/btnGroup/styled';
import colors from "styles/colors";

export const StyledFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    padding: 0px 1rem;
    margin-top: 1rem;
    color: ${colors.baseColor};
    font-size: 1rem;
    ${StyledBtnGroup}{
        white-space: nowrap;
    }
`;

export const StyledLeftPart = styled.div`
    justify-self: start;
`;
export const StyledRightPart = styled.div`
    justify-self: end;
`;