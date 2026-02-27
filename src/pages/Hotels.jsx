import PlaceCard from '../components/PlaceCard'
import { hotels } from '../data/hotels'
import './CategoryPage.css'

export default function Hotels({ favorites, onFavorite }) {
  return (
    <main className="category-page">
      <h1>Hotels</h1>
      <p className="category-intro">Where to stay in Mogadishu</p>
      <div className="places-grid">
        {hotels.map((place) => (
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
