import {
  AcademicCapIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import ColorPicker from "../ColorPicker";
import { RiMore2Fill, RiTimeLine } from "@remixicon/react";
import { ClockIcon } from "@heroicons/react/20/solid";

const NoteList = () => {
  const {
    list,
    handleDel,
    handleEdit,
    handleStatus,
    setShowModal,
    handlePin,
    updateThemeColor,
    openMenu,
    setOpenMenu,
  } = useContext(NoteContext);
  return (
    <>
      <div className="max-w-[70%] my-3  rounded-2xl shadow-amber-500 p-1 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-2 grid-cols-1 gap-5">
          {list.map((ele) => (
            <div
              key={ele.id}
              className={`rounded-md border relative group border-[#eeeeee] ${ele.themeColor}  shadow-2xl py-6 px-2 text-white
                  
                    dark:text-slate-700`}
              //  style={{boxShadow: "8px 8px 6px 0px rgba(147, 149, 211, 1)"}}
            >
              <div className="flex justify-between">
                <h4 className="font-bold  text-black  ">{ele.task}</h4>
                <button
                  onClick={() => handlePin(ele.id)}
                  className={`rounded-full p-1 ms-2  group-hover:flex  ${
                    ele.pinned ? "bg-slate-800 text-black" : "bg-gray-100"
                  }`}
                >
                  📌
                </button>
              </div>

              <p
                onClick={() => handleStatus(ele.id)}
                className={
                  ele.status
                    ? "bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-1 my-2  rounded-sm dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-800 text-xs bg-font-medium me-2 px-2 py-1 my-2 rounded-sm dark:bg-red-900 dark:text-red-300"
                }
              >
                {ele.status ? (
                  <span>Completed</span>
                ) : (
                  <span>Not Completed</span>
                )}
              </p>
              {ele.note && <p className="text-black ">{ele.note}</p>}
              {ele.timestamp && (
               
                <p className=" text-xs rounded bg-[#f0f0f0]  mt-1 ps-2 flex">
    <RiTimeLine size={15}className="text-xs me-1  "></RiTimeLine>{new Date(ele.timestamp).toLocaleString()}
                </p>
               
              )}

              {/* {ele.todos &&  (
                  <ul className="list-disc ml-6 mt-2 text-sm text-white">
                    {ele.todos.map((ele, index) => (
                      <li key={index}>{ele}</li>
                    ))}
                  </ul>
                )} */}

              {/* {ele.todos && (
              <ul className="list-disc ml-1 mt-2 text-sm text-gray-600">
                {ele.todos.map((todo, index) => (
                  <li key={index} className="flex items-center space-x-1">
                    <input type="checkbox" id={`todo-${index}`} className="form-checkbox" />
                    <label htmlFor={`todo-${index}`} className="ml-1">{todo}</label>
                  </li>
                ))}
              </ul>
            )} */}
              {ele.todos && (
                <ul className="list-disc ml-1 mt-2 text-sm text-gray-600">
                  {ele.todos.map((todo, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`todo-${ele.id}-${index}`}
                        className="peer"
                      />
                      <label
                        htmlFor={`todo-${ele.id}-${index}`}
                        className="ml-1 peer-checked:line-through peer-checked:text-gray-400"
                      >
                        {todo}
                      </label>
                    </li>
                  ))}
                </ul>
              )}

             
            
              <div className="border border-amber-400 hidden bg-white group-hover:flex  absolute bottom-0 ">
                   <ColorPicker
                key={ele.id}
                ele={ele}
                updateThemeColor={updateThemeColor}
              />
                 <div className="relative">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === ele.id ? null : ele.id)
                  }
                  className=" text-[#606876]"
                >
                <RiMore2Fill></RiMore2Fill>
                </button>

                {openMenu === ele.id && (
                  <div className="absolute right-0 mt-2 w-32 p-2 bg-gray-100 shadow-md rounded">
                    <button
                      onClick={() => handleEdit(ele)}
                      className="flex w-full p-1 hover:bg-gray-200 mb-1"
                    >
                      <PencilSquareIcon className="size-5 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDel(ele.id)}
                      className="flex w-full p-1 hover:bg-gray-200"
                    >
                      <TrashIcon className="size-5 mr-2" />
                      Delete
                    </button>
                  </div>
                )}
              
              </div>
           
               
              </div>
            </div>
               
          ))}
              
        </div>
    
      </div>
    </>
  );
};

export default NoteList;
