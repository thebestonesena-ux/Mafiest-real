import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibreriaRecursos from "../Pages/Servicios";
import Contactanos from "../Pages/Contactanos";
import MafiestInfo from "../Pages/SobreNosotros";
import Crear from "../Pages/Crear-usuarios";
import Tareas from "../Pages/Tareas";
import VerTareas from "../Pages/Ver-Tareas";
import Callme from "../Pages/Contactanos copy";
import RegistroIndependiente from "../Pages/RegistroIndependiente";

function AppRoutes({ user, setUser }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LibreriaRecursos user={user} />} />
        <Route path="/sobre-nosotros" element={<MafiestInfo user={user} />} />
  <Route path="/login" element={<Contactanos user={user} setUser={setUser} />} />
        <Route path="/Tareas" element={<Tareas user={user} />} />
        <Route path="/Tareas-ver" element={<VerTareas user={user} />} />
        <Route path="/Crear" element={<Crear user={user} />} />
        <Route path="/contactanos" element={<Callme />} />
        <Route path="/RegistroIndependiente" element={<RegistroIndependiente />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
