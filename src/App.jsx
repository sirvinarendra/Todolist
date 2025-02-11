import Appname from "./components/Appname";
import Todoitemcontainer from "./components/todoitemcontainer";
import Todoitems from "./components/Todoitems";
import Todoitem from "./components/Todoitem";
import Welcomemessage from "./components/welcomemessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoitemlist, setTodoitemlist] = useState([]);
  let addbtnonclick = (x, y) => {
    const newtodoitemlist = [...todoitemlist, { nametodo: x, datetodo: y }];
    console.log(x, y);
    setTodoitemlist(newtodoitemlist);
  };

  const onclickdelete = (todoitem) => {
    const newtodoitemlist = todoitemlist.filter(
      (item) => item.nametodo !== todoitem
    );
    setTodoitemlist(newtodoitemlist);
    
  };

  return (
    <center className="todo-container">
      <Appname></Appname>
      <Todoitemcontainer onhandleaddbtn={addbtnonclick}></Todoitemcontainer>
      {todoitemlist.length == 0 && <Welcomemessage></Welcomemessage>}
      <Todoitems onclickdeleteitem={onclickdelete} itemlist={todoitemlist}>
        {" "}
      </Todoitems>
    </center>
  );
}
export default App;
