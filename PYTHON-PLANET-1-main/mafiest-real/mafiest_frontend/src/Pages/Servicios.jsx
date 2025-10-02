import Menu from "../components/Menu"
const LibreriaRecursos = () => {
    return(
         <div>
              <Menu/>
            <h1 className='title'>Librería y Recursos</h1>
            <p className='popni'>Encuentra aquí diferentes tipos de libros y recursos de matemáticas para todos los niveles:</p>
            <ul className='x'>
                <li>Álgebra para principiantes</li>
                <li>Geometría visual</li>
                <li>Matemáticas recreativas</li>
                <li>Libros de cálculo</li>
                <li>Recopilaciones de ejercicios y problemas</li>
                <li>Guías de preparación para exámenes</li>
                <li>Recursos interactivos y multimedia</li>
            </ul>
            <p className='yu'>Todos los materiales están pensados para apoyar tu aprendizaje y ayudarte a avanzar a tu ritmo.</p>
        </div>
    )
}

export default LibreriaRecursos
