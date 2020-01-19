import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import "../sass/mystyles.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      imageOne: file(relativePath: {eq: "cityscape.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h3 class="title is-3">The Digital Frontier</h3>
      <div style={{ marginBottom: `1.45rem` }}>
        <Image fluid={data.imageOne.childImageSharp.fluid} alt="unsplash cityscape" />
      </div>
    </Layout>
  )
}