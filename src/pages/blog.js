import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "../sass/mystyles.scss"


const Blogpage = ({data}) => (
    <Layout>
        <SEO title="Blog" />
        <h3 class="title is-3">Latest posts</h3>
        {data.allMarkdownRemark.edges.map(post => (
            <div class="card" style={{ marginBottom: `1.75rem` }} key={ post.node.id }>
                <div class="card-content">
                    <p class="title">{ post.node.frontmatter.title }</p>
                    <p class="subtitle">Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</p>
                    <br />
                    <br />
                </div>
                <footer class="card-footer">
                    <p class="card-footer-item">
                        <span>
                            <Link to={ post.node.frontmatter.path }>Read More</Link>
                        </span>
                    </p>
                </footer>
            </div>
        ))}
    </Layout>
)


export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date
                    author
                  }
                }
            }
        }
    }



`


export default Blogpage