import { useContext } from "react";
import "./App.css";
import Note from "./component/note/Note";

import { MoonIcon,  SunIcon } from "@heroicons/react/24/solid";
import Navbar from "./component/Navbar";

function App() {
  

  return (
   
    <div className="bg-white dark:bg-[#181818]  relative">
      <Navbar/>
     

      <Note />
    </div>
  );
}

export default App;
