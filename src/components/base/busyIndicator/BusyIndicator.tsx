import { CircularProgress as UiProgress } from '@mui/material';
import { CircularProgressProps } from '@mui/material';
import './BusyIndStyle.scss';

const BusyIndicator = function(props: CircularProgressProps){
    return <UiProgress className='app-busy-ind' {...props}/>
}

export default BusyIndicator;