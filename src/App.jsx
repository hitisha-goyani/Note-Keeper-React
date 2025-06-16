
import "./App.css";
import Note from "./component/note/Note";
import Navbar from "./component/Navbar";

function App() {
  

  return (
   
    <div className="dark:bg-white bg-[#181818]  relative">
      <Navbar/>
     

      <Note />
    </div>
  );
}

export default App;
