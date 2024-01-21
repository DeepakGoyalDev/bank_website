import React from "react";
import { FEEDBACK } from "../constants";
import { quotes } from "../assets";

const Testimonials = () => {
  return (
    <div className="border mx-32 mt-40 relative">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="flex items-center">
        <h3 className="flex-1 mr-20">
          What people are
          <br /> saying about us
        </h3>
        <p className="flex-1">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="border flex mt-20">
        {FEEDBACK.map((item) => {
          return (
            <div
              key={item.id}
              className="flex-1 px-10 py-16 flex flex-col justify-between feedback-card rounded-3xl"
            >
              <img src={quotes} alt="quote" className="h-[27px] w-[42px]" />
              <p className="mt-10 text-lg text-white">{item.content}</p>
              <div className="flex mt-6">
                <img src={item.img} alt={`${item.img}`} className="w-12 h-12" />
                <div className="ml-4">
                  <p>{item.name}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
