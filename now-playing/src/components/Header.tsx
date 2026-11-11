import { useTheme } from '../context/ThemeContext'
import './Header.css'

function Header() {
  const { theme, toggleTheme } = useTheme()

  const titleColor = theme === 'late-night' ? '#ffffff' : '#1e1b4b'
  const subtitleColor = theme === 'late-night' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)'

  return (
    <div className={`header ${theme}`}>
      <h1 style={{ color: titleColor, fontSize: '42px', fontWeight: 700 }}>
        🎵 Now Playing
      </h1>
      <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
        {theme === 'late-night' ? '☀️ Daylight' : '🌙 Late Night'}
      </button>
    </div>
  )
}

export default Header