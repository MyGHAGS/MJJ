import { useState, useEffect } from 'react'
import './Discos.css'

import j5DianaRoss from '../images/discography/J5/Ross-presents-jackson-5-350.jpg'
import j5Abc from '../images/discography/J5/J5-abc.jpg'
import j5Third from '../images/discography/J5/J5-third-album.jpg'
import j5Maybe from '../images/discography/J5/J5-maybe-tomorrow.jpg'
import j5Christmas from '../images/discography/J5/Jackson5-ChristmasAlbum.jpg'
import j5Windows from '../images/discography/J5/J5-lookin-windows.jpg'
import j5Skywriter from '../images/discography/J5/J5-skywriter.jpg'
import j5Dancing from '../images/discography/J5/Dancingmachine1974.jpg'
import j5Violation from '../images/discography/J5/J5-moving-violation.jpg'

import soloGotToBeThere from '../images/discography/Solist/Mj1971-got-to-be-there.jpg'
import soloBen from '../images/discography/Solist/BenMichaelJackson.jpg'
import soloMusicMe from '../images/discography/Solist/Mjmusicandme.jpg'
import soloForever from '../images/discography/Solist/Forever,_Michael.png'
import soloOffWall from '../images/discography/Solist/off-the-wall.jpg'
import soloThriller from '../images/discography/Solist/thriller.png'
import soloBad from '../images/discography/Solist/Michael_Jackson_-_Bad.png'
import soloDangerous from '../images/discography/Solist/Michaeljacksondangerous.jpg'
import soloHistory from '../images/discography/Solist/MJ-HIStory.jpg'
import soloInvincible from '../images/discography/Solist/Mjinvincible.jpg'
import soloMichael from '../images/discography/Solist/Michaelalbumcover.jpg'
import soloXscape from '../images/discography/Solist/Xscape.png'
import soloXscapeDeluxe from '../images/discography/Solist/Xscape_Deluxe_.jpg'

interface Track {
  title: string
  artist?: string
}

interface Album {
  year: number
  title: string
  cover: string
  description: string
  sales: string
  tracks: Track[]
}

const makeYTMusicLink = (track: Track, artistName: string): string => {
  const query = encodeURIComponent(`${track.title} ${artistName}`)
  return `https://music.youtube.com/search?q=${query}`
}

