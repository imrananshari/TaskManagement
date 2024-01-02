import React from 'react'
import { Link } from 'react-router-dom'
import style from "./createuser.module.css"

const Home = () => {
  return (
    <div>
        <section id={style.nav}>
        <Link to="/">CREATE - TASK</Link>
        <Link to="/task-list">VIEW - TASK</Link>  
        </section>
    </div>
  )
}

export default Home