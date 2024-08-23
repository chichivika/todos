import BusyIndicator from "../busyIndicator/BusyIndicator";
import './BusyBlockStyle.scss';

type Props = {
    busy: boolean
};

const BusyBlock = (props:Props) => {
    if(!props.busy){
        return null;
    }

    return (
        <div className="app-busy-block">
            <BusyIndicator size={40}/>
        </div>
    );
}

export default BusyBlock;