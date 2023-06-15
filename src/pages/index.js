import * as React from "react";

import Layout from "../components/layout";
import Footer from "../components/footer";
import Home from "../components/home";

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="HALFASIAN"></Layout>
      <Home />
      <Footer />
    </>
  );
};

export const Head = () => <title>Home</title>;
export default IndexPage;
