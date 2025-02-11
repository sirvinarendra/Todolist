import "./todoitem.css";
function Todoitem({todo,date,removeitem}){
  return <div className="row kg-row" >
  <div className="col-6 width">{todo} </div>
  <div className="col-4 width">{date} </div>
  <div className="col-2 width"> <button type="button" className="btn btn-danger kg-button " onClick={()=>removeitem(todo)}>delete</button></div>
</div>
}
export default Todoitem;