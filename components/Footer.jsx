import React from "react";
import Newslatter from "./_child/Newslatter";

const Footer = () => {
  return (
    <footer className="footerImage bg-slate-900">
        <Newslatter/>
      <div className="container mx-auto flex justify-center">
        <div className="py-2">
          <div className="flex justify-center flex-col">
            <div className="text-center">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-br to-green-900 from-emerald-500 sm:font-extrabold sm:text-3xl">
                NextJS
              </h1>
            </div>
            <p className="pt-2 text-gray-200">Copyright 2022 All rights reserved</p>
            <p className="text-gray-200 text-center">Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
