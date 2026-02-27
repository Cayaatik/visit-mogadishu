import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Visit Mogadishu
      </Link>
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/fun">Fun</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}
