import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Info = () => {
    const data = useStaticQuery(graphql`
    query {
      allAboutJson {
        nodes {
          About
        }
      }
    }
  `);
  console.log(data);

  return (
    <section>
      <p>{data.allAboutJson.nodes[0].About}</p>
    </section>
  );
};

export default Info;
