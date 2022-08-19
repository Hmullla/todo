import React, { useState } from 'react';
import './App.css';
// import Form from './components/Form';
// import Form2 from './components/Form2'
import AddTask from './components/Form';
import Tasks from './components/Tasks';

function App() {
  // const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = {id,...task};
    setTasks([...tasks,newTask])
  }

  return (
    <div className='container'>
      <AddTask onAdd={addTask}/>
      <Tasks tasks={tasks}/>
    </div>
  )

  

//   return (
//     <div className="App">
//       <h1>To Do List</h1>
//       <Form 
//       input={input}
//       setInput={setInput}
//       todos={todos}
//       setTodos={setTodos}
//       />
//       {/* <Form2/> */}
//       <ToDoList 
//       todos={todos} 
//       setTodos={setTodos} />
//     </div>
//   );
}

export default App;
