import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Author = ({author}) => {

    return (
        <div className='author flex py-1'>
            <Image src={author? author.img : '/'} width={50} height={50} className="rounded-full" alt='1231' />
            <div className='flex flex-col justify-center px-4'>
                <Link href='/' className='text-md font-semibold text-gray-100 hover:text-gray-300'>{author? author.name : 'unknown'}</Link>
                <span className='text-sm text-gray-300'>{author ? author.designation : 'unknown'}</span>
            </div>
        </div>
    );
};

export default Author;