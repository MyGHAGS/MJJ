import { useState } from 'react'
import Landing from './components/Landing'
import Menu from './components/Menu'
import Historia from './components/Historia'
import Discos from './components/Discos'
import Videos from './components/Videos'
import News from './components/News'

type Section = 'home' | 'historia' | 'discos' | 'videos' | 'novedades'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<Section>('home')

  const handleNavigation = (section: Section) => {
    setActiveSection(section)
    setMenuOpen(false)
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'historia':
        return <Historia />
      case 'discos':
        return <Discos />
      case 'videos':
        return <Videos />
      case 'novedades':
        return <News />
      default:
        return <Landing onNavigate={handleNavigation} />
    }
  }

  return (
    <div className="app">
      <Menu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
        onNavigate={handleNavigation}
      />
      <button 
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {renderSection()}
    </div>
  )
}

export default App