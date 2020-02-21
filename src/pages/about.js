import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
    <Layout>
        <SEO title="About" />
        <h1 class="title is-1">Welcome to the about page.</h1>
        <h3 class="title is-3">This website was created by Charlie with Dogtown Computer Science.</h3>
        <h4 class="title is-4">Business inquiries/questions? Contact me here.</h4>
        <a class="button" href="mailto:cmathIV@protonmail.com">Email me</a>
        <hr/>
        <p>Created on Friday December 20, 2019</p>
    </Layout>
)

export default About