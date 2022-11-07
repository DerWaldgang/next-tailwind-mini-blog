import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const PageLayout = ({children}) => {
  return (
    <>
      <Head>
        <title>NextJS Blog</title>
      </Head>
      <Header />
     <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
