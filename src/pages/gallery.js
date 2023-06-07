import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import ImageGallery from "../components/images";
const About = () => {
  return (
  <div>
  <Layout pageTitle="LOOK"></Layout>
  <main>
      <h2>What a Gallery</h2>
      <p>All these images</p>
    <ImageGallery />
  </main>
  <Footer />
  </div>
  )
};

export const Head = () => <title>About</title>;
export default About;