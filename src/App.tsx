import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./addTaskForm";

function App() {
  const [newTask, setNewTask] = useState([
    {task: 'сделать дз'},
    {task: 'помочь маме'},
    {task: 'поиграть видео игры'},
  ])
  let asdf: string;
  const createTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    asdf = event.target.value
  }

  const toogleTask = () => {
    const copyNewTask = [...newTask]
    const qwer = {task: asdf};
    copyNewTask.push(qwer)
    setNewTask(copyNewTask)
  }

  const dealiteTask = (index: number) => {
    const copyTasks = [...newTask];
    copyTasks.splice(index, 1)
    setNewTask(copyTasks)
  }

    let taskList = newTask.map((goal, index) => (
      <AddTaskForm task={goal.task} dealite={() => dealiteTask(index)}/>
    ))


  return (
    <div className="App">
      <input onChange={createTask}/>
      <button onClick={toogleTask}>Add</button>
      {taskList}
    </div>
  );
}

export default App;
