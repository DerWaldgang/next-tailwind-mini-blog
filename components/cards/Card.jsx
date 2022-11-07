import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Author from '../_child/Author';

const Card = ({item}) => {
  const {title, category, img, published, subtitle, author} = item
    return (
        <div className="flex gap-2 ">
        <div className="image flex flex-col justify-center">
          <Link href="/">
            <Image
              src={img}
              width={600}
              height={600}
              alt="1231"
              className="rounded"
            />
          </Link>
        </div>
        <div className="info flex justify-center flex-col py-2 bg-slate-900 pl-2 rounded">
          <div className="category">
            <Link
              href="/"
              className="text-green-600 hover:text-violet-500 ease-in duration-200"
            >
              {category}
            </Link>
            <Link href="/"> - {published}</Link>
          </div>
          <div className="title">
            <Link
              href="/"
              className="text-xl hover:text-gray-300 ease-in duration-100"
            >
              {title}
            </Link>
          </div>
          <Author author={author}/>
        </div>
      </div>
    );
};

export default Card;