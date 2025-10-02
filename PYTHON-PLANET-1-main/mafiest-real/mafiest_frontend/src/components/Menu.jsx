import { Link, useLocation } from "react-router-dom";

const Menu = ({ user }) => {
  const location = useLocation();
  const hasRoleView = ["administrador", "usuario", "profesor"].includes(user?.Rol);

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', background: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', zIndex: 100, padding: '0.5rem 0' }}>
      <ul style={{ listStyle: 'none', padding: '0 2rem', margin: 0, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem', justifyContent: 'center' }}>
        <li><Link to="/PYTHON-PLANET" style={{ fontWeight: 'bold', color: '#007bff', fontSize: '1.1rem' }}>Inicio Sesión</Link></li>
        <li><Link to="/RegistroIndependiente" style={{ fontWeight: 'bold', color: '#007bff', fontSize: '1.1rem' }}>Registrarse</Link></li>
        {!hasRoleView && <li><Link to="/">Servicios</Link></li>}
        {user?.Rol === "administrador" && <li><Link to="/Crear">Crear Usuario</Link></li>}
        {user?.Rol === "usuario" && <li><Link to="/Tareas-ver">Tareas</Link></li>}
        {user?.Rol === "profesor" && <li><Link to="/Tareas">Tareas</Link></li>}
        {!hasRoleView && <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>}
        {!hasRoleView && <li><Link to="/contactanos">Contáctanos</Link></li>}
      </ul>
    </nav>
  );
};

export default Menu;
