import React, { useState } from 'react';
import userService from '../services/userService';
import Menu from '../components/Menu';

const RegistroIndependiente = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje('');
    try {
      const nuevoUsuario = {
        username,
        name,
        password,
        Rol: 'independiente',
      };
      await userService.createUser(nuevoUsuario);
      setMensaje('¡Registro exitoso!');
      setUsername('');
      setName('');
      setPassword('');
    } catch (error) {
      setMensaje('Error al registrar: ' + (error.response?.data?.error || error.message));
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#fff' }}>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <Menu user={null} />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', flexDirection: 'column', paddingTop: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#007bff', fontWeight: 'bold', marginBottom: '1rem' }}>mafiest</h1>
        <p style={{ maxWidth: 350, textAlign: 'center', color: '#333', fontSize: '1.1rem' }}>
          Plataforma de clases pregrabadas de matemáticas. Aprende a tu ritmo, accede a recursos y actividades diseñadas para tu progreso.
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
  <div style={{ width: '100%', maxWidth: 350, background: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', borderRadius: 8, padding: '2rem' }}>
          <h2 style={{ textAlign: 'center' }}>Registro Independiente</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Usuario:</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }} />
            </div>
            <div>
              <label>Nombre:</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }} />
            </div>
            <div>
              <label>Contraseña:</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', marginBottom: 10, padding: 8 }} />
            </div>
            <button type="submit" disabled={loading} style={{ width: '100%', padding: 10, background: '#007bff', color: '#fff', border: 'none', borderRadius: 4 }}>
              {loading ? 'Registrando...' : 'Registrarse'}
            </button>
          </form>
          {mensaje && <p style={{ textAlign: 'center', marginTop: 10 }}>{mensaje}</p>}
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <a href="/PYTHON-PLANET" style={{ color: '#007bff', textDecoration: 'underline' }}>
              ¿Ya tienes cuenta? Inicia sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroIndependiente;
