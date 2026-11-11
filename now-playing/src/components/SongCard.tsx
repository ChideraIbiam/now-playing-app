import type { Song } from '../data/songs'
import { useTheme } from '../context/ThemeContext'
import './SongCard.css'

const genreColors: Record<string, string> = {
  'R&B': '#a78bfa',
  'Folk Pop': '#34d399',
  'Electronic': '#38bdf8',
  'Synth-Pop': '#f472b6',
  'Afrobeats': '#fb923c',
  'Pop': '#facc15',
}

interface SongCardProps {
  song: Song
  onRemove: (id: number) => void
  onPlay: (spotifyId: string) => void
}

function SongCard({ song, onRemove, onPlay }: SongCardProps) {
  const { theme } = useTheme()
  const accentColor = genreColors[song.genre] || '#ffffff'

  return (
    <div
      className={`song-card ${theme}`}
      style={{ borderLeftColor: accentColor }}
      onClick={() => onPlay(song.spotifyId)}
    >
      <span className="track-number">{song.trackNumber}</span>
      <div className="song-info">
        <h3 className="song-title">{song.title}</h3>
        <p className="song-artist">{song.artist}</p>
      </div>
      <span className="song-genre" style={{ backgroundColor: accentColor }}>
        {song.genre}
      </span>
      <span className="song-duration">{song.duration}</span>
      <button
        className={`remove-btn ${theme}`}
        onClick={(e) => {
          e.stopPropagation()
          onRemove(song.id)
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default SongCard