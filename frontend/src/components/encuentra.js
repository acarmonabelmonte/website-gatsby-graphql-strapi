import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
    query  {
  file(relativePath:{eq:"encuentra.jpg"}){
    publicURL
  }
}

    `)

    return (  );
}
 
export default Encuentra;