const jackson5Albums: Album[] = [
  { year: 1970, title: 'Diana Ross Presents The Jackson 5', cover: j5DianaRoss, description: 'El album debut de The Jackson 5 con Motown, produzido por Berry Gordy.', sales: '20 millones', tracks: [{title: 'I Want You Back'}, {title: 'ABC'}, {title: 'The Love You Save'}, {title: 'Ill Be There'}, {title: 'You Have Done'}, {title: 'Mamas Pearl'}, {title: 'The Straight Talk'}, {title: 'Can You Feel It'}, {title: 'Never Can Say Goodbye'}, {title: 'Ill Be There'}] },
  { year: 1970, title: 'ABC', cover: j5Abc, description: 'Segundo album de The Jackson 5.', sales: '8 millones', tracks: [{title: 'ABC'}, {title: 'The Love You Save'}, {title: 'I Need You'}, {title: 'You Are My Sunshine'}, {title: 'My Girl'}, {title: 'Want You Back'}, {title: 'Dancing With Someone'}, {title: 'I Found That Love'}, {title: 'Look Through Your Window'}, {title: 'Please Mr. Postman'}] },
  { year: 1970, title: 'The Jackson 5 Third Album', cover: j5Third, description: 'Tercer album de estudio.', sales: '5 millones', tracks: [{title: 'Ill Be There'}, {title: 'One More Chance'}, {title: 'The Glow of Love'}, {title: 'Never Can Say Goodbye'}, {title: 'Mamas Pearl'}, {title: 'If I Were A Carpenter'}, {title: 'I Lets Be Here Forever'}, {title: 'Through Thick and Thin'}, {title: 'Ill Try'}] },
  { year: 1971, title: 'Maybe Tomorrow', cover: j5Maybe, description: 'Album con baladas emotionantes.', sales: '4 millones', tracks: [{title: 'Maybe Tomorrow'}, {title: 'Never Can Say Goodbye'}, {title: 'You Are My Sunshine'}, {title: 'Bridge Over Troubled Water'}, {title: 'You Have Done'}, {title: 'All Latest Things'}, {title: 'Put Your Arms Around'}, {title: 'The World Are Right'}, {title: 'Check Yourself'}, {title: 'We Need Love'}] },
  { year: 1971, title: 'Jackson 5 Christmas Album', cover: j5Christmas, description: 'Album de Navidad.', sales: '3 millones', tracks: [{title: 'Give Love on Christmas Day'}, {title: 'Santa Claus Is Coming to Town'}, {title: 'Frosty the Snowman'}, {title: 'The Little Drummer Boy'}, {title: 'I Saw Mommy Kissing Santa Claus'}, {title: 'Up On the House Top'}, {title: 'Christmas Time Is Here'}, {title: 'Silent Night'}, {title: 'Holly Jolly Christmas'}, {title: 'Little Town of Bethlehem'}] },
  { year: 1972, title: 'Lookin Through the Windows', cover: j5Windows, description: 'Album de 1972.', sales: '3 millones', tracks: [{title: 'Lookin Through the Windows'}, {title: 'Doctor My Eyes'}, {title: 'Ain Nothing Like Real Thing'}, {title: 'We Do It On Purpose'}, {title: 'Love Is the Answer'}, {title: 'Through Thick and Thin'}, {title: 'If I Were A Carpenter'}, {title: 'I Can See Love'}, {title: 'Blessed'}, {title: 'Do You Love Me'}] },
  { year: 1973, title: 'Skywriter', cover: j5Skywriter, description: 'Album con influencias de funk y soul.', sales: '2 millones', tracks: [{title: 'Skywriter'}, {title: 'We Need Love'}, {title: 'Hallelujah Day'}, {title: 'It All Started With Love'}, {title: 'You Made Me Love You'}, {title: 'The Girl Is Here'}, {title: 'Happy Love'}, {title: 'All I Got'}, {title: 'I Am Someone'}] },
  { year: 1974, title: 'Dancing Machine', cover: j5Dancing, description: 'Album que introduce el sonido disco.', sales: '3 millones', tracks: [{title: 'Dancing Machine'}, {title: 'The Life I Live'}, {title: 'Honey Love'}, {title: 'I Am Love'}, {title: 'Time to Say Goodbye'}, {title: 'Just a Little Bit Closer'}, {title: 'Im So Happy'}, {title: 'Forever Came Today'}, {title: 'If the Love Were'}, {title: 'You Are the Sunshine'}] },
  { year: 1975, title: 'Moving Violation', cover: j5Violation, description: 'Ultimo album con Motown.', sales: '2 millones', tracks: [{title: 'Moving Violation'}, {title: 'Baby I Need Love'}, {title: 'We Need Your Love'}, {title: 'I Could Never Love Another'}, {title: 'Time Waits for No One'}, {title: 'Girl Youre So Together'}, {title: 'The Joy We All Found'}, {title: 'I Can Only Imagine'}, {title: 'Right Here'}, {title: 'Call Me Up'}] },
]

