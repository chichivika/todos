import {
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle
} from "@mui/material";
import Button from "../button/Button";

type Props = {
    open: boolean,
    title?: string,
    text?: string,
    onCancel?: ()=> void,
    onOk?: ()=> void
}

function ConfirmDialog(props: Props) {
    
    return (
        <Dialog open={props.open}>
            <DialogTitle>
                {props.title || ''}
            </DialogTitle>
            <DialogContent>
                {props.text || ''}
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{props.onCancel?.()}}>
                    Cancel
                </Button>
                <Button onClick={()=>{props.onOk?.()}}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}
export default ConfirmDialog;