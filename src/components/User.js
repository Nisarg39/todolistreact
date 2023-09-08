import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import axios from 'axios';
import '../App.css'

const User = () => {
    const [post, newPost] = useState([]);
    const [user, newUser] = useState();
    const options = [1,2,3,4,5,6,7,8,9,10];
    const [disableOptions, changeOptions] = useState(false);
    const [inputboxData, changeInputboxData] = useState();
    const [taskId, newTaskId] = useState();

    var userData = post;

    const onOptionChangeHandler = (event) => {
        newUser(event.target.value)
        fetchData(event.target.value);
    }
    
    const inputboxHandler = (event) => {
        changeInputboxData(event.target.value)
    }

    const addTask = async (event) => {
        newTaskId(event.target.id)
        let apiRes = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            userId: user,
            id: 101,
            title: inputboxData,
            completed: false
        })
        // console.log(apiRes)
        // userData.push(apiRes.data)
        newPost([...userData, apiRes.data])
    }

    async function fetchData(id){
        changeOptions(true)
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        newPost([...res.data])
    } 

    return (
        <div className="container-fluid bg-dark text-light text-center" style={{display: "inline-block", minHeight: "100vh"}}>
       
        <input type="text" hidden={!disableOptions} onChange={inputboxHandler} className="me-4 form-control textBox"></input>
        <button id={user} hidden={!disableOptions}  onClick={addTask} className="btn btn-outline-light">AddTodo</button>
        <select hidden={disableOptions} onChange={onOptionChangeHandler} className="form-select numberSelect" >
                    <option>Please choose a user</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
        </select>

        <h2 hidden={!disableOptions} className="m-4">User - {user}</h2>

        {post.map((userdata, index) => (
            
                <>
                    <Tasks key={index} data={userdata} />
                </>
        ))}
      </div>
    );
  }
  
  export default User;