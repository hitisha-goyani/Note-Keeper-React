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
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState("");



    useEffect(() => {
      document.querySelector("html").classList = theme;
    }, [theme]);

    useEffect(()=>
    {
      getlocal()
    },[])

    function setLocal(t){
      localStorage.setItem("noteTask" ,JSON.stringify(t) )
      getlocal()
    }

    function getlocal(){
      let arr= JSON.parse(localStorage.getItem("noteTask")) || []
      setList(arr)
    }
  
  


    function handleChange(e) {
      setTask(e.target.value);
      if (!num) {
        setCount(true);
      }
      
    }
    function handleTodo(e, index) {
      const newtodo = [...todoList];
      newtodo[index] = e.target.value;
      setTodoList(newtodo);
    
    }

    function handleTask() {
      let newList = [
        ...list,
        {
          id: uuidv4(),
          task,
          note,
          todos: todoList.filter((ele) => ele !== ""),
          status: false,
          pinned:false,
          themeColor: "bg-blue-100",
        
        },
      ]
      toast("task added successfully...........");

      setTask("");
      setNum(0);
      setTodoList([]);
      setNote("");
      setCount(false)
      setLocal(newList)
    
    }

    function handleDel(id) {
      const del = list.filter((ele) => ele.id !== id);
      setList(del);
      toast.info("Task Deleted......");
      setLocal(del)
    }


  function handlePin(id) {
    const itemPin = list.find((item) => item.id === id);
    if (!itemPin) 
      return;
    const remain = list.filter((item) => item.id !== id);
    const pinnedItem = { ...itemPin, pinned: true };
    setList([pinnedItem, ...remain]);
  }   


    const newInput = () => {  
      setNum((prev) => prev + 1);
    };

    function handleEdit(ele) {
      setEditId(ele.id);
      console.log(ele);
      setTask(ele.task);
      setEdit(ele.id);
      if (ele.note) {
        setCount(true);
          setNote(ele.note || "");
      }
      setNum(ele.todos.length);
      setTodoList(ele.todos || []);
      setShowModal(true);
        
    
    }

    const updateThemeColor = (id, color) => {
  setList(prev =>
    prev.map(item =>
      item.id === id ? { ...item, themeColor: color } : item
    )
  );
};
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
      setShowModal(false);
      setLocal(newList)
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
            updateThemeColor,
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
            todoList,
            editId,
            setShowModal,
            handlePin
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
