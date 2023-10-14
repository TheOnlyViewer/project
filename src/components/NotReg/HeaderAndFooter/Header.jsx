import React from 'react'
import './HeaderAndFooter.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="container">
        <ul className="header-list">
          <li> <Link to = "/" className='link'><div>Главное</div></Link> </li>
          <li> <Link to = "/more" className='link'><div>Еще</div></Link> </li>
          <li> <Link to = "/info" className='link'><div>О нас</div></Link> </li>
        </ul>
      </nav>
    </header>
  )
}