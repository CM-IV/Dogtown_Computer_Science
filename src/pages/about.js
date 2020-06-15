import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const About = () => (
    <Layout>
        <SEO title="About" />
        <h1 class="title is-3">About Me</h1>
        <h3 class="title is-4">Charlie with Dogtown Computer Science created this website.</h3>
        <h4 class="title is-4">Business inquiries/questions? Computer IT help? Contact me here.</h4>
        <a class="button" href="mailto:cmathIV@protonmail.com">Email Me</a>
        <br />
        <br />
        <a class="button" href="https://docdro.id/rqGcapo">View Resume</a>
        <hr/>
        <p>Created on Friday December 20, 2019</p>
    </Layout>
)

export default About