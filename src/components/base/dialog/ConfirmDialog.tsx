import {
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle
} from "@mui/material";
import Button from "../button/Button";

type Props = {
    open: boolean,
    type: 'info' | 'confirm',
    title?: string,
    text?: string,
    onCancel?: () => void,
    onOk?: () => void
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
                {
                    props.type === 'confirm' ?
                        <Button onClick={() => { props.onCancel?.() }}>Cancel</Button> : null
                }
                <Button onClick={() => { props.onOk?.() }}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}
export default ConfirmDialog;