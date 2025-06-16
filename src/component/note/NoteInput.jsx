import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";

const NoteInput = () => {
  const {
    handleChange,
    handleTask,
    todoList,
    task,
    edit,
    handleUpdate,
    count,
    setCount,
    note,
    setNote,
    num,
    setNum,
    newInput,
    handleTodo,
   
  
  } = useContext(NoteContext);

  console.log("edit -" + todoList);
  return (
    <div>
      <div className="max-w-md mx-auto mt-20 mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <svg
              className="w-4 h-4 text-[#606876]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            value={task}
            onChange={handleChange}
            className=" w-full p-4 ps-10 text-sm text-[#606876] border border-gray-300 rounded-lg shadow  dark:placeholder-[#181818] dark:text-[#181818] dark:focus:ring-[#181818] dark:focus:border-[#181818;]"
            placeholder="add Title..."
            required
          />
          <input
            type="checkbox" checked={!!num}
            onChange={() => {
              setNum(num ? 0 :1 );
              setCount(false);
              
            }}
            className="translate-x-[-90px] translate-y-[20px] absolute"
          />

          {!edit ? (
            <button
              onClick={handleTask}
              type="submit"
              className="text-[#606876] border absolute end-2.5 bottom-2.5   focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2   dark:focus:ring-black"
            >
              Add
            </button>
           ) : (
            <button
              onClick={handleUpdate}
              type="submit"
              className="text-[#606876] absolute end-2.5 bottom-2.5 border focus:ring-black  font-medium rounded-lg text-sm px-4 py-2"
            >
              Update
            </button>
          )}
        </div>

        <div className="w-[90%]">
          {count && (
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="shadow m-2  appearance-none border border-[#606876] rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Take a note....."
            />
          )}
          {[...Array(num)].map((ele, index) => (
            <input
              onChange={(e) => handleTodo(e, index)}
              className="border border-[#eeeeee] shadow appearance-none rounded w-full py-1 px-3 mt-2 text-black  leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={todoList ? todoList[index] : ""}

              placeholder={`✅ Add Todo ${index}`}
            />
          ))}

          {!!num && (
            <button
              onClick={newInput}
              className="mt-2 bg-[#fdefc2] text-slate-700 font-semibold py-1 px-4 rounded"
            >
              + Add New Todo
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default NoteInput;
