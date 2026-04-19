import './News.css'

interface NewsItem {
  date: string
  title: string
  excerpt: string
  category: string
  link?: string
  linkText?: string
}

const news: NewsItem[] = [
  {
    date: '2026',
    title: 'MICHAEL - Película Biográfica',
    excerpt: 'La esperada biografía de Michael Jackson llega a cines en abril 2026. Jaafar Jackson (sobrino de Michael) interpreta al Rey del Pop. Dirigida por Antoine Fuqua.',
    category: 'Cine',
    link: 'https://www.youtube.com/watch?v=k-YAcjaLuSI',
    linkText: 'Ver Trailer'
  },
  {
    date: '2024',
    title: 'Michael Jackson: El musical',
    excerpt: 'La historia del Rey del Pop llega a Broadway con una producción que celebra su legado musical.',
    category: 'Eventos'
  },
  {
    date: '2024',
    title: '45 años de Thriller',
    excerpt: 'El álbum más vendido de la historia cumple 45 años siguen-do siendo un fenómeno musical.',
    category: 'Aniversarios'
  },
  {
    date: '2023',
    title: 'Nuevo documental sobre su vida',
    excerpt: 'Netflix lanza un nuevo documental con material nunca visto del artista.',
    category: 'Documentales'
  },
  {
    date: '2022',
    title: 'HIStory turns 30',
    excerpt: 'El álbum doble que marcó una era cumple tres décadas.',
    category: 'Aniversarios'
  },
  {
    date: '2021',
    title: 'Moonwalk: el baile que cambió todo',
    excerpt: 'Cómo el icónico baile de 1983 revolucionó la cultura pop.',
    category: 'Cultura'
  },
  {
    date: '2020',
    title: 'Premio Grammy póstumo',
    excerpt: 'Michael recibe un reconocimiento especial por su contribución a la música.',
    category: 'Premios'
  },
]

const handleLink = (item: NewsItem) => {
  if (item.link) {
    window.open(item.link, '_blank')
  }
}

function News() {
  return (
    <section className="news">
      <div className="news-header">
        <h1>Novedades</h1>
        <p>Actualidades sobre el Rey del Pop</p>
      </div>
      
      <div className="news-grid">
        {news.map((item, index) => (
          <article key={index} className="news-card">
            <span className="news-category">{item.category}</span>
            <span className="news-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            {item.link ? (
              <button className="read-more" onClick={() => handleLink(item)}>
                ▶ {item.linkText || 'Ver más'}
              </button>
            ) : (
              <button className="read-more">Leer más</button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default News