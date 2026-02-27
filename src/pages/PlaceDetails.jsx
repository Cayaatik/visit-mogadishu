import { useParams, useNavigate } from 'react-router-dom'
import { getPlaceById } from '../data'
import './PlaceDetails.css'

export default function PlaceDetails({ favorites, onFavorite }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const place = getPlaceById(id)
  const isFavorite = place ? favorites.includes(place.id) : false

  if (!place) {
    return (
      <main className="place-details">
        <p>Place not found.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </main>
    )
  }

  return (
    <main className="place-details">
      <div className="details-image">
        <img src={place.image} alt={place.name} />
      </div>
      <div className="details-content">
        <h1>{place.name}</h1>
        <p className="details-location">📍 {place.location}</p>
        <p className="details-description">{place.description}</p>
        <div className="details-actions">
          <button
            className={`btn-favorite-large ${isFavorite ? 'active' : ''}`}
            onClick={() => onFavorite(place.id)}
          >
            {isFavorite ? '❤️ Favorited' : '❤️ Favorite'}
          </button>
          <button className="btn-back" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </main>
  )
}
