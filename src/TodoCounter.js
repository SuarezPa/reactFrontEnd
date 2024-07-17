import './todoCounter.css';
function TodoCounter({complete, total}) {
    return (
      <h1>Has completado {complete} de {total} TODOS</h1>
    );
  }

export { TodoCounter };