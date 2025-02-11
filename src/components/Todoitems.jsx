import Todoitem from "./Todoitem";

function Todoitems({itemlist,onclickdeleteitem}) {
  return <>
      {itemlist.map((item) => (
        <Todoitem key={item.nametodo} removeitem={onclickdeleteitem} date={item.datetodo} todo={item.nametodo}></Todoitem>
      ))}
    </>
  
}
export default Todoitems;
