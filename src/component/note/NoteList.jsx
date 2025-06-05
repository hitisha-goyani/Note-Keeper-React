import {
  AcademicCapIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";

const NoteList = () => {
  const { list, handleDel, handleEdit, handleStatus } = useContext(NoteContext);
  return (
    <>
      <div className="max-w-xl my-3 border  bg-slate-800 dark:bg-slate-200 border-slate-400 rounded-2xl shadow-amber-500 p-4 mx-auto">
        <div className="grid grid-cols-4 gap-2 ">
          {list.map((ele) => (
            <div
              key={ele.id}
              className="rounded-md border border-slate-700 py-6 px-2 text-white dark:text-slate-700"
            >
              <h4 className="font-bold ">{ele.task}</h4>
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

              {ele.todos &&  (
                <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
                  {ele.todos.map((ele, index) => (
                    <li key={index}>{ele}</li>
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
                onClick={() => handleEdit(ele)}
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
