import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "../_child/Author";


const PostCard = ({item}) => {
  const {id, title, category, img, published, subtitle, author} = item
  return (
    <div className="item bg-slate-900">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/images/img1.jpeg"}
            width={700}
            height={400}
            alt="1231"
            className="rounded-t-sm"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4 px-2 border-2 rounded-b-sm">
        <div className="category">
          <Link
            href={`/posts/${id}`}
            className="text-green-600 hover:text-violet-500 ease-in duration-200"
          >
            {category || 'unknown'}
          </Link>
          <Link href={`/posts/${id}`}> - {published || 'unknown'}</Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl hover:text-gray-300 ease-in duration-100"
          >
            {title || 'unknown'}
          </Link>
        </div>
        <p className="text-gray-400 py-3">
            {subtitle || 'La muerta'} Id
            perspiciatis, itaque consequuntur excepturi non quidem reiciendis
            minus.
          </p>
          { author && <Author author={author}/>}
      </div>
    </div>
  );
};

export default PostCard;
