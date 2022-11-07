import BlogCard from "../cards/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import fetcher from "../../features/fetcher";

SwiperCore.use([Autoplay]);

const FirstSection = () => {
  const { data: posts, isLoading, isError } = fetcher("/posts");

  if (isLoading) {
    return (
      <div className="container mx-auto h-full text-center">{`>>>loading<<<`}</div>
    );
  }
  return (
    <section className="section py-16 w-3/4 mx-auto md:max-w-full">
      <div className="container mx-auto">
        <h1 className="font-semibold text-3xl pb-6 text-center">Title</h1>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          slidesPerView={1}
        >
          {posts.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <BlogCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default FirstSection;
