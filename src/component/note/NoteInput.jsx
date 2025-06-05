import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";

const NoteInput = () => {
  const { handleChange, handleTask, task ,edit,handleUpdate,count,setCount,note,setNote,num,setNum,newInput,handleTodo} = useContext(NoteContext);

  return (
    <div>
      <div className="max-w-md mx-auto mt-20 mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            className=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="add Title..."
            required
          />
           <input type="checkbox" onChange={() => { setNum(1); setCount(false)}} className="translate-x-[-90px] translate-y-[20px] absolute" />

          
          {
            !edit ?
            <button
            onClick={handleTask}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
          :
          <button
            onClick={handleUpdate}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          Edit
          </button>

          }
          
        </div>

         <div className="w-[90%]">
          {count && (
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="shadow m-2 bg-gray-300 appearance-none border-0 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Add Note"
            />
          )}
          {
            [...Array(num)].map((ele, index)=>(
              
                <input  
                onChange={(e) => handleTodo(e, index)}
            className="border shadow appearance-none rounded w-full py-1 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder={`✅ Add Todo ${index}`}
          />  
            ))
          }

          {!!num && (
          <button
            onClick={newInput}
            className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-4 rounded"
          >
            + Add New Input
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default NoteInput;



