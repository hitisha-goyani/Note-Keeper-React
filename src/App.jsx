
import "./App.css";
import Note from "./component/note/Note";
import Navbar from "./component/Navbar";

function App() {
  

  return (
   
    <div className="dark:bg-white bg-[#202124]">
       <div className=" relative">
      <Navbar/>
     

      <Note />
    </div>
    </div>
   
  );
}

export default App;
