import { Link } from "react-router-dom";
import "./Nosotros.css"

function Nosotros(){

    return(
        <div className="contenedorNostros">
            <h2>Quienes somos?</h2>
            <section>
                <article className="articuloNosotros">
                    Somo estudiantes <span className="textoNosotros">modalidad onLine de la Diplomatura Full Stack</span>, turno noche, disctada por la UTN Facultad regional de Buenos Aires.
                    Estamos instruidos por Yanel Ricarte (Teoria) y Veronica Bravo (Practica).
                    Y en esta instacia te mostramos un proyecto con lo que aprendimo de React Vite, aplicando CSS responsive, Js, y la libreria de React.
                    Tambien vimos Gridd, Flex, HTML, POO con JS, Cosumimos Apis y etc.
                </article>
                <img className="imgNosotros" src="src\Components\imagenes\FullStack_UTN\utn.png" alt="UTB BA" />
            </section>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Nosotros