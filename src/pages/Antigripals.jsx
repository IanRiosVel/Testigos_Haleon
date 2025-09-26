import Tradicional from "../components/Tracional_media";
import Error from "../components/Errorpage";
import sensisbit from "../assets/Tradicional/sensibitd.mp4"

const marcas_tradicionales = [ {nombre: "Sensibit",video: sensisbit, inicio_programa: "Fecha de transmisión: 1 de Julio 2025",
    genero:"Genero de programa: Comedia, Deportes, Noticias, Pelicula, Revista, Series, Unitarios",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 30 segundos",franja:"Franja: Morning, Over Night, Prime time",programa:"Programa: --"}];


const marcas_digitales = [];

export default function Oral_health() {

    if (marcas_tradicionales.length === 0 && marcas_digitales.length === 0) {
        return <Error />;
    }
    else {
    return (
        <Tradicional
        titulo = {"ANTIGRIPALES"}
        tradicional={marcas_tradicionales}
        digital={marcas_digitales}
        />
    );
    }
}
