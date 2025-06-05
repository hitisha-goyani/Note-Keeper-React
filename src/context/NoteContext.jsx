import React, { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");
  const [theme, setTheme] = useState("dark");
  const [count, setCount] = useState(false);
  const [note, setNote] = useState("");
  const [num, setNum] = useState(0);
  const [todoList, setTodoList] = useState([]); 

  useEffect(() => {
    document.querySelector("html").classList = theme;
  }, [theme]);

  function handleChange(e) {
    setTask(e.target.value);
    if(!num){
        setCount(true);
    } 
  
  }
  function handleTodo(e, index) {
   
   const newtodo = [...todoList]
   newtodo[index] = e.target.value;
   setTodoList(newtodo);

  }

  function handleTask() {
    setList([
      ...list,
      {
        id: uuidv4(),
        task,
        note,
        todos: todoList.filter((ele) => ele !== ""),
        status: false,
      },
    ]);
    toast("task added successfully...........");

    setTask("");
  }

  function handleDel(id) {
    const del = list.filter((ele) => ele.id !== id);
    setList(del);
    toast.info("Task Deleted......");
  }
  const newInput = () =>{
  setNum(prev => prev +1 )
}

  function handleEdit(ele) {
    console.log(ele);
    setTask(ele.task);
    setEdit(ele.id);
    setNote(ele.note || "")
    setTodoList(ele.todos || [])
 
  }
  function handleUpdate() {
    let newList = list.map((ele) => {
      if (ele.id == edit) {
        return {
        ...ele,
        task,
        note,
        todos: todoList.filter((ele) => ele !== ""),
      };
      }

      return ele;
    });



    // let newList = list.map((ele) => ele.id == upId ? {...ele, task: task}  : ele )

    setList(newList);
    setTask("");
    setEdit("");
    setNote("");
    setTodoList([]);
    setNum(0);
   
  }
  console.log(list);

  function handleStatus(id) {
    setList(
      list.map((ele) => (ele.id == id ? { ...ele, status: !ele.status } : ele))
    );
  }

  return (
    <div>
      <NoteContext.Provider
        value={{
          handleChange,
          handleTask,
          handleEdit,
          handleDel,
          handleUpdate,
          handleStatus,
          newInput,
          task,
          list,
          edit,
          count,
          note,
          num,
          setNum,
          setNote,
          setCount,
          setTheme,
          handleTodo,
          
        }}
      >
        {children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteContextProvider;

// export const useTodo = () => {
//   const todoCont = useContext(NoteContext);
//   return todoCont
// }
