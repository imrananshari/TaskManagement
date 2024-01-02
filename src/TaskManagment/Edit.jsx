import React, { useEffect, useState } from "react";
import style from "./createuser.module.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
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

  let obj = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/tasks/${obj.id}`).then((res) => {
      setTaskName(res.data.taskName);
      setDesc(res.data.desc);
      SetDeadline(res.data.deadline);
    });
  }, []);

  let formHandle = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/tasks/${obj.id}`, {
        taskName,
        desc,
        deadline,
      })
      .then(() => {
        navigate("/task-list");
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
            <input type="text" onChange={nameData} value={taskName} />
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
          <div >
            <button  className={style.submit} onClick={formHandle}>Updated</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
