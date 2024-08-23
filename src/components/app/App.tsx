import './App.scss';
import Todos from 'components/todos/ConnectedTodos';
import ConnectedConfirmDialog from 'components/connected/dialog/ConnectedConfirmDialog';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sagaActionsGetter } from 'appRedux/storeUtils';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sagaActionsGetter.readTasks());
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        todos
      </header>
      <Todos />
      <ConnectedConfirmDialog />
    </div>
  );
}

export default App;
