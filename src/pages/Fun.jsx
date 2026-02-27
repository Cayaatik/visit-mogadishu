import PlaceCard from '../components/PlaceCard'
import { fun } from '../data/fun'
import './CategoryPage.css'

export default function Fun({ favorites, onFavorite }) {
  return (
    <main className="category-page">
      <h1>Fun & Beaches</h1>
      <p className="category-intro">Beaches, parks, and places to have fun</p>
      <div className="places-grid">
        {fun.map((place) => (
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
