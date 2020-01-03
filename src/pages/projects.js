import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default () => {
    const data = useStaticQuery(graphql`
        query projectsQuery {
            projImage: allFile(filter: { relativeDirectory: {eq: "gallery"} }) {
                nodes {
                    id
                    childImageSharp {
                        fixed(width: 1000, height: 600) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    
    `)
    console.log(data)
    return (
        <Layout>
            <SEO title="Projects" />
            <h1>Here are some websites that I have developed for local businesses.</h1>
            <div style={{ marginBottom: `1.45rem` }}>
                {data.projImage.nodes.map(image => (
                    <Image key={image.id} fixed={image.childImageSharp.fixed} />
                ))}
            </div>
        </Layout>
    )
}