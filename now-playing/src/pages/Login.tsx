import { useState } from 'react'
import toast from 'react-hot-toast'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!username || !password) {
      setError('Both fields are required to continue.')
      return
    }

    setError('')
    localStorage.setItem('isLoggedIn', 'true')
    toast.success(`Welcome back, ${username}!`, { duration: 2000 })
    setTimeout(() => {
      window.location.href = '/dashboard'
    }, 2000)
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">🎵 Now Playing</h1>
        <p className="login-subtitle">Sign in to access the playlist</p>

        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="login-error">{error}</p>}

        <button className="login-btn" onClick={handleSubmit}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Login