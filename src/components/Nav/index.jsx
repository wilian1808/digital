import './index.css'

import { Link } from 'wouter'

export default function Nav () {
  return (
    <nav className="nav">
      <ul className="nav__content">
        <li className="nav__item">
          <Link to="#" className="nav__link">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/login" className="nav__link">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
