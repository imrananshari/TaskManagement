import React from "react";
import style from "./createuser.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function TaskList() {
  let [tasks, setTasks] = useState([]);
  let navigate = useNavigate();
  let [check, setCheck] = useState(true)

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:3000/tasks");
    const data = res.data;
    setTasks(data);

  };
  useEffect(() => {
    fetchTasks();
  }, []);

  function deletetask(x) {
    axios
      .delete(`http://localhost:3000/tasks/${x}`)
      .then(() => fetchTasks());
  }

  const Navigate = (id) => {
    navigate(`/edit/${id}`);
  };

  const checkboxHandler = (task)=>{
    axios.put(`http://localhost:3000/tasks/${task.id}`,{ ...task,isCompleted: !task.isCompleted}).then(()=>fetchTasks())
  }

  return (
    <div className={style.tasklist}>
      <Table striped>
        <thead>
          <tr>
            <th className={style.slno}>Sl.no</th>
            <th className={style.name}>Task-Name</th>
            <th className={style.task_desc}>Task-Descriptions</th>
            <th className={style.delete}>Delete</th>
            <th className={style.edit}>Edite</th>
            <th className={style.status}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr
                key={task.id}
              >
                <td className={style.td}>{index + 1}</td>
                <td className={style.td}>{task.taskName}</td>
                <td className={style.td}>{task.desc}</td>

                <td className={style.td}>
                  <button
                    className={style.deletebtn}
                    onClick={() => {
                      deletetask(task.id);
                    }}
                  >
                    Delete{" "}
                  </button>
                </td>
                <td className={style.td}>
                  <button
                    className={style.editebtn}
                    onClick={() => Navigate(task.id)}
                  >
                    Edite
                  </button>
                </td>
                <td className={style.td}>
                  <input
                    checked={task.isCompleted}
                    className={style.checkbox}
                    type="checkbox"
                    onChange={()=>checkboxHandler(task)}
                    name=""
                    id=""
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default TaskList;
