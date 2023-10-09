
import { useState } from 'react';
import './App.css';
import Detail from './Component/Detail';
import Header from './Component/Header';



function App() {

  const [ todos, setTodo ] = useState([])

  const addToDoHandler = (item) => {
    // console.log(item);
    const ToDoLenght = todos.length
    if (ToDoLenght > 0) {
      let lastElement = todos[todos.length - 1];
      const todoId = lastElement?.id
      setTodo(
        [
          ...todos,
          {
            id : todoId + 1,
            item,
            time: new Date().toLocaleTimeString(),
            isCompleated : 0,
            isDeleted : 0
          }
        ]
      )
    } else {
      setTodo(
        [
          ...todos,
          {
            id : 1,
            item,
            time: new Date().toLocaleTimeString(),
            isCompleated : 0,
            isDeleted : 0
          }
        ]
      ) 
    }
  }

  return (
    <>
    
      {/* <ToDo/> */}
      <div className="bg-black h-screen p-3">
        <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">          
          <Header handler={addToDoHandler} />
          <Detail setTodo={setTodo} data={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
