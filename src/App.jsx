import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './TaskManagment/Home'
import CreateTask from './TaskManagment/CreateTask'
import Edit from './TaskManagment/Edit'
import TaskList from './TaskManagment/TaskList'



const App = () => {
  return (
  <div>
  
    <BrowserRouter>
     <Home/>
     <Routes>
     <Route  element={<CreateTask/> } path='/'></Route>
     <Route element={<TaskList/>} path='/task-list'></Route>
     <Route  element={<Edit/> } path='/edit/:id'></Route>
     </Routes>
     

    </BrowserRouter>
  </div>
  )
}

export default App