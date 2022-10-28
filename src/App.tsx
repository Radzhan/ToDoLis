import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./addTaskForm";

function App() {
  const [newTask, setNewTask] = useState([
    {task: 'сделать дз'},
    {task: 'помочь маме'},
    {task: 'поиграть видео игры'},
  ])

  const createNewTask = (event: string) => {
    setNewTask([
      {task: event}
    ])
  }

  const qwer = (a: string) => {
    const copyNewTask = [...newTask]
    const qwer = {task: a};
    copyNewTask.push(qwer)
    setNewTask(copyNewTask)
  }

  const dealiteTask = (index: number)=>{

    const copyTasks = [...newTask];
    copyTasks.splice(index, 1)
    setNewTask(copyTasks)
  }
  let taskList = newTask.map((goal , index) => (
    <AddTaskForm task={goal.task} dealite={() => dealiteTask(index)}/>
  ))
  return (
    <div className="App">
      <input/>
      <button onClick={()=>qwer('q')}>Add</button>
      {taskList}
    </div>
  );
}

export default App;
