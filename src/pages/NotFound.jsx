import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <p className="not-found-text">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-home">
        Back to Home
      </Link>
    </main>
  )
}
