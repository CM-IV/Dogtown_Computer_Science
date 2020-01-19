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
                        fluid(maxWidth: 800, maxHeight:450) {
                            ...GatsbyImageSharpFluid
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
            <h3 class="title is-3">Here are some websites that I have developed for local businesses.</h3>
            <div class="card">
                <div class="card-image">
                        {data.projImage.nodes.map(image => (
                            <Image key={image.id} fluid={image.childImageSharp.fluid} />
                        ))}
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <span>
                            <p class="title is-4">ELS Gun and Machine Works</p>
                            <a class="button" href="https://elsgunandmachineworks.com/">Go to Site</a>
                            <br />
                            <br />
                            <hr />
                            <p class="title is-4">Mathis Computing</p>
                            <a class="button" href="https://cm-iv.github.io/MathisComputing/">Go to Site</a>
                            <br />
                            <br />
                        </span>
                    </p>
                </footer>
            </div>
        </Layout>
    )
}