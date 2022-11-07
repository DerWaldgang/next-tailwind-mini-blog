import React from "react";
import fetcher from "../../features/fetcher";
import PostCard from "../cards/PostCard";

const SecondSection = () => {

    const {data: posts, isLoading, isError} = fetcher('/posts')
 
  if(isLoading) {
    return <div className="container mx-auto h-full text-center">{`>>>loading<<<`}</div>
  }
  return (
    <section className="container mx-auto md:px-20 py-10 px-6">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
        posts.map((item) => {
          return <PostCard key={item.id} item={item} />;
        })
        }
      </div>
    </section>
  );
};

export default SecondSection;
