import React, { useState } from "react";
import TodoItem from "./Components/TodoItem";
import AddTodoForm from "./Components/AddTodoForm";
import "./App.css";
import { Todo } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Addtodo, deleteTodo } from "./redux/slice";

// Створюємо інтерфейс опису хука usestate Todo
// Типізуємо параметри в методах addTodo та deleteTodo

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodo = (text: string) => {
  //   const newTodo = { id: Date.now(), text };
  //   setTodos([...todos, newTodo]);
    
  // };

  // const deleteTodo = (id: number) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };
const todo = useSelector((state:  RootState   )=>state.todos)
const dispath = useDispatch()
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={(text)=> dispath(Addtodo(text))} />
      <ul>
        {todo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={()=>dispath(deleteTodo(todo.id))} />
        ))}
      </ul>
    </div>
  );
}

export default App;