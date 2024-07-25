import React, { useState } from "react";
import Avatar from "react-avatar";
import Sidebar from "./Sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";

import logo from "/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchy, setSearchy] = useState();
  const navigate = useNavigate();

  const navigator = (event) => {
    if (
      (event.key === "Enter" || event === "searchButton") &&
      searchy?.length > 0
    ) {
      navigate(`search/${searchy}`);
      setSearchy("");
    }
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
      <div className="flex items-center space-x-4  ">
        <AiOutlineMenu className="text-xl cursor-pointer" onClick />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="flex w-[35%] items-center ">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none"
            onChange={(e) => {
              setSearchy(e.target.value);
            }}
            onKeyUp={navigator}
            value={searchy}
          />
        </div>
        <button
          className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => navigator("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border bg-gray-100 border-slate-100 rounded-3xl p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex  space-x-5 items-center ">
        <RiVideoAddLine
          size={"40px"}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-3xl"
        />
        <AiOutlineBell
          size={"40px"}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-3xl"
        />
        <Avatar
          className="cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkKA0cvzl6V-tQaQtr_U9sj73-Wsh5ATWmw&s"
          size="32"
          round={true}
        />
      </div>
    </div>
  );
}

export default Navbar;
