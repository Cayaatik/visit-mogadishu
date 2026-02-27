import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Restaurants from './pages/Restaurants'
import History from './pages/History'
import Fun from './pages/Fun'
import Favorites from './pages/Favorites'
import PlaceDetails from './pages/PlaceDetails'
import NotFound from './pages/NotFound'
import './App.css'

function AppContent() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) {
          setFavorites(parsed)
        }
      } catch (e) {
        console.error('Failed to load favorites', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const handleFavorite = (placeId) => {
    setFavorites((prev) =>
      prev.includes(placeId) ? prev.filter((id) => id !== placeId) : [...prev, placeId]
    )
  }

  return (
    <div className="app">
      <Navbar />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/hotels"
            element={
              <Hotels favorites={favorites} onFavorite={handleFavorite} />
            }
          />
          <Route
            path="/restaurants"
            element={
              <Restaurants favorites={favorites} onFavorite={handleFavorite} />
            }
          />
          <Route
            path="/history"
            element={
              <History favorites={favorites} onFavorite={handleFavorite} />
            }
          />
          <Route
            path="/fun"
            element={
              <Fun favorites={favorites} onFavorite={handleFavorite} />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites favorites={favorites} onFavorite={handleFavorite} />
            }
          />
          <Route
            path="/place/:id"
            element={
              <PlaceDetails favorites={favorites} onFavorite={handleFavorite} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/visit-mogadishu">
      <AppContent />
    </BrowserRouter>
  )

}
