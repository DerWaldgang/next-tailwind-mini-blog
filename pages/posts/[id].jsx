import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import Author from "../../components/_child/Author";
import Related from "../../components/_child/Related";
import fetcher from "../../features/fetcher";
import getPosts from "../../features/fetchs.api";
import { SWRConfig } from "swr";

const Page = ({ fallback }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = fetcher(`/posts/${id}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data} />;
    </SWRConfig>
  );
};

const Article = ({ title, img, subtitle, description, author }) => {
  return (
    <PageLayout>
      <section className="container mx-auto md:px-2 w-3/4 pt-10 ">
        <div className="flex justify-center">
          <Author author={author} />
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>
          <p className="text-gray-400 text-xl text-center">{subtitle}</p>

          <div className="mx-auto w-3/4 py-16">
            <Image src={img} width={900} height={600} />
          </div>

          <div className="content text-gray-400 text-lg flex flex-col gap-4 mx-auto w-3/4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              ad tu queer unto parabaol mi dienta un africane Lorem ipsum dolor
              sit amet..
            </p>
            <p>{description}</p>
          </div>
          <Related title={title} subtitle={subtitle} author={author}/>
        </div>
      </section>
    </PageLayout>
  );
};

export default Page;

export async function getStaticProps({ params }) {
  const posts = await getPosts(params.id);

  return {
    props: {
      fallback: { // этот fallback передает в пропсы Page чтобы SWRConfig смог закешировать данные 
        "/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
