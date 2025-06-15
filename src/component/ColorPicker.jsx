import React, { useContext, useState } from "react";
import NoteList from "./note/NoteList";
import { NoteContext } from "../context/NoteContext";

// Inside your component:
function ColorPicker({ ele, updateThemeColor }) {
 
  const{open, setOpen } = useContext(NoteContext)

  const colors = [
    { color: "bg-blue-100" },
    { color: "bg-green-100"},
    { color: "bg-yellow-100" },
    { color: "bg-orange-100" },
    { color: "bg-purple-100"},
    { color: "bg-red-100"},
  ];

  return (
    <div className="flex flex-col items-start gap-2 my-2 ms-2">
      
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer"
        title="Click to select color"
      >
        🎨
      </div>

    
      {open && (
        <div className="flex gap-2 mt-2">
          {colors.map(({ color, label }) => (
            <div
              key={color}
              onClick={() => {
                updateThemeColor(ele.id, color);
                setOpen(false);
              }}
              className={`w-6 h-6 rounded-full border-2 ${
                ele.themeColor === color ? "border-black" : "border-gray-400"
              } ${color}`}
              title={label}
            ></div>
          ))}
        </div>
      )}

    </div>
  )
}

export default ColorPicker;
