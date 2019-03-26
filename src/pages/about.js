import React from "react"
import Link from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `#009abb` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="About Me" />
    <p>Just trying to make this website from scratch.</p>
    <p>Give me a few more weeks to get this done.</p>
    <img src="https://images.unsplash.com/photo-1534176043700-789edb4e2f91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60" width="500" height="300" alt="cool corgi" />
    </div>
)