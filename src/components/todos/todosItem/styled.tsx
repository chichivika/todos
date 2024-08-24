import styled from "styled-components";
import colors from "styles/colors";

export const StyledTodosItem = styled.div<{$completed?: boolean}>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid ${colors.bgColor};
    &:hover{
        background-color: ${colors.itemHoverBgColor};
    }
    &:first-child{
        border-top: 2px solid ${colors.bgColor};
    }
    color: ${props => props.$completed ? colors.itemCompletedColor : colors.itemColor};
    text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
`;

export const StyledItemDesc = styled.div`
    margin-left: 1rem;
`;