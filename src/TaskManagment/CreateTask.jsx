import React, { useState } from "react";
import style from "./createuser.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  let [taskName, setTaskName] = useState("");
  let [desc, setDesc] = useState("");
  let [deadline, SetDeadline] = useState(" ");

  let navigate = useNavigate();

  let nameData = (e) => {
    setTaskName(e.target.value);
  };

  let descData = (e) => {
    setDesc(e.target.value);
  };

  let deadlineData = (e) => {
    SetDeadline(e.target.value);
  };

  let handleform = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      alert("Task name is empty enter some value");
      return;
    }
    if (desc.trim() === "") {
      alert("desc is empty enter some value");
      return;
    }
    if (deadline.trim() === "") {
      alert("DeadLine is empty enter some value");
      return;
    }

    axios
      .post("http://localhost:3000/tasks", { taskName, desc, deadline })
      .then(() => {
        
        navigate("/task-list");
      })
      .catch(() => {
        console.log("erororr");
      });
  };
  return (
    <div id={style.myForm}>
      <form action="">
        <div className={style.tr}>
          <div className="label">
            <label htmlFor="">Task Name</label>
          </div>
          <div className="input">
            <input  style={{marginLeft:"25px"}}  type="text" onChange={nameData} value={taskName} />
          </div>
        </div>

        <div className={style.tr}>
          <div className={style.desc}>
            <label
              style={{
                textAlign: "center",

                marginLeft: "50px",
              }}
              htmlFor=""
            >
              Task<span style={{ display: "block" }}>Descriptions</span>
            </label>
          </div>
          <div className="input">
            <textarea
              name=""
              id=""
              cols="34"
              rows="10"
              onChange={descData}
              value={desc}
            ></textarea>
          </div>
        </div>

        <div className={style.tr}>
          <div className="label">
          <label
              style={{
                textAlign: "center",

                marginLeft: "60px",
              }}
              htmlFor=""
            >
              Task<span style={{ display: "block" ,  textAlign: "center",marginLeft: "30px", }}>DeadLine</span>
            </label>
          </div>
          <div className="input">
            <input style={{marginLeft:"20px"}} type="date" onChange={deadlineData} value={deadline} />
          </div>
        </div>

        <div className={style.tr}>
          <div className="input">
            <button
              className={style.submit}
              lass="button-56"
              role="button"
              onClick={handleform}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
