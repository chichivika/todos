import ConfirmDialog from "components/base/dialog/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "appRedux/store";
import { sagaActionsGetter } from "appRedux/storeUtils";

const ConnectedConfirmDialog = function () {
    const dispatch = useDispatch();
    return (
        <ConfirmDialog
            open={useSelector((state: StateType) => state.dialog.confirm.open)}
            title={useSelector((state: StateType) => state.dialog.confirm.title)}
            text={useSelector((state: StateType) => state.dialog.confirm.text)}
            type={useSelector((state: StateType) => state.dialog.confirm.type)}
            onOk={() => { dispatch(sagaActionsGetter.confirmDialogOk()) }}
            onCancel={() => { dispatch(sagaActionsGetter.confirmDialogCancel()) }}
        />
    );
}

export default ConnectedConfirmDialog;