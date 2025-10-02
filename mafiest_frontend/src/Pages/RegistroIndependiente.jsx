import React, { useState } from 'react';
import userService from '../services/userService';

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
      await userService.create(nuevoUsuario);
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
    <div className="registro-independiente">
      <h2>Registro Independiente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegistroIndependiente;
