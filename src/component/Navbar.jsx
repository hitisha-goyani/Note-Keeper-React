import React, { useContext } from 'react';

import {  MoonIcon, PencilIcon, SunIcon} from "@heroicons/react/24/solid";
import { NoteContext } from '../context/NoteContext';
import { RiEditCircleFill, RiHeartFill } from '@remixicon/react'

const Navbar = () => {
    const { setTheme } = useContext(NoteContext);
  return (
    <div>
      <nav className="navbar  p-5 shadow-2xl flex justify-between dark:bg-white bg-[#202124]">
  <a className="navbar-brand font-bold text-2xl flex" href="#">
    <RiEditCircleFill className="size-6 me-2 mt-1 text-[#fabd03]"></RiEditCircleFill> <span className='ms-1 text-[#606876]'> Note Keeper</span></a>
     <div className="">
        
        <button
          onClick={() => setTheme("dark")}
          className=" border border-[#606876] py-1 rounded-sm px-4  me-2  shadow"
        >
          <SunIcon className="size-6 text-[#606876]"></SunIcon>
        </button>
        <button
          onClick={() => setTheme("light")}
          className=" border border-[#606876] py-1 rounded-sm px-4  shadow"
        >
          <MoonIcon className="size-6 text-[#606876]"></MoonIcon>
        </button>
      </div>
</nav>
    </div>
  );
}

export default Navbar;
