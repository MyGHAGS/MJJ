type Section = 'home' | 'historia' | 'discos' | 'videos' | 'novedades'
import './Landing.css'
import historyStatue from '../images/history-statue.webp'

interface LandingProps {
  onNavigate: (section: Section) => void
}

function Landing({ onNavigate }: LandingProps) {
  const scrollToSection = (section: Section) => {
    onNavigate(section)
  }

  return (
    <section className="landing">
      <div className="hero-content">
        <h1 className="title">Michael Jackson</h1>
        <p className="subtitle">The King of Pop</p>
      </div>
      <div className="statue-container">
        <img 
          src={historyStatue}
          alt="Estatua HIStory de Michael Jackson"
          className="statue-image"
        />
      </div>
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="sparkle" style={{ '--delay': `${i * 0.5}s` } as React.CSSProperties}></div>
        ))}
      </div>
      <div className="quick-links">
        <button onClick={() => scrollToSection('historia')} className="quick-link">
          <span>Su Historia</span>
        </button>
        <button onClick={() => scrollToSection('discos')} className="quick-link">
          <span>Discografía</span>
        </button>
        <button onClick={() => scrollToSection('videos')} className="quick-link">
          <span>Videos</span>
        </button>
        <button onClick={() => scrollToSection('novedades')} className="quick-link">
          <span>Novedades</span>
        </button>
      </div>
    </section>
  )
}

export default Landing