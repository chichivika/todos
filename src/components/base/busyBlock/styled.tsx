import styled from "styled-components";
import BusyIndicator from "../busyIndicator/BusyIndicator";

export const StyledBlock = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.492);
`
export const StyledIndicator = styled(BusyIndicator)`
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
`