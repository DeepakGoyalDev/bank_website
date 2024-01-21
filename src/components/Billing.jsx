import React from "react";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <div className="flex border mx-32 mt-40 items-center">
      <div className="flex-1 relative">
        <img src={bill} alt="billing" className="w-full h-full" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className="flex-1 ml-20">
        <h3>Easily control your</h3>
        <h3>billing & invoicing.</h3>
        <p className="mt-6">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex mt-12">
          <img src={apple} alt="apple" className="mr-8" />
          <img src={google} />
        </div>
      </div>
    </div>
  );
};

export default Billing;
