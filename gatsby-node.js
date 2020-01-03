const path = require (`path`)

exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your site has been built!`)
}


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`src/blogtemplates/blog-posts.js`)
    

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
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
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogTemplate,
            })
        })
    })
}