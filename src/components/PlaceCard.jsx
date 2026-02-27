import { useNavigate } from 'react-router-dom'
import './PlaceCard.css'

export default function PlaceCard({ place, onFavorite, isFavorite }) {
  const navigate = useNavigate()

  return (
    <article className="place-card">
      <div className="place-card-image">
        <img src={place.image} alt={place.name} />
      </div>
      <div className="place-card-content">
        <h3>{place.name}</h3>
        <p className="location">📍 {place.location}</p>
        <div className="place-card-actions">
          <button
            className="btn-view"
            onClick={() => navigate(`/place/${place.id}`)}
          >
            View Details
          </button>
          <button
            className={`btn-favorite ${isFavorite ? 'active' : ''}`}
            onClick={() => onFavorite(place.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            ❤️
          </button>
        </div>
      </div>
    </article>
  )
}
