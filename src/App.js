import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Input from "./components/Input"
import Task from "./components/Task"
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input list={list} setList={setList} />
      {list.map((task, i) => (
        <Task task={task} setList={setList} index={i} list={list}/>
      ))}
    </div>
  );
}

export default App;
