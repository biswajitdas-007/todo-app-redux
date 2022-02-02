import { useSelector, useDispatch } from "react-redux"
import Button from '@mui/material/Button';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { addTodo } from "../Store/action_creators";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Todo.css"
export const Todo = () => {
    const todos = useSelector((store) => store.todos);
    const [text, setText] = useState("");
    console.log("todo-todos:", todos)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div className="todo-Container">
            <h1>Todo List</h1>
            <input onChange={handleChange} type="text" name="" id="" placeholder="Write something...." />
            <button onClick={() => {
                dispatch(addTodo(text))
            }} className="todo-button">Add Todo</button>
            {todos.length>=1?todos.map((item) => {
                return <Link to={`/todo/${item.id}`} key={item.id} className="Link todos">
                   
                        <div key={item.id} className="task-name">
                            <h3 className={`${item.status ? "done" : "notDone"} ${"task"}`}>{item.title}</h3>
                        </div>
                        <div>
                            <Button variant="contained"><EditTwoToneIcon/></Button>
                        </div>
                    
                </Link>
            }):console.log("NO DATA")}
        </div>
    )
}