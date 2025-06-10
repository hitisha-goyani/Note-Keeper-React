import {
  AcademicCapIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";

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
      <div className="max-w-[70%] my-3 border  bg-slate-800 dark:bg-slate-200 border-slate-400 rounded-2xl shadow-amber-500 p-4 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2  gap-2 ">
          {list.map((ele) => (
            <div
              key={ele.id}
              className={`rounded-md border  border-slate-700 py-6 px-2 text-white ${ele.themeColor} dark:text-slate-700`}
            >
              <div className="flex justify-between">
                <h4 className="font-bold ">{ele.task}</h4>
                <button
                  onClick={() => handlePin(ele.id)}
                  className={`rounded-full p-1 ms-2 ${
                    ele.pinned ? "bg-slate-800 text-black" : "bg-gray-100"
                  }`}
                >
                  📌
                </button>
              </div>

              <select
                value={ele.themeColor}
                onChange={(e) => updateThemeColor(ele.id, e.target.value)}
                className="my-2 p-1 rounded text-sm"
              >
                <option value="bg-blue-100"><div className="rounded-full bg-blue-100 border"></div></option>
                <option value="bg-green-100">Green</option>
                <option value="bg-yellow-100">Yellow</option>
                <option value="bg-pink-100">Pink</option>
                <option value="bg-purple-100">Purple</option>
              </select>

              <p
                onClick={() => handleStatus(ele.id)}
                className={
                  ele.status
                    ? "bg-green-100 text-green-800 text-xs font-medium me-2 px-2 py-1 my-2  rounded-sm dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-800 text-xs font-medium me-2 px-2 py-1 my-2 rounded-sm dark:bg-red-900 dark:text-red-300"
                }
              >
                {ele.status ? (
                  <span>Completed</span>
                ) : (
                  <span>Not Completed</span>
                )}
              </p>
              {ele.note && <p>{ele.note}</p>}

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

              <button
                onClick={() => handleDel(ele.id)}
                className=" rounded-full p-1 bg-gray-100 dark:bg-slate-900 hover:bg-gray-200"
              >
                <TrashIcon className="size-5 text-red-400" />
              </button>
              <button
                onClick={() => {
                  handleEdit(ele);
                  setShowModal(false);
                }}
                className=" rounded-full p-1 bg-gray-100  dark:bg-slate-900 hover:bg-gray-200 ms-2"
              >
                <PencilSquareIcon className="size-5 text-blue-500" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
