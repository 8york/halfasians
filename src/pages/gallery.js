import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
const About = () => {
  return (
  <div>
  <Layout pageTitle="LOOK"></Layout>
  <main>
    <section>
    <p>does it display?</p>
    </section>
  </main>
  <Footer />
  </div>
  )
};

export const Head = () => <title>About</title>;
export default About;