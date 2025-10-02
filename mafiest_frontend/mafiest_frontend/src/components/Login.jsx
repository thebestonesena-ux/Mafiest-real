import { useState } from 'react'
import loginService from '../services/login'
import { setToken as setTareasToken } from '../services/tareasService'
import './css/login.css'

const Login = ({ handleLogin: parentHandleLogin, username, setUsername, password, setPassword, message }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      // Usamos la función handleLogin que viene como prop
      await parentHandleLogin(event)
      
      setUsername('')
      setPassword('')

    } catch (error) {
      console.error('Error en login:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#fff' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', flexDirection: 'column', paddingTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#007bff', fontWeight: 'bold', marginBottom: '1rem' }}>mafiest</h1>
        <p style={{ maxWidth: 350, textAlign: 'center', color: '#333', fontSize: '1.1rem' }}>
          Plataforma de clases pregrabadas de matemáticas. Aprende a tu ritmo, accede a recursos y actividades diseñadas para tu progreso.
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
  <div style={{ width: '100%', maxWidth: 350, background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', borderRadius: 8, padding: '2rem' }}>
          <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
          {message && (
            <div className={`message ${message.type ? 'success' : 'error'}`}>
              {message.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={username}
                name="Username"
                placeholder="Usuario"
                onChange={({ target }) => setUsername(target.value)}
                disabled={loading}
                style={{ width: '100%', marginBottom: 10, padding: 8 }}
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                name="Password"
                placeholder="Contraseña"
                onChange={({ target }) => setPassword(target.value)}
                disabled={loading}
                style={{ width: '100%', marginBottom: 10, padding: 8 }}
              />
            </div>
            <button type="submit" disabled={loading} style={{ width: '100%', padding: 10, background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </form>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <a href="/RegistroIndependiente" style={{ color: '#007bff', textDecoration: 'underline' }}>
              ¿Eres independiente? Regístrate aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login