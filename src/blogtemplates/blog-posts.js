import React from 'react'
import { Link, graphql } from 'gatsby'



export default function Template ({data}) {
    const post = data.markdownRemark

    return (
        <div>
            <Link to="/blog/" class="button">Go back</Link>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h2>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h2>
            <br />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
    )
}


export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }


`