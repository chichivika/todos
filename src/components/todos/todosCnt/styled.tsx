import styled from "styled-components";
import colors from "styles/colors";

export const StyledTodos = styled.div`
    height: 100%;
    position: relative;
    box-sizing: border-box;
    overflow-y: hidden;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${colors.listBgColor};
    box-shadow: 1px 1px 5px ${colors.headerColor}, -1px -1px 5px ${colors.headerColor};
`;

export const todosInputSX = {
    margin: '1rem 0px'
}