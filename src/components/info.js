import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


const Info = () => {
  //   const data = useStaticQuery(graphql`
  //   query{
  //     allAboutJson {
  //       nodes {
  //         About
  //         Performance
  //       }
  //     }
  //   }
  // `);
  
  // const aboutData = data.allAboutJson.nodes[0];
  // console.log(data);
  // const aboutTitle = Object.keys(aboutData)[0];
  // console.log(aboutTitle)
  return (
    <main>
     {/* {data.allAboutJson.nodes.map((item, key, index) => (
        <section key={index}>
          <div>
            {/* <h2>{Object.keys(item.about)}</h2> */}
            {/* <p>{item.About}</p>
          </div>
          <div>
            <h2></h2>
            <p>{item.Performance}</p>
          </div>
        </section> */}
      {/* ))}} */}

  </main>
  );
};

export default Info;
