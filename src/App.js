import { useState } from "react";
import "./App.css";

const toDoList = [
  { Task: "Join Northcoders", Priority: "High", Status: "Not Complete" },
  { Task: "Pass Entry Challenge", Priority: "High", Status: "Not Complete" },
  { Task: "Quit Work", Priority: "High", Status: "Not Complete" },
  { Task: "Learn to Code", Priority: "High", Status: "Not Complete" },
  { Task: "Get stuck on Front End", Priority: "High", Status: "Not Complete" },
  { Task: "Final Project", Priority: "High", Status: "Not Complete" },
  { Task: "Find a Job", Priority: "High", Status: "Not Complete" },
  { Task: "Retire", Priority: "High", Status: "Not Complete" },
];

function App(props) {
  return (
    <div className="App">
      <Header />
      <AddItem />
      <Main />
    </div>
  );
}

function Header() {
  return <h1>Carl's To Do List</h1>;
}

function Main(props) {
  return (
    <div>
      <p>Here is a list of to do items for Carl. Don't skip any!</p>
      <ToDoItem />
    </div>
  );
}

function ToDoItem(props) {
  const [todos, setTodos] = useState([]);
  const addToDo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Add Item</h1>
      <AddItem onSubmit={addToDo} />
    </div>
  );
  // return (
  //   <div>
  //     <h2>This is a TO DO Item</h2>
  //     <ul>
  //       {toDoList.map((item) => {
  //         return (
  //           <li key={item}>
  //             <h3>{item.Task}</h3>
  //             <Button />
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
}

function AddItem() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item"
        value={input}
        name="text"
        className="todoItem"
        onChange={handleChange}
      />
      <button className="todoButton">Add item to list</button>
    </form>
  );
}

function Button() {
  return (
    <div>
      <button>Remove</button>
    </div>
  );
}

export default App;
