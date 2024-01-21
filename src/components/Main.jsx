import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Main = () => {
  return (
    <div className="border flex ml-32 mt-6">
      <div className="self-center flex-1">
        <div className="flex discount-gradient rounded-lg items-center max-w-max px-[10px] py-1">
          <img src={discount} alt="discount" />
          <p className="text-lg ml-2">
            <span className="text-white">20% </span>
            DISCOUNT FOR <span className="text-white">1 MONTH </span>
            <span className="text-grey">ACCOUNT</span>
          </p>
        </div>

        <div className="flex mt-5 border items-center">
          <div>
            <h1>The Next</h1>
            <h1 className="text-gradient">Generation</h1>
          </div>
          <GetStarted />
        </div>

        <h1>Payment Method.</h1>

        <p className="mt-10 w-2/3">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className="flex-1 relative">
        <img src={robot} alt="robot" className="w-full h-full relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </div>
  );
};

export default Main;
