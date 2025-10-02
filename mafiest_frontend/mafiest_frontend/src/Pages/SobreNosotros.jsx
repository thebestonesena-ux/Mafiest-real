import Menu from "../components/Menu";
const MafiestInfo = () => (
  <div>
      <Menu />
      <h1 className="title">Mafiest</h1>
      <ul>
        <p>
          <li className="popni">Bienvenido a Mafiest, la plataforma donde puedes aprender matemáticas con clases pregrabadas, recursos y actividades interactivas.</li>
        </p>
      </ul>
      <p>
        <li className="popni">Nuestro objetivo es que cada estudiante avance a su ritmo y logre dominar los conceptos clave de matemáticas.</li>
        <ul>
          <li className="popni">Clases grabadas por docentes expertos</li>
          <li className="popni">Materiales descargables y multimedia</li>
          <li className="popni">Actividades y ejercicios prácticos</li>
        </ul>
      </p>
      <br></br>
      <p className="popni">
        ¡Únete a Mafiest y transforma tu aprendizaje matemático!
      </p>
  </div>
);

export default MafiestInfo;