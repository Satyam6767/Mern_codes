import React from 'react'
import {Link} from "react-router-dom"

function MainNavigation() {
  return (
    <div>
      <nav className="nav">
        <h2>Great quotes App</h2>
        <ul>
            <li>
                <Link to="/">All Quotes</Link> <br />
                <Link to="/new">New quotes</Link>
            </li>
        </ul>

      </nav>
    </div>
  )
}

export default MainNavigation
