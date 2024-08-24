import Todos from 'components/connected/todos/ConnectedTodos';
import ConnectedConfirmDialog from 'components/connected/dialog/ConnectedConfirmDialog';
import { StyledApp, StyledHeader } from './styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sagaActionsGetter } from 'appRedux/storeUtils';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sagaActionsGetter.readTasks());
  }, []);

  return (
    <StyledApp>
      <StyledHeader>
        todos
      </StyledHeader>
      <Todos />
      <ConnectedConfirmDialog />
    </StyledApp>
  );
}

export default App;
