import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="d-flex align-items-center mb-2">
          {todo}
          <Button
            variant="danger"
            className="ms-3"
            size="sm"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter a task"
        className="form-control"
      />
      <Button variant="primary" className="ms-3 mt-2" onClick={addTodo}>
        Add
      </Button>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
