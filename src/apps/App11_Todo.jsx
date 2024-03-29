import './App.css';
import Header from '../todo_components/Header';
import Todolist from '../todo_components/Todolist';

function App() {
  return (  
    <div className='card'>
      <Header />
      <Todolist />
    </div>
  );
}

export default App;