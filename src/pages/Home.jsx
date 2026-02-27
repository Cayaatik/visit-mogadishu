import CategoryCard from '../components/CategoryCard'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Visit Mogadishu</h1>
          <p>Your guide to exploring Somalia's vibrant capital</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
          alt="Mogadishu coastline"
          className="hero-image"
        />
      </section>
      <section className="categories-section">
        <h2>Explore Mogadishu</h2>
        <CategoryCard />
      </section>
    </main>
  )
}
