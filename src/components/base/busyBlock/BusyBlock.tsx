import { StyledBlock, StyledIndicator } from "./styled";

type Props = {
    busy: boolean
};

const BusyBlock = (props:Props) => {
    if(!props.busy){
        return null;
    }

    return (
        <StyledBlock>
            <StyledIndicator size={40}/>
        </StyledBlock>
    );
}

export default BusyBlock;