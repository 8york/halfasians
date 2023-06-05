import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Info from "../components/info";
const About = () => {
  
  return (
  <div>
  <Layout pageTitle="WHO?"></Layout>
  <main>
    <Info />
  </main>
  <Footer />
  </div>
  
  )
};

export const Head = () => <title>About</title>;
export default About;