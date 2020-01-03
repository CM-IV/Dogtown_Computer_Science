import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "../pages/_mystyles.scss"


const Blogpage = ({data}) => (
    <Layout>
        <SEO title="Blog" />
        <h1 class="title is-1">Latest posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={ post.node.id }>
                <h3>{ post.node.frontmatter.title }</h3>
                <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
                <br />
                <br />
                <Link to={ post.node.frontmatter.path }>Read More</Link>
                <br />
                <br />
                <hr />
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