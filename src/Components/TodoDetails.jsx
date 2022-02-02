import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { addTodo, toggleStatus, updateTodo } from "../Store/action_creators";
import "./TodoDetails.css"
function TodoDetails() {
    const param = useParams();
    const dispatch = useDispatch();
    let todos = useSelector((store) => store.todos);
    const handleDelete = (id) => {
        todos.map((e) => {
             e.id == param.id && dispatch(updateTodo(e))
        })
       
    }
    const handleToggle = (id) => {
        todos.map((e) => {
             e.id == param.id ? dispatch(toggleStatus(e)):console.log(e);
        })
       
    }
    return (
        <div>
            <Link to="/"  className="back-link"><button>Back</button></Link>
            {todos.length>=1?todos.map((e) => {
                    
                    if(e.id === param.id){
                        return <div key={e.id} className="todo">
                            <h2 className={`${e.status ? "done" : "notDone"}`}>{e.title}</h2>
                             <Button variant="outlined" color="success" onClick={() => handleToggle(e.id)}><CheckCircleRoundedIcon/></Button>
                            <Button variant="outlined" color="error" onClick={() => handleDelete(e.id)}><DeleteForeverRoundedIcon/></Button>
                           
                    </div>
                    }
                    
                
            }):console.log('No Data')}
        </div>
    )
}
export {TodoDetails}