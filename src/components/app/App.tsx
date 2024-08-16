import './App.scss';
import Todos from 'components/todos/ConnectedTodos';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        todos
      </header>
      <Todos/>
    </div>
  );
}

export default App;
