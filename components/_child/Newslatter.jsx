import React from "react";

const Newslatter = () => {
  return (
    <section className="mt-16">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-br to-violet-900 from-violet-500">
          Subscribe NewsLatter
        </h1>
        <div className="py-4">
          <input
            type="text"
            className=" border-1 rounded w-9/12 p-3 text-black focus:outline-green-900 bg-white"
            placeholder="Enter your email"
          />
        </div>
        <button className="bg-gradient-to-br to-violet-900 from-violet-500 px-16 py-3 rounded-full text-white text-xl">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newslatter;
