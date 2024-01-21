import React from "react";
import { copyWrite, logo } from "../assets";
import { FOOTER_LINKS, SOCIAL_MEDIA } from "../constants";

const Footer = () => {
  return (
    <div className="bg-footerBlack border px-32 pt-16 mt-20">
      <div className="border flex">
        <div className="w-2/5 pr-10">
          <img src={logo} />
          <p className="mt-9">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {FOOTER_LINKS.map((item) => {
          return (
            <div key={item.id} className="border w-1/5">
              <p className="text-white text-lg font-semibold mb-3">
                {item.title}
              </p>
              {item.links.map((link) => {
                return (
                  <a className="block text-grey mt-3" href={link.link}>
                    {link.name}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>

      <hr className="mt-10 bg-grey h-[1px]" />

      <div className="flex py-7 justify-between px-4">
        <div className="flex">
          <p className="text-lg">Copyright</p>
          <img src={copyWrite} alt="copywrite" className="mx-2" />
          <p className="text-lg">2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="flex">
          {SOCIAL_MEDIA.map((item) => {
            return (
              <a className="mr-4" href={item.link} key={item.id}>
                <img src={item.icon} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
