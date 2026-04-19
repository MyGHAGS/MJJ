import './Videos.css'

interface Video {
  title: string
  year: number
  album: string
  youtubeId: string
}

const albumsWithVideos: { name: string; year: number; videos: Video[] }[] = [
  {
    name: 'Off the Wall',
    year: 1979,
    videos: [
      { title: "Don't Stop 'Til You Get Enough", year: 1979, album: 'Off the Wall', youtubeId: 'yURRmWtbTbo' },
      { title: 'Rock With You', year: 1979, album: 'Off the Wall', youtubeId: '5X-Mrc2l1d0' },
      { title: "She's Out of My Life", year: 1979, album: 'Off the Wall', youtubeId: '6DQJPL9Yuq0' },
    ]
  },
  {
    name: 'Thriller',
    year: 1982,
    videos: [
      { title: "Wanna Be Startin' Somethin'", year: 1983, album: 'Thriller', youtubeId: 'DsJlttdkybk' },
      { title: 'Billie Jean', year: 1983, album: 'Thriller', youtubeId: 'Zi_XLOBDo_Y' },
      { title: 'Beat It', year: 1983, album: 'Thriller', youtubeId: 'oRdxUFDoQe0' },
      { title: 'Thriller', year: 1983, album: 'Thriller', youtubeId: 'sOnqjkJTMaA' },
    ]
  },
{
    name: 'Bad',
    year: 1987,
    videos: [
      { title: 'Bad', year: 1987, album: 'Bad', youtubeId: 'dsUXAEzaC3Q' },
      { title: 'The Way You Make Me Feel', year: 1988, album: 'Bad', youtubeId: 'HzZ_urpj4As' },
      { title: 'Speed Demon', year: 1988, album: 'Bad', youtubeId: 'l039y9FaIjc' },
      { title: 'Liberian Girl', year: 1988, album: 'Bad', youtubeId: 'f3V-7DEAgdc' },
      { title: 'Another Part of Me', year: 1988, album: 'Bad', youtubeId: '8vwHQNQ88cM' },
      { title: 'Man in the Mirror', year: 1988, album: 'Bad', youtubeId: 'PivWY9wn5ps' },
      { title: "I Just Can't Stop Loving You", year: 1987, album: 'Bad', youtubeId: 'PHZ1Bii7Uwk' },
      { title: 'Dirty Diana', year: 1988, album: 'Bad', youtubeId: 'yUi_S6YWjZw' },
      { title: 'Smooth Criminal', year: 1988, album: 'Bad', youtubeId: 'h_D3VFfhvs4' },
      { title: 'Leave Me Alone', year: 1989, album: 'Bad', youtubeId: 'crbFmpezO4A' },
    ]
  },
  {
    name: 'Dangerous',
    year: 1991,
    videos: [
      { title: 'Jam', year: 1992, album: 'Dangerous', youtubeId: 'JbHI1yI1Ndk' },
      { title: 'In the Closet', year: 1992, album: 'Dangerous', youtubeId: '4qLY0vbrT8Q' },
      { title: 'Remember the Time', year: 1992, album: 'Dangerous', youtubeId: 'LeiFF0gvqcc' },
      { title: 'Heal the World', year: 1991, album: 'Dangerous', youtubeId: 'BWf-eARnf6U' },
      { title: 'Black or White', year: 1991, album: 'Dangerous', youtubeId: 'F2AitTPI5U0' },
      { title: 'Who Is It', year: 1992, album: 'Dangerous', youtubeId: 'PfrV_6yWbEg' },
      { title: 'Give In to Me', year: 1992, album: 'Dangerous', youtubeId: 'LJ7qXHjxj_0' },
      { title: 'Will You Be There', year: 1993, album: 'Dangerous', youtubeId: 'jQY_QL_wvQU' },
      { title: 'Gone Too Soon', year: 1993, album: 'Dangerous', youtubeId: 'IcNamirwTaY' },
    ]
  },
  {
    name: 'HIStory',
    year: 1995,
    videos: [
      { title: 'Scream', year: 1995, album: 'HIStory', youtubeId: '0P4A1K4lXDo' },
      { title: "They Don't Care About Us", year: 1996, album: 'HIStory', youtubeId: 'QNJL6nfu__Q' },
      { title: "They Don't Care About Us (2020 version)", year: 1996, album: 'HIStory', youtubeId: 'PoEa9bzeTu0' },
      { title: 'Stranger in Moscow', year: 1996, album: 'HIStory', youtubeId: 'pEEMi2j6lYE' },
      { title: 'Earth Song', year: 1995, album: 'HIStory', youtubeId: 'XAi3VTSdTxU' },      
      { title: 'You Are Not Alone', year: 1995, album: 'HIStory', youtubeId: 'pAyKJAtDNCw' },
      { title: 'Childhood', year: 1995, album: 'HIStory', youtubeId: 'puQEcN_iI9o' },      
      { title: '2 Bad', year: 1996, album: 'HIStory', youtubeId: 'SeCeCcIN_TU' },
    ]
  },
  {
    name: 'Blood on the Dance Floor',
    year: 1997,
    videos: [
      { title: 'Blood on the Dance Floor', year: 1997, album: 'Blood on the Dance Floor', youtubeId: 'c3_NntYhzV4' },
      { title: 'Blood on the Dance Floor (2017 version)', year: 1997, album: 'Blood on the Dance Floor', youtubeId: 'rDKjb2VhLqg' },
      { title: 'Ghosts', year: 1997, album: 'Blood on the Dance Floor', youtubeId: 'Xh9Cp4rd7mI' },
    ]
  },
  {
    name: 'Invincible',
    year: 2001,
    videos: [
      { title: 'You Rock My World', year: 2001, album: 'Invincible', youtubeId: '1-7ABIM2qjU' },
      { title: 'Cry', year: 2001, album: 'Invincible', youtubeId: 'mj3MfUR35CM' },
    ]
  },
  {
    name: 'Michael',
    year: 2008,
    videos: [
      { title: 'Hold My Hand', year: 2008, album: 'Michael', youtubeId: '-oCCnxBos10' },
      { title: 'Hollywood Tonight', year: 2010, album: 'Michael', youtubeId: 'zjGtTUfPcI4' },
      { title: 'Behind The Mask', year: 2010, album: 'Michael', youtubeId: '5bOkWTprifg' },
    ]
  },
  {
    name: 'XSCAPE',
    year: 2014,
    videos: [
      { title: 'Love Never Felt So Good', year: 2014, album: 'XSCAPE', youtubeId: 'oG08ukJPtR8' },
      { title: 'Love Never Felt So Good (Solo Version)', year: 2014, album: 'XSCAPE', youtubeId: 'GJDdBbgJafU' },
      { title: 'Slave to the Rhythm', year: 2014, album: 'XSCAPE', youtubeId: 'jDRTghGZ7XU' },
      { title: 'A Place With No Name', year: 2014, album: 'XSCAPE', youtubeId: 'YlJvMU-5NyA' },
    ]
  },
  {
    name: 'Scream',
    year: 2018,
    videos: [
      { title: 'Blood On The Dance Floor X Dangerous (The White Panda Mash-Up)', year: 2018, album: 'Scream', youtubeId: 'CNwYcyRAl1Y' },
    ]
  },
]

function Videos() {
  const openVideo = (video: Video) => {
    if (video.youtubeId === 'search') {
      const searchQuery = encodeURIComponent(`${video.title} Michael Jackson official video`)
      window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, '_blank')
    } else {
      window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_blank')
    }
  }

  return (
    <section className="videos">
      <div className="videos-header">
        <h1>Videos</h1>
        <p>Videos musicales organizados por album</p>
      </div>
      
      <div className="albums-section">
        {albumsWithVideos.map((album, albumIndex) => (
          <div key={albumIndex} className="album-group">
            <div className="album-header">
              <h2>{album.name}</h2>
              <span className="album-year">{album.year}</span>
            </div>
            <div className="videos-grid">
              {album.videos.map((video, videoIndex) => (
                <div 
                  key={videoIndex} 
                  className="video-card" 
                  onClick={() => openVideo(video)}
                >
                  <div 
                    className="video-thumbnail"
                    style={video.youtubeId !== 'search' ? {
                      backgroundImage: `url(https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg)`
                    } : undefined}
                  >
                    {video.youtubeId === 'search' && <span className="video-play">🔍</span>}
                    {video.youtubeId !== 'search' && <span className="video-play">▶</span>}
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                    <span className="video-year">{video.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Videos