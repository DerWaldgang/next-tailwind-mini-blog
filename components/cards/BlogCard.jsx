import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Author from '../_child/Author';

const BlogCard = ({item}) => {

  const {id, title, category, img, published, subtitle, author} = item

    return (
        <div className="grid lg:grid-cols-2">
        <div className="image">
          <Link href={`/posts/${id}`}>
            <Image src={img} width={800} height={1000} alt='1231' />
          </Link>
        </div>
        <div className="info bg-slate-900 p-2 flex justify-center flex-col border-2">
          <div className="category">
            <Link
              href={`/posts/${id}`}
              className="text-green-600 hover:text-violet-500 ease-in duration-200"
            >
              {category}
            </Link>
            <Link href={`/posts/${id}`}> - {published}</Link>
          </div>
          <div className="title">
            <Link
              href={`/posts/${id}`}
              className="text-2xl md:text-4xl hover:text-gray-300 ease-in duration-100"
            >
              {title}
            </Link>
          </div>
          <p className="text-gray-400 py-3">
            {subtitle} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, officiis.
          </p>
          <Author author={author}/>
        </div>
      </div>
    );
};

export default BlogCard;