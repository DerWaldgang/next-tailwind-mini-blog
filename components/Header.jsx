import Link from "next/link";
import React from "react";


const Header = () => {
  return (
    <header className="shadow-md bg-slate-900">
      <div className="xl:container xl:mx-auto flex flex-col h-32 items-center sm:flex-row sm:justify-between py-3 sm:h-20 text-xl">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center">
          <input type="text" className="input-search" placeholder="Search..." />
        </div>
        <div className=" shrink w-80 sm:order-2 text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-br to-green-900 from-emerald-500 sm:font-extrabold sm:text-3xl">NextJS</h1>
        </div>

          
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href="/" className="hover:text-violet-500">Home</Link>
            <Link href="/blog" className="hover:text-violet-500">My Blog</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
