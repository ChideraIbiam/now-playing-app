import { useState } from 'react'
import { songs as initialSongs } from '../data/songs'
import { useTheme } from '../context/ThemeContext'
import SongCard from './SongCard'
import ConfirmModal from './ConfirmModal'
import './Playlist.css'

function Playlist() {
  const { theme } = useTheme()
  const [songs, setSongs] = useState(initialSongs)
  const [songToDelete, setSongToDelete] = useState<number | null>(null)
  const [currentYoutubeId, setCurrentYoutubeId] = useState<string | null>(null)

  const handleRemove = (id: number) => {
    setSongToDelete(id)
  }

  const handleConfirm = () => {
    setSongs((prev) => prev.filter((s) => s.id !== songToDelete))
    setSongToDelete(null)
  }

  const handleCancel = () => {
    setSongToDelete(null)
  }

  const handleReload = () => {
    setSongs(initialSongs)
  }

  const handlePlay = (youtubeId: string) => {
    setCurrentYoutubeId(youtubeId)
  }

  return (
    <div className="playlist-wrapper">
      <h2 className={`playlist-heading ${theme}`}>🎶 Now Playing</h2>

      {currentYoutubeId && (
        <div className="player-wrapper">
          <iframe
            width="100%"
            height="200"
            src={`https://www.youtube.com/embed/${currentYoutubeId}?autoplay=1`}
            title="YouTube player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      )}

      {songs.length === 0 ? (
        <div className={`empty-state ${theme}`}>
          <p>The playlist is empty. Silence isn't always golden.</p>
          <button className="reload-btn" onClick={handleReload}>
            Reload Playlist
          </button>
        </div>
      ) : (
        <div className="playlist-list">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onRemove={handleRemove}
              onPlay={handlePlay}
            />
          ))}
        </div>
      )}

      {songToDelete !== null && (
        <ConfirmModal onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  )
}

export default Playlist