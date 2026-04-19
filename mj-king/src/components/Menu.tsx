type Section = 'home' | 'historia' | 'discos' | 'videos' | 'novedades'
import './Menu.css'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (section: Section) => void
}

function Menu({ isOpen, onClose, onNavigate }: MenuProps) {
  const menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'historia', label: 'Su Historia' },
    { id: 'discos', label: 'Discos' },
    { id: 'videos', label: 'Videos' },
    { id: 'novedades', label: 'Novedades' },
  ] as const

  return (
    <>
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Menú</h2>
          <button className="menu-close" onClick={onClose} aria-label="Cerrar menú">
            ×
          </button>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                className="menu-item"
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="menu-footer">
          <p>M.J.</p>
        </div>
      </nav>
    </>
  )
}

export default Menu