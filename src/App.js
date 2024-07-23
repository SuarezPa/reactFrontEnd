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
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <div class ="title">
      <TodoCounter complete={5} total={15}/>
      </div>
      <div class = "content">
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
      </div>
    </React.Fragment>
  );
}

export default App;
