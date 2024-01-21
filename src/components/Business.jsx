import React from "react";
import { FEATURES } from "../constants";

const Business = () => {
  return (
    <div className="flex   mx-32 items-center mt-48">
      <div className="flex-1 mr-20">
        <h3>You do the business,</h3>
        <h3>we’ll handle the money.</h3>
        <p className="mt-6">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="mt-12 btn">Get Started</button>
      </div>
      <div className="flex-1 flex-col justify-between flex  self-stretch">
        {FEATURES.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center  px-5 py-5 rounded-[20px] feature-card"
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-full mr-5 icon-bg">
                <img src={item.icon} alt={`${item.icon}`} className="w-9 h-9" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2">{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Business;
