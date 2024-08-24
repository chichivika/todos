import styled from "styled-components";
import colors from "styles/colors";

export const StyledApp = styled.div`
    height: inherit;
    background-color: ${colors.bgColor};
    padding: 2rem;
    box-sizing: border-box;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: minmax(700px,0.5fr);
    grid-template-rows: 6rem 1fr;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.headerColor};
    font-size: 3rem;
`;