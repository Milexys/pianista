/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "./Header"
import Home from "./Home"
import SongContextProvider from "../context/SongContext"
import PianoBrowne from "./Piano/PianoBrowne"
import Button from "./Button"
import Nino from './Histories/Nino/index'
import { Router } from "@reach/router";
import Start from "./Start"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <SongContextProvider>
      <Router>
        <Start path="toca-la-melodia"/>
        <Header />
        <Home path="/" />
        <PianoBrowne />
        <Nino path="nino-prodigio"/>
        <Button />
      </Router>
    </SongContextProvider>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
