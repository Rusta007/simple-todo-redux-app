import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/action";

function DataDisplay() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleTask = () => {
    if (!task) {
      alert("enter the task first");
    }
    dispatch(addTodo(task));
    setTask("");
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, newTodo) => {
    console.log(newTodo);
    dispatch(updateTodo(id, newTodo));
  };
  return (
    <>
      <h1>Redux Todo App</h1>
      <input type="text" name="task" value={task} onChange={handleChange} />
      <button onClick={handleTask}>Add Task</button>
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>X</button>
          <button
            onClick={() => {
              const newTodo = prompt("Update the task", todo.text);
              console.log(newTodo);
              handleEdit(todo.id, newTodo);
            }}
          >
            Edit
          </button>
        </p>
      ))}
    </>
  );
}

export default DataDisplay;
