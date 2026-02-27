import { Link } from 'react-router-dom'
import './CategoryCard.css'

const categories = [
  { path: '/hotels', label: 'Hotels', emoji: '🏨' },
  { path: '/restaurants', label: 'Restaurants', emoji: '🍴' },
  { path: '/history', label: 'Historical', emoji: '🏛' },
  { path: '/fun', label: 'Fun places', emoji: '🎉' },
]

export default function CategoryCard() {
  return (
    <div className="category-cards">
      {categories.map((cat) => (
        <Link key={cat.path} to={cat.path} className="category-card">
          <span className="category-emoji">{cat.emoji}</span>
          <span className="category-label">{cat.label}</span>
        </Link>
      ))}
    </div>
  )
}
