import React from "react";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <div className="flex border mx-32 mt-40 items-center">
      <div className="flex-1 mr-20">
        <h3>Find a better card deal in few easy steps.</h3>
        <p className="mt-6">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="btn mt-12">Get Started</button>
      </div>
      <div className="flex-1">
        <img src={card} alt="cardDeal" className="w-full h-full" />
      </div>
    </div>
  );
};

export default CardDeal;
