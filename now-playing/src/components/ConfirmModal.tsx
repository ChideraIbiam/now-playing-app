import ReactDOM from 'react-dom'
import { useTheme } from '../context/ThemeContext'
import './ConfirmModal.css'

interface ConfirmModalProps {
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmModal({ onConfirm, onCancel }: ConfirmModalProps) {
  const { theme } = useTheme()

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className={`modal-card ${theme}`}>
        <p className={`modal-message ${theme}`}>
          🎵 Pull this track from the vibe? <br /> Once it's gone, the playlist moves on without it.
        </p>
        <div className="modal-actions">
          <button className="modal-btn cancel" onClick={onCancel}>
            Keep It
          </button>
          <button className="modal-btn confirm" onClick={onConfirm}>
            Remove It
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal-root')!
  )
}

export default ConfirmModal