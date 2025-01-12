import { useState } from 'react';
import React from 'react';
import "./App.css";
// import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import AddTask from './components/AddTask';




export default function App() {

  const info = "Random";
  // props drilling 

  // const [task, setTask] = useState([]
  //   // [{ 
  //   // id: 1, name: "record Lecatures", completed: false },
  //   // { id: 2, name: "record Lecatures", completed: true },
  //   // { id: 3, name: "record Lecatures", completed: false }]
  
  // );

  const [tasks, setTask] = useState([]);


  
 
  return (
    
    <div classNamwe="App">

      <Header></Header>
      <main>
      <AddTask setTask = {setTask} tasks = {tasks} ></AddTask>
      <TaskList info= {info} setTask = {setTask} tasks = {tasks}></TaskList>
      </main>
      <Footer></Footer>

      
      


    </div>
  )
}


// import  Header from "./components/Header"
// import Footer from './components/Footer';

// export function App() {
//   // let count = 0;
//   // function handleadd(){
//   //   count +=1;

//   // }
//   // console.log("2")
//   const [count,setCount] = useState(0);

//   function handleAdd(){
//     setCount(count + 1 );
    
//   }

//   function handleSub(){
//     if (count <= 0 ){
//       setCount(0)

//     }else{

//       setCount(count - 1 );
//     }
    
//   }

//   function reset(){
//     setCount(0);
//   }

//   return (

//     <div>
//       {/* <Header></Header>
//       <h1>Chiran</h1>
//       <Footer></Footer> */}

//       <div className='App'>
//         <div className='box'>
//           <p>{count}</p>
//           <button onClick={handleAdd}className='add'>ADD</button>
//           {/* <button onCLick={()=>count=+1}className='add'>ADD</button> */}
//           <button onClick= {handleSub} className='sub'>Sub</button>
//           <button onClick= {reset} className='sub'>reset</button>

//         </div>
//       </div>


//     </div>
//   )
// }
