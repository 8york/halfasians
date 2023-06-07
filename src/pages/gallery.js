import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import ImageGallery from "../components/images";
import Video from "../components/video";
const About = () => {
  return (
  <div>
  <Layout pageTitle="LOOK"></Layout>
  <main>
      
    <ImageGallery />
    <Video />
  </main>
  <Footer />
  </div>
  )
};

export const Head = () => <title>About</title>;
export default About;