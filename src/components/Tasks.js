import { useEffect, useState, useRef } from "react";
// import '../App.css';

const Tasks = ({data}) => {
    const [title, newTitle] = useState();
    const [id, newId] = useState();
    const [userId, newUserId] = useState();
    const [completed, updateCompleted] = useState();
    const [user, newUser] = useState(data);
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const [textInput, updateTextInput] = useState();

    // console.log(data)
    useEffect(() => {
        newUserId(user.userId)
        newId(user.id);
        newTitle(user.title);
        updateCompleted(user.completed)
    }, [])

    function updateStatus(){
       let tempUser = user
       if(tempUser.completed === false){
            tempUser.completed = true
            updateCompleted(!completed)
            newUser(tempUser)
            // console.log(user)
       }else{
            tempUser.completed = false
            updateCompleted(!completed)
            newUser(tempUser)
            // console.log(user)
       }
        
    }

    function deleteTask(){
       setLoading(false)
    }

    function editTask(){
        setEdit(!edit)
    }


    function saveTask(event){
        if(textInput == undefined){
            setEdit(!edit)
        }else{
        var currentTask = user;
        currentTask.title = textInput;
        newUser(currentTask)
        newTitle(currentTask.title)
        setEdit(!edit)
        }
    }
    return (
       <>
    {loading ?
    <>
    <div className="container-fluid row pb-5">
        <div class="container-fluid text-center">
          <div class="row ">
            <div class="col d-flex justify-content-end">
            
            {completed ? 
                <img onClick={updateStatus} className="mt-3 " src="https://cdn-icons-png.flaticon.com/128/5610/5610944.png" style={{height: "30px"}}></img>
            :
                <img onClick={updateStatus} className="mt-3 "  src="https://cdn-icons-png.flaticon.com/128/491/491717.png" style={{height: "30px"}}></img>
            }
           

              {/* <input
                type="checkbox"
                id={id}
                onChange={updateStatus}
                name="scales"
                checked={completed ? "checked" : ""}
              /> */}
            </div>

            <div className={edit ? "col-4 d-flex justify-content-start pb-3 rounded  bg-dark-subtle" : "col-4 d-flex justify-content-start pb-3 rounded"}  
                style={{boxShadow: completed ?  "0px 6px 6px rgb(49, 220, 52)" : "0px 6px 6px #f14336",
                fontFamily: "monospace"
            }} 
                >
              {edit ? 
                <input
                  type="text"
                  defaultValue={title}
                  onChange={(e) => updateTextInput(e.target.value)}
                  className="container-fluid rounded  bg-dark-subtle"
                  style={{border: "none"}}
                ></input>
               : 
                <label
                    style={{
                        color: completed ? "#31dc34" : "#f14336",
                    }}
                >
                  {title}
                </label>
              }
            </div>

            <div class="col d-flex justify-content-start">
            <img id={id} onClick={deleteTask} hidden={edit} style={{height: "30px"}} className="pe-3 mt-3 " src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png"></img>

            <img id={id} onClick={editTask} hidden={edit} style={{height: "30px" }} className="mt-3" src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"></img>

            <img id={id}  onClick={saveTask} hidden={!edit} style={{height: "30px" }} className="mt-3" src="https://cdn-icons-png.flaticon.com/128/3067/3067443.png" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables."></img>
             
            </div>
          </div>
        </div>
    </div> 
        
    </>
    :
    <>
    </>
    }
       </>
    )
}
  
export default Tasks;


// {loading ?
//     <>
//         {/* userId - {userId} */}
//         {/* id - {id} */}
//         <input type="checkbox" id={id} onChange={updateStatus} name="scales" checked={completed ? 'checked' : ''} />
//         {edit ? 
//             <input type="text" defaultValue={title} onChange={(e) => updateTextInput(e.target.value)}></input>
//         :
//             <label style={{textDecoration: completed ? "line-through" : "none"}}>{title}</label>
//         }
        
        
//         <button id={id} onClick={deleteTask} >delete</button>
//         <button id={id} onClick={editTask} hidden={edit}>Edit</button>
//         <button id={id} onClick={saveTask} hidden={!edit}>Save</button>
//     </>
//     :
//     <>
//     </>
// }