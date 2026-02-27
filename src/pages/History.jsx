import PlaceCard from '../components/PlaceCard'
import { history } from '../data/history'
import './CategoryPage.css'

export default function History({ favorites, onFavorite }) {
  return (
    <main className="category-page">
      <h1>Historical Places</h1>
      <p className="category-intro">Mosques, museums, and historic sites</p>
      <div className="places-grid">
        {history.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onFavorite={onFavorite}
            isFavorite={favorites.includes(place.id)}
          />
        ))}
      </div>
    </main>
  )
}
