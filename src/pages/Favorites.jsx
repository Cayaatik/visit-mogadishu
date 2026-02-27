import { Link } from 'react-router-dom'
import PlaceCard from '../components/PlaceCard'
import { allPlaces } from '../data'
import './Favorites.css'

export default function Favorites({ favorites, onFavorite }) {
  const favoritedPlaces = allPlaces.filter((place) => favorites.includes(place.id))

  return (
    <main className="favorites-page">
      <h1>Favorites</h1>
      <p className="favorites-intro">Your saved places in Mogadishu</p>
      {favoritedPlaces.length === 0 ? (
        <div className="empty-favorites">
          <p>No favorites yet. Start exploring and add places you love!</p>
          <Link to="/" className="btn-explore">
            Explore Mogadishu
          </Link>
        </div>
      ) : (
        <div className="places-grid">
          {favoritedPlaces.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              onFavorite={onFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </main>
  )
}
