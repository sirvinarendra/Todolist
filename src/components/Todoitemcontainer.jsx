import { useState } from "react";
import './todoitem.css'

function Todoitemcontainer({onhandleaddbtn}){

  let [todotext,settodotext]=useState('');
  let [duedate,setduedate]=useState('');
  let useduedate=(event)=>{
    setduedate(event.target.value);
  }

  let usetodotext=(event)=>{
    settodotext(event.target.value)
    
  }

  let xyz=()=>{
    onhandleaddbtn(todotext,duedate)
    setduedate('')
    settodotext('')
  }

    return  <div className="row kg-row inprow">
    <div className="col-6"><input type="text"  value={todotext}placeholder="enter todo here" 
    onChange={usetodotext} /></div>
    <div className="col-4"> <input type="date"   value={duedate} onChange={useduedate} /></div>
    <div className="col-2"> <button type="button" className="btn btn-success kg-button"
     onClick={xyz}
    >add</button></div>
  </div>
}
export default Todoitemcontainer;