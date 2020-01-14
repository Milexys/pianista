import React from "react"
import SEO from "../components/seo"
import Home from "../components/Home"
import Header from "../components/Header"
import { Router } from "@reach/router";
import Start from "../components/Start";

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Felipe Browne" />
    <Header/>
    <Router>
      <Home path="/"/>
      <Start path="toca-la-melodia"/>
    </Router>
  </React.Fragment>
)

export default IndexPage
