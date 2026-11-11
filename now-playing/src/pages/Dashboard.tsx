import { useTheme } from '../context/ThemeContext'
import Header from '../components/Header'
import Playlist from '../components/Playlist'

function Dashboard() {
  const { theme } = useTheme()

  return (
    <div style={{
      minHeight: '100vh',
      background: theme === 'late-night'
        ? 'linear-gradient(135deg, #0f0f0f, #1a1a2e, #16213e)'
        : 'linear-gradient(135deg, #e0e7ff, #c7d2fe, #a5b4fc)',
      transition: 'background 0.3s'
    }}>
      <Header />
      <Playlist />
    </div>
  )
}

export default Dashboard