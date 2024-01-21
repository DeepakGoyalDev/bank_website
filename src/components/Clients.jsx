import React from "react";
import { CLIENTS } from "../constants";

const Clients = () => {
  return (
    <div className="border flex mt-20 mx-32 items-center justify-around">
      {CLIENTS.map((item) => {
        return (
          <div key={item.id} className="w-48">
            <img key={item.id} src={item.logo} className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
};

export default Clients;
