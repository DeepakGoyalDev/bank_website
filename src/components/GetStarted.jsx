import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="blue-gradient w-36 h-36  m-auto p-[2px] rounded-full overflow-hidden">
      <div className="bg-black1 flex flex-col justify-center items-center h-full rounded-full">
        <div className="flex">
          <p className="text-xl mr-1 text-gradient">Get</p>
          <img src={arrowUp} />
        </div>
        <p className="text-xl text-gradient">Started</p>
      </div>
    </div>
  );
};

export default GetStarted;
