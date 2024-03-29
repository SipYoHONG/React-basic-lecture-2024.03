import './App.css';
import Header from '../todo_components/Header';
import Todolist from '../todo_components/TodoList';
import { useState } from 'react';

function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');
  return (  
    <div className='card'>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <Todolist filter={filter} />
    </div>
  );
}

export default App;