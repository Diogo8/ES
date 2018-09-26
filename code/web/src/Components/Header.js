import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Feed</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/perfil'>Perfil</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}


