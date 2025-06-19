import React from 'react'
import {

  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { RiMore2Fill, RiTimeLine } from "@remixicon/react";
import { useContext } from "react";
import { NoteContext } from '../context/NoteContext';
import ColorPicker from './ColorPicker';

const Task_Card = () => {

     const {
        list,
        handleDel,
        handleEdit,
        handleStatus,
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
              className={`rounded-md border relative group border-[#525355] ${ele.themeColor}  shadow-2xl py-6 px-2 text-white
                  
                    dark:text-slate-700`}
              //  style={{boxShadow: "8px 8px 6px 0px rgba(147, 149, 211, 1)"}}
            >
              <div className="flex justify-between">
                <div>
                      <h4 className="font-bold text-[#525355] ">{ele.task}</h4>
                </div>
              
                {/* <button
                  onClick={() => handlePin(ele.id)}
                  className={`rounded-full p-1 ms-2  group-hover:flex  ${
                    ele.pinned ? "bg-slate-800 text-black" : "bg-gray-100"
                  }`}
                >
                  📌
                </button> */}
             
              </div>

              <p
                onClick={() => handleStatus(ele.id)}
                className={
                  ele.status
                    ? "w-30  text-xs font-medium me-2 px-2 py-1 my-2  rounded-sm bg-[#bce7e5] dark:text-[#20b2aa]"
                    : "w-30 text-xs bg-font-medium me-2 px-2 py-1 my-2 rounded-sm bg-[#fef1cc] dark:text-[#FABD03] "
                }
              >
                {ele.status ? (
                  <span>Completed</span>
                ) : (
                  <span>Not Completed</span>
                )}
              </p>
              {ele.note && <p className="dark:text-[#525355] ">{ele.note}</p>}
              {ele.timestamp && (
               
                <p className=" w-40 text-xs rounded dark:bg-[#f0f0f0] bg-[#525355] dark:text-slate-700 text-white mt-1 ps-2 flex">
    <RiTimeLine size={15}className="text-xs me-1  "></RiTimeLine>{new Date(ele.timestamp).toLocaleString()}
                </p>
               
              )}
              {ele.todos && (
                <ul className="list-disc ml-1 mt-2 text-sm dark:text-gray-600 text-[#DAD7CD]">
                  {ele.todos.map((todo, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`todo-${ele.id}-${index}`}
                        className="peer"
                      />
                      <label
                        htmlFor={`todo-${ele.id}-${index}`}
                        className="ml-1 text-lg peer-checked:line-through peer-checked:text-gray-400"
                      >
                        {todo}
                      </label>
                    </li>
                  ))}
                </ul>
              )}

                <div className=" hidden  mt-2 group-hover:flex  ">
               
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
                  className=" rounded-full border-2 border-gray-400 flex items-center justify-center ms-2"
                >
                <RiMore2Fill className='text-[#606876]'></RiMore2Fill>
                </button>

                {openMenu === ele.id && (
                  <div className="absolute right-0  mt-2 w-32 p-2 dark:bg-gray-100 bg-slate-500 shadow-md rounded">
                    <button
                      onClick={() => handleEdit(ele)}
                      className="flex w-full p-1 dark:text-[#606876] text-black hover:bg-gray-200 mb-1"
                    >
                      <PencilSquareIcon className="size-5 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDel(ele.id)}
                      className="flex w-full p-1 dark:text-[#606876] text-black hover:bg-gray-200"
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
  )
}

export default Task_Card