const soloAlbums: Album[] = [
  { year: 1972, title: 'Got to Be There', cover: soloGotToBeThere, description: 'Album debut en solitario.', sales: '2 millones', tracks: [{title: 'Aint No Sunshine'}, {title: 'I Wanna Be Where You Are'}, {title: 'Girl Dont Take Your Love from Me'}, {title: 'In Our Small Way'}, {title: 'Got to Be There'}, {title: 'Rockin Robin'}, {title: 'Wings of My Love'}, {title: 'Maria'}, {title: 'Love Is Here'}, {title: 'Youve Got a Friend'}] },
  { year: 1972, title: 'Ben', cover: soloBen, description: 'Segundo album en solitario.', sales: '5 millones', tracks: [{title: 'Ben'}, {title: 'Greatest Show on Earth'}, {title: 'People Make the World Go Round'}, {title: 'Weve Got a Good Thing Going'}, {title: 'Everybodys Somebody Fool'}, {title: 'My Girl'}, {title: 'What Goes Around Comes Around'}, {title: 'In Our Small Way'}, {title: 'Shoo-Be-Doo-Be-Doo-Da-Day'}, {title: 'You Can Cry on My Shoulder'}] },
  { year: 1973, title: 'Music and Me', cover: soloMusicMe, description: 'Album introspectivo.', sales: '1 millon', tracks: [{title: 'With a Childs Heart'}, {title: 'Up Again'}, {title: 'All the Things You Are'}, {title: 'Happy'}, {title: 'Too Young'}, {title: 'Doggin Around'}, {title: 'Euphoria'}, {title: 'Morning Glow'}, {title: 'Johnny Raven'}, {title: 'Music and Me'}] },
  { year: 1975, title: 'Forever Michael', cover: soloForever, description: 'Ultimo album con Motown.', sales: '1 millon', tracks: [{title: 'Were Almost There'}, {title: 'Take Me Back'}, {title: 'One Day in Your Life'}, {title: 'Cinderella Stay Awhile'}, {title: 'Weve Got Forever'}, {title: 'Just a Little Bit of You'}, {title: 'You Are There'}, {title: 'Dapper Dan'}, {title: 'Dear Michael'}, {title: 'Ill Come Home to You'}] },
  { year: 1979, title: 'Off the Wall', cover: soloOffWall, description: 'Album produzido por Quincy Jones.', sales: '30 millones', tracks: [{title: 'Dont Stop Til You Get Enough'}, {title: 'Rock With You'}, {title: 'Workin Day and Night'}, {title: 'Get on the Floor'}, {title: 'Off the Wall'}, {title: 'Girlfriend'}, {title: 'Shes Out of My Life'}, {title: 'I Cant Help It'}, {title: 'Its the Falling in Love'}, {title: 'Burn This Disco Out'}] },
  { year: 1982, title: 'Thriller', cover: soloThriller, description: 'El album mas vendido de la historia.', sales: '67 millones', tracks: [{title: 'Wanna Be Startin Somethin'}, {title: 'Baby Be Mine'}, {title: 'The Girl Is Mine'}, {title: 'Thriller'}, {title: 'Beat It'}, {title: 'Billie Jean'}, {title: 'Human Nature'}, {title: 'PYT'}, {title: 'The Lady In My Life'}] },
  { year: 1987, title: 'Bad', cover: soloBad, description: 'Tercer album con Quincy Jones.', sales: '43 millones', tracks: [{title: 'Bad'}, {title: 'The Way You Make Me Feel'}, {title: 'Speed Demon'}, {title: 'Liberian Girl'}, {title: 'Just Good Friends'}, {title: 'Another Part of Me'}, {title: 'Man in the Mirror'}, {title: 'I Just Cant Stop Loving You'}, {title: 'Dirty Diana'}, {title: 'Smooth Criminal'}, {title: 'Leave Me Alone'}] },
  { year: 1991, title: 'Dangerous', cover: soloDangerous, description: 'Album mas exitoso de los 90s.', sales: '32 millones', tracks: [{title: 'Jam'}, {title: 'Why You Wanna Trip on Me'}, {title: 'In the Closet'}, {title: 'She Drives Me Wild'}, {title: 'Remember the Time'}, {title: 'Cant Let Her Get Away'}, {title: 'Heal the World'}, {title: 'Black or White'}, {title: 'Who Is It'}, {title: 'Give In to Me'}, {title: 'Will You Be There'}, {title: 'Keep the Faith'}, {title: 'Gone Too Soon'}, {title: 'Dangerous'}] },
  { year: 1995, title: 'HIStory', cover: soloHistory, description: 'Doble album.', sales: '21 millones', tracks: [{title: 'Scream'}, {title: 'They Dont Care About Us'}, {title: 'Stranger in Moscow'}, {title: 'This Time Around'}, {title: 'Earth Song'}, {title: 'DS'}, {title: 'Money'}, {title: 'Come Together'}, {title: 'You Are Not Alone'}, {title: 'Childhood'}, {title: 'Tabloid Junkie'}, {title: '2 Bad'}, {title: 'HIStory'}, {title: 'Little Susie'}, {title: 'Smile'}] },
  { year: 2001, title: 'Invincible', cover: soloInvincible, description: 'Ultimo album de estudio.', sales: '13 millones', tracks: [{title: 'Unbreakable'}, {title: 'Heartbreaker'}, {title: 'Invincible'}, {title: 'Break of Dawn'}, {title: 'Heaven Can Wait'}, {title: 'You Rock My World'}, {title: 'Butterflies'}, {title: 'Speechless'}, {title: '2000 Watts'}, {title: 'You Are My Life'}, {title: 'Privacy'}, {title: 'Dont Walk Away'}, {title: 'Cry'}, {title: 'The Lost Children'}, {title: 'Whatever Happens'}, {title: 'Threatened'}] },
  { year: 2008, title: 'Michael', cover: soloMichael, description: 'Album posthumo.', sales: '2 millones', tracks: [{title: 'Hold My Hand'}, {title: 'Hollywood Tonight'}, {title: 'Keep Your Head Up'}, {title: '(I Like) The Way You Love Me'}, {title: 'Monster'}, {title: 'Best of Joy'}, {title: 'Breaking News'}, {title: '(I Cant Make It) Another Day'}, {title: 'Behind the Mask'}, {title: 'Much Too Soon'}] },
  { year: 2014, title: 'XSCAPE', cover: soloXscape, description: 'Album posthumo remasterizado.', sales: '500 mil', tracks: [{title: 'Love Never Felt So Good'}, {title: 'Chicago'}, {title: 'Loving You'}, {title: 'A Place With No Name'}, {title: 'Slave to the Rhythm'}, {title: 'Do You Know Where Your Children Are'}, {title: 'Blue Gangsta'}, {title: 'Xscape'}] },
  { year: 2014, title: 'XSCAPE Deluxe', cover: soloXscapeDeluxe, description: 'Version de lujo.', sales: '200 mil', tracks: [{title: 'Love Never Felt So Good'}, {title: 'Chicago'}, {title: 'Loving You'}, {title: 'A Place With No Name'}, {title: 'Slave to the Rhythm'}, {title: 'Do You Know Where Your Children Are'}, {title: 'Blue Gangsta'}, {title: 'Xscape'}, {title: 'Original Love Never Felt So Good'}, {title: 'Original Chicago'}, {title: 'Original Slave to the Rhythm'}, {title: 'Original Xscape'}] },
]

