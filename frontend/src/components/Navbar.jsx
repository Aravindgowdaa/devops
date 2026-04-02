import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">React + Django</div>
      <nav className="nav-links" aria-label="Primary">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
