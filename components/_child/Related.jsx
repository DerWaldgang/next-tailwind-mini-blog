import React from 'react';
import Author from './Author';

const Related = ({title, subtitle, author}) => {

    return (
        <section className="pt-16">
            <h1 className='font-bold text-4xl py-12'>Related</h1>

            <div className='flex flex-col gap-10'>
                <div className='flex flex-col text-start gap-5 bg-slate-900 p-3 rounded-sm border border-white'>
                    <Author author={author}/>
                    <h1 className='text-bold text-3xl py-1'>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default Related;