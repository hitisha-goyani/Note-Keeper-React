import { useContext } from "react";
import "./App.css";
import Note from "./component/note/Note";
import { NoteContext } from "./context/NoteContext";
import { MoonIcon, PencilIcon, SunIcon } from "@heroicons/react/24/solid";

function App() {
  const { setTheme } = useContext(NoteContext);

  return (
   
    <div className="bg-amber-50 dark:bg-slate-800  h-screen relative">
      <nav className="navbar navbar-light bg-light border border-amber-700 p-3 bg-gray-700 shadow-2xl ">
  <a className="navbar-brand font-bold text-2xl" href="#"><PencilIcon className="size-6"></PencilIcon>Note Keeper</a>
</nav>
      <div className="flex justify-end">
        <button
          onClick={() => setTheme("dark")}
          className="m-1 border py-1 rounded-sm px-4 bg-blue-400 shadow"
        >
          <MoonIcon className="size-6 text-dark"></MoonIcon>
        </button>
        <button
          onClick={() => setTheme("light")}
          className="m-1 border py-1 rounded-sm px-4 bg-blue-400 shadow"
        >
          <SunIcon className="size-6 text-dark"></SunIcon>
        </button>
      </div>

      <Note />
    </div>
  );
}

export default App;
