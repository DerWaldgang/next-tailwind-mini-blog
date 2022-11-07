import React from "react";
import fetcher from "../../features/fetcher";
import Card from "../cards/Card";

const ThirdSection = () => {
  const { data: populars, isLoading, isError } = fetcher("/populars");

  if (isLoading) {
    return (
      <div className="container mx-auto h-full text-center">{`>>>loading<<<`}</div>
    );
  
  }
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2 gap-x-4">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {populars.slice(0, (populars.length/2)).map(item => {
            return <Card item={item}/>
          })}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travles</h1>
          <div className="flex flex-col gap-6">
          {populars.slice((populars.length/2), (populars.length)).map(item => {
            return <Card item={item}/>
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
