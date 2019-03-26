import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `#009abb` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Don't even send me a message</p>
  </div>
)