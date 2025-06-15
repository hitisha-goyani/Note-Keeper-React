import {
  AcademicCapIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import ColorPicker from "../ColorPicker";

const NoteList = () => {
  const {
    list,
    handleDel,
    handleEdit,
    handleStatus,
    setShowModal,
    handlePin,
    updateThemeColor,
  } = useContext(NoteContext);
  return (
    <>
      <div className="max-w-[70%] my-3  rounded-2xl shadow-amber-500 p-1 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-2 grid-cols-1 gap-5">
          {list.map((ele) => (
            <div
              key={ele.id}
              className={`rounded-md bg-[#b7b8e1]  shadow-2xl py-6 px-2 text-white
                 
                  dark:text-slate-700`}
                  //  style={{boxShadow: "8px 8px 6px 0px rgba(147, 149, 211, 1)"}}
            >
              <div className="flex justify-between">
                <h4 className="font-bold  text-black  ">{ele.task}</h4>
                <button
                  onClick={() => handlePin(ele.id)}
                  className={`rounded-full p-1 ms-2 ${
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
              {ele.note && <p className="text-black">{ele.note}</p>}

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

              <div className=" flex">
                <div>
                  <button
                    onClick={() => handleDel(ele.id)}
                    className=" rounded-full p-1 bg-[#7E6551]  hover:bg-gray-200"
                  >
                    <TrashIcon className="size-5 text-[#e4dbd5]" />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleEdit(ele);
                      setShowModal(false);
                    }}
                    className=" rounded-full p-1 bg-[#7E6551] hover:bg-gray-200 ms-2"
                  >
                    <PencilSquareIcon className="size-5 text-[#e4dbd5]" />
                  </button>
                </div>
                {/* <div>
                  <select
                    value={ele.themeColor}
                    onChange={(e) => updateThemeColor(ele.id, e.target.value)}
                    className="my-2 ms-2 p-1 rounded text-sm border border-black text-black"
                  >
                    <option value="bg-blue-100">blue🔵</option>
                    <option value="bg-green-100">Green🟢</option>
                    <option value="bg-yellow-100">Yellow🟡</option>
                    <option value="bg-orange-100">orange🟠</option>
                    <option value="bg-purple-100">Purple🟣</option>
                    <option value="bg-red-100">Red🔴</option>
                  </select>
                </div> */}
              </div>
              {/* <div className="flex gap-2 my-2 ms-2">
                  {[
                    { color: "bg-blue-100", label: "Blue 🔵" },
                    { color: "bg-green-100", label: "Green 🟢" },
                    { color: "bg-yellow-100", label: "Yellow 🟡" },
                    { color: "bg-orange-100", label: "Orange 🟠" },
                    { color: "bg-purple-100", label: "Purple 🟣" },
                    { color: "bg-red-100", label: "Red 🔴" },
                  ].map(({ color, label }) => (
                    <div
                      key={color}
                      onClick={() => updateThemeColor(ele.id, color)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        ele.themeColor === color
                          ? "border-black"
                          : "border-gray-400"
                      } ${color}`}
                      title={label}
                    ></div>
                  ))}
                </div> */}

              {/* <ColorPicker
                key={ele.id}
                ele={ele}
                updateThemeColor={updateThemeColor}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
