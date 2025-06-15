import React, { useContext } from 'react';

import {  MoonIcon, PencilIcon, SunIcon} from "@heroicons/react/24/solid";
import { NoteContext } from '../context/NoteContext';
import { RiEditCircleFill, RiHeartFill } from '@remixicon/react'

const Navbar = () => {
    const { setTheme } = useContext(NoteContext);
  return (
    <div>
      <nav className="navbar  p-5 bg-[#9395D3] shadow-2xl flex justify-between">
  <a className="navbar-brand font-bold text-2xl flex" href="#">
    <RiEditCircleFill className="size-6 me-2 mt-1"></RiEditCircleFill>Note Keeper</a>
     <div className="">
        <button
          onClick={() => setTheme("dark")}
          className=" me-2 border py-1 rounded-sm px-4 bg-[#181818]  shadow"
        >
          <MoonIcon className="size-6 text-[#9395D3]"></MoonIcon>
        </button>
        <button
          onClick={() => setTheme("light")}
          className=" border py-1 rounded-sm px-4 bg-[#181818]  shadow"
        >
          <SunIcon className="size-6 text-[#9395D3]"></SunIcon>
        </button>
      </div>
</nav>
    </div>
  );
}

export default Navbar;
