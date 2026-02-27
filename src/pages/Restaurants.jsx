import PlaceCard from '../components/PlaceCard'
import { restaurants } from '../data/restaurants'
import './CategoryPage.css'

export default function Restaurants({ favorites, onFavorite }) {
  return (
    <main className="category-page">
      <h1>Restaurants</h1>
      <p className="category-intro">Best places to eat in Mogadishu</p>
      <div className="places-grid">
        {restaurants.map((place) => (
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
