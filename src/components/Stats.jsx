import React from "react";

const DATA = [
  {
    id: "user_count",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "company_count",
    title: "TRUSTED BY COMPANY",
    value: "230+",
  },
  {
    id: "transaction_count",
    title: "TRANSACTION",
    value: "$230M+",
  },
];

const Stats = () => {
  return (
    <div className="flex border mx-32 mt-20 justify-center">
      {DATA.map((item, index) => {
        return (
          <div key={item.id} className="flex items-center">
            <p className="text-4xl text-white font-semibold mr-6">
              {item.value}
            </p>
            <p className="uppercase text-xl text-gradient">{item.title}</p>
            {index !== 2 && <div className="w-[2px] h-5 mx-20 bg-grey" />}
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
