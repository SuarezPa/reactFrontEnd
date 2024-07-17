import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';

const defaultTodos = [
  {text: 'Estudiar', status: false},
  {text: 'Leer', status: true},
  {text: 'Realiza pruebas de codigo y aprender mas', status: false},
  {text: 'Estudiar ingles', status: true}
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter complete={5} total={15}/>
      <TodoSearch />

      <TodoList>
        { defaultTodos.map (todo => (
       <TodoItem 
       key={todo.text} 
       text={todo.text}
       value={todo.status}
       status={todo.status}/>
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
