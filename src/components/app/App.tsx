import './App.scss';
import Todos from 'components/todos/ConnectedTodos';
import ConnectedConfirmDialog from 'components/connected/dialog/ConnectedConfirmDialog';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        todos
      </header>
      <Todos/>
      <ConnectedConfirmDialog/>
    </div>
  );
}

export default App;