const artistMap: Record<string, string> = {
  'Diana Ross Presents The Jackson 5': 'Jackson 5',
  'ABC': 'Jackson 5',
  'The Jackson 5 Third Album': 'Jackson 5',
  'Maybe Tomorrow': 'Jackson 5',
  'Jackson 5 Christmas Album': 'Jackson 5',
  'Lookin Through the Windows': 'Jackson 5',
  'Skywriter': 'Jackson 5',
  'Dancing Machine': 'Jackson 5',
  'Moving Violation': 'Jackson 5',
}

const allSoloTracks = [
  'Aint No Sunshine', 'I Wanna Be Where You Are', 'Girl Dont Take Your Love from Me', 'In Our Small Way', 'Got to Be There', 'Rockin Robin', 'Wings of My Love', 'Maria', 'Love Is Here', 'Youve Got a Friend',
  'Ben', 'Greatest Show on Earth', 'People Make the World Go Round', 'Weve Got a Good Thing Going', 'Everybodys Somebody Fool', 'My Girl', 'What Goes Around Comes Around', 'Shoo-Be-Doo-Be-Doo-Da-Day', 'You Can Cry on My Shoulder',
  'With a Childs Heart', 'Up Again', 'All the Things You Are', 'Happy', 'Too Young', 'Doggin Around', 'Euphoria', 'Morning Glow', 'Johnny Raven', 'Music and Me',
  'Were Almost There', 'Take Me Back', 'One Day in Your Life', 'Cinderella Stay Awhile', 'Weve Got Forever', 'Just a Little Bit of You', 'You Are There', 'Dapper Dan', 'Dear Michael', 'Ill Come Home to You',
  'Dont Stop Til You Get Enough', 'Rock With You', 'Workin Day and Night', 'Get on the Floor', 'Off the Wall', 'Girlfriend', 'Shes Out of My Life', 'I Cant Help It', 'Its the Falling in Love', 'Burn This Disco Out',
  'Wanna Be Startin Somethin', 'Baby Be Mine', 'The Girl Is Mine', 'Thriller', 'Beat It', 'Billie Jean', 'Human Nature', 'PYT', 'The Lady In My Life',
  'Bad', 'The Way You Make Me Feel', 'Speed Demon', 'Liberian Girl', 'Just Good Friends', 'Another Part of Me', 'Man in the Mirror', 'I Just Cant Stop Loving You', 'Dirty Diana', 'Smooth Criminal', 'Leave Me Alone', 'Way You Make Me Feel',
  'Jam', 'Why You Wanna Trip on Me', 'In the Closet', 'She Drives Me Wild', 'Remember the Time', 'Cant Let Her Get Away', 'Heal the World', 'Black or White', 'Who Is It', 'Give In to Me', 'Will You Be There', 'Keep the Faith', 'Gone Too Soon', 'Dangerous', 'Midnight Cowboy',
  'Scream', 'They Dont Care About Us', 'Stranger in Moscow', 'This Time Around', 'Earth Song', 'DS', 'Money', 'Come Together', 'You Are Not Alone', 'Childhood', 'Tabloid Junkie', '2 Bad', 'HIStory', 'Little Susie', 'Smile', 'Free', 'On the Line',
  'Unbreakable', 'Heartbreaker', 'Invincible', 'Break of Dawn', 'Heaven Can Wait', 'You Rock My World', 'Butterflies', 'Speechless', '2000 Watts', 'You Are My Life', 'Privacy', 'Dont Walk Away', 'Cry', 'The Lost Children', 'Whatever Happens', 'Threatened',
  'Hold My Hand', 'Hollywood Tonight', 'Keep Your Head Up', '(I Like) The Way You Love Me', 'Monster', 'Best of Joy', 'Breaking News', '(I Cant Make It) Another Day', 'Behind the Mask', 'Much Too Soon', 'Love Never Felt So Good', 'I Just Cant Stop Loving You', 'Michael',
  'Love Never Felt So Good', 'Chicago', 'Loving You', 'A Place With No Name', 'Slave to the Rhythm', 'Do You Know Where Your Children Are', 'Blue Gangsta', 'Xscape',
  'Slave to the Rhythm', 'Chicago', 'Love Never Felt So Good',
]

