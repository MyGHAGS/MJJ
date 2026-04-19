import './Historia.css'

const timelineEvents = [
  { year: 1958, title: 'Nacimiento', description: 'Nacido el 29 de agosto en Gary, Indiana. El octavo de diez hermanos.' },
  { year: 1964, title: 'Primeras Actuaciones', description: 'Michael y sus hermanos comienzan a tocar en locales de su ciudad natal.' },
  { year: 1966, title: 'The Jackson 5', description: 'El grupo adopta el nombre The Jackson 5. Inician giras por Estados Unidos.' },
  { year: 1970, title: 'I Want You Back', description: 'Lanzan "I Want You Back", su primer #1 en Billboard. Inician una racha de 4 éxitos consecutivos.' },
  { year: 1975, title: 'Farewell Tour', description: 'Última gira con The Jackson 5 antes de que Michael iniciara su carrera en solitario.' },
  { year: 1979, title: 'Off The Wall', description: 'Lanzamiento de "Off The Wall", su primer álbum en solitario. Un éxito rotundo.' },
  { year: 1982, title: 'Thriller', description: 'Lanza "Thriller", el álbum más vendido de la historia. Recibe 8 premios Grammy.' },
  { year: 1984, title: 'Motown 25', description: 'Actuación histórica en el Especial de Motown 25. Introduce el Moonwalk.' },
  { year: 1987, title: 'Bad', description: 'Lanza "Bad", su tercer álbum consecutivo en alcanzar #1. Inicia la gira Bad World Tour.' },
  { year: 1991, title: 'Dangerous', description: 'Lanza "Dangerous", el álbum más exitoso de los 90s. Gira mundial por 3 años.' },
  { year: 1993, title: 'Premios Grammy', description: 'Gana 8 Grammy en una sola noche, récord absoluto.' },
  { year: 1995, title: 'HIStory', description: 'Lanza "HIStory" con el single "Scream". Doble álbum.' },
  { year: 2001, title: 'Invincible', description: 'Lanza "Invincible", su último álbum de estudio.' },
  { year: 2005, title: 'Trial', description: 'Absuelto de todos los cargos en el juicio. Regresa a los escenarios.' },
  { year: 2009, title: 'This Is It', description: 'Anuncia su regreso a los escenarios con 50 conciertos en Londres.' },
  { year: 2009, title: 'Fallecimiento', description: 'El 25 de junio, Michael Jackson muere a los 50 años. El mundo pierde a una leyenda.' },
]

function Historia() {
  return (
    <section className="historia">
      <div className="historia-header">
        <h1>Su Historia</h1>
        <p>Una vida llena de música y magia</p>
      </div>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <span className="year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Historia