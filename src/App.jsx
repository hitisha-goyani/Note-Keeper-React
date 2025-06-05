import { useContext } from "react";
import "./App.css";
import Note from "./component/note/Note";
import { NoteContext } from "./context/NoteContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function App() {
  const { setTheme } = useContext(NoteContext);

  return (
    <div className="bg-amber-50 dark:bg-slate-800  h-screen relative">
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