interface RandomTrack {
  title: string
  index: number
}

function getRandomTracks(count: number): RandomTrack[] {
  const shuffled = [...allSoloTracks].sort(() => Math.random() - 0.5)
  const unique = [...new Set(shuffled)]
  return unique.slice(0, count).map((title, idx) => ({ title, index: idx + 1 }))
}

function AlbumModal({ album, onClose }: { album: Album; onClose: () => void }) {
  const openYouTubeMusic = (track: Track) => {
    const artistName = artistMap[album.title] || 'Michael Jackson'
    const url = makeYTMusicLink(track, artistName)
    window.open(url, '_blank')
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>x</button>
        <div className="modal-header">
          <img src={album.cover} alt={album.title} className="modal-cover" />
          <div className="modal-info">
            <h2 className="modal-title-text">{album.title}</h2>
            <span className="modal-year">{album.year}</span>
            <p className="modal-sales">Ventas: <strong>{album.sales}</strong></p>
          </div>
        </div>
        <div className="modal-description">
          <h3>Descripcion</h3>
          <p>{album.description}</p>
        </div>
        <div className="modal-tracks">
          <h3>Canciones ({album.tracks.length})</h3>
          <ul>
            {album.tracks.map((track, index) => (
              <li key={index} onClick={() => openYouTubeMusic(track)} className="track-item">
                <span className="track-number">{index + 1}</span>
                <span className="track-title">{track.title}</span>
                <span className="track-play">PLAY</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function AlbumCover({ album, onClick }: { album: Album; onClick: () => void }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="album-placeholder" onClick={onClick}>
        <span className="placeholder-year">{album.year}</span>
        <span className="placeholder-title">{album.title}</span>
      </div>
    )
  }

  return (
    <div className="album-cover" onClick={onClick}>
      <img 
        src={album.cover} 
        alt={album.title}
        onError={() => setError(true)}
      />
    </div>
  )
}

function RandomPlayer({ tracks, onClose }: { tracks: RandomTrack[]; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay || currentIndex >= tracks.length - 1) return

    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1)
    }, 180000)

    return () => clearTimeout(timer)
  }, [currentIndex, isAutoplay, tracks.length])

  useEffect(() => {
    if (tracks.length > 0 && isAutoplay && currentIndex === 0) {
      const firstTrack = tracks[0]
      const query = encodeURIComponent(`${firstTrack.title} Michael Jackson`)
      window.open(`https://music.youtube.com/search?q=${query}`, '_blank')
    }
  }, [tracks.length])

  const openTrack = (track: RandomTrack) => {
    const query = encodeURIComponent(`${track.title} Michael Jackson`)
    window.open(`https://music.youtube.com/search?q=${query}`, '_blank')
  }

  const currentTrack = tracks[currentIndex]

  return (
    <div className="random-player">
      <div className="random-header">
        <h2>🎲 Random Mix - 20 Tracks</h2>
        <button className="random-close" onClick={onClose}>✕</button>
      </div>
      <div className="random-display">
        <span className="random-number">{currentIndex + 1}/20</span>
        <h3 className="random-title">{currentTrack?.title || 'Cargando...'}</h3>
        <div className="random-progress">
          {tracks.map((_, idx) => (
            <div 
              key={idx} 
              className={`random-dot ${idx <= currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <p className="random-status">
          {isAutoplay ? '▶ Reproduciendo automáticamente (3 min por canción)...' : '⏸ Pausado'}
        </p>
        <div className="random-controls">
          <button 
            className="random-open-youtube"
            onClick={() => currentTrack && openTrack(currentTrack)}
          >
            ▶ Reproducir en YouTube Music
          </button>
          <button 
            className="random-autoplay-btn"
            onClick={() => setIsAutoplay(!isAutoplay)}
          >
            {isAutoplay ? '⏸ Pausar' : '▶ Play'}
          </button>
        </div>
      </div>
      <div className="random-list">
        {tracks.map((track, idx) => (
          <div 
            key={idx} 
            className={`random-track ${idx === currentIndex ? 'current' : ''}`}
            onClick={() => {
              setCurrentIndex(idx)
              openTrack(track)
            }}
          >
            <span className="random-track-num">{idx + 1}</span>
            <span className="random-track-title">{track.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Discos() {
  const [activeTab, setActiveTab] = useState<'j5' | 'solista' | 'random'>('j5')
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
  const [randomTracks, setRandomTracks] = useState<RandomTrack[]>([])

  const handleRandomTab = () => {
    setRandomTracks(getRandomTracks(20))
    setActiveTab('random')
  }

  return (
    <section className="discos">
      <div className="discos-header">
        <h1>Discos</h1>
        <p>La discografia completa</p>
      </div>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'j5' ? 'active' : ''}`}
          onClick={() => setActiveTab('j5')}
        >
          Jackson 5
        </button>
        <button 
          className={`tab ${activeTab === 'solista' ? 'active' : ''}`}
          onClick={() => setActiveTab('solista')}
        >
          Solista
        </button>
        <button 
          className={`tab ${activeTab === 'random' ? 'active' : ''}`}
          onClick={handleRandomTab}
        >
          🎲 Tracks Random
        </button>
      </div>

      <div className="albums-grid">
        {activeTab === 'random' ? (
          <div className="random-prompt">
            <h3>🎲 Reproduccion Aleatoria</h3>
            <p>20 canciones aleatorias de toda la carrera de Michael Jackson</p>
            <button className="random-start-btn" onClick={() => setRandomTracks(getRandomTracks(20))}>
              ▶ Comenzar Reproduccion
            </button>
          </div>
        ) : (activeTab === 'j5' ? jackson5Albums : soloAlbums).map((album, index) => (
          <div key={index} className="album-card">
            <AlbumCover 
              album={album} 
              onClick={() => setSelectedAlbum(album)} 
            />
            <div className="album-info">
              <h3>{album.title}</h3>
              <span className="year">{album.year}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedAlbum && (
        <AlbumModal 
          album={selectedAlbum} 
          onClose={() => setSelectedAlbum(null)} 
        />
      )}

      {randomTracks.length > 0 && (
        <RandomPlayer 
          tracks={randomTracks} 
          onClose={() => setRandomTracks([])} 
        />
      )}
    </section>
  )
}

export default Discos