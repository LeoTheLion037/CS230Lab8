import { useRef, useState } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = inputRef.current.value;
    if (newItem !== "") {
      setTasks([...tasks, newItem]);
    }
    inputRef.current.value = "";
  };

  const removeItem = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="custom-container">
      <header className="custom-header">
        <h1>My Custom ToDo List</h1>
      </header>
      <main className="custom-main">
        <div className="custom-input">
          <input type="text" placeholder="Enter an item" ref={inputRef} />
          <button className="custom-add-btn" onClick={addItem}>
            Add
          </button>
        </div>
        <ul className="custom-list">
          {tasks.map((task, index) => (
            <li className="custom-list-item" key={index}>
              {task}
              <button className="custom-delete-btn" onClick={() => removeItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
      <footer className="custom-footer">
        <p>© 2023 My ToDo List App</p>
      </footer>
    </div>
  );
}

export default App;