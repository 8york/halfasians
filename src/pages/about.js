import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import AboutInfo from "../components/about-info";
import Performance from "../components/Performance-info";
const About = () => {
  
  return (
  <div>
  <Layout pageTitle="WHO?"></Layout>
  <main>
    <AboutInfo />
    <Performance />
  </main>
  <Footer />
  </div>
  
  )
};

export const Head = () => <title>About</title>;
export default About;