
// import Bexident from "../assets/Digital/bexident.mp4";
// import arm_hammer from "../assets/Tradicional/arm_hammer.mp4";
// import colgate from "../assets/Tradicional/colgate_total.mp4";
import Tradicional from "../components/Tracional_media";
import Error from "../components/Errorpage";
const marcas_tradicionales = [
    {nombre: "Arm & Hammer",video: "https://i.postimg.cc/7Zgyxv8b/haleon.png", inicio_programa: "Fecha de transmisión: 20 de Julio 2025",
    genero:"Genero de programa: Entretenimiento", canal: "Canal: Azteca Uno",
tipo_spot: "Tipo de Spot: Mención", duracion: "Duración: 20 segundos",franja:"Franja: Prime",programa:"Programa: La Resolana con el Capi Pérez"},

    {nombre: "Colgate",video: "https://i.postimg.cc/7Zgyxv8b/haleon.png", inicio_programa: "Fecha de transmisión: 1 de Agosto 2025",
    genero:"Genero de programa: Comedia, Concursos, Deportes, Dibujos animados, Documentales, Espectaculos, Noticias, Peliculas, Reality Show, Revista, Series, Talk Show, Telenovela", canal: "Canal: Azteca Uno, Azteca 7, Canal 5, Las Estrellas, Imagen Televeisión",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 30 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"}
];

const marcas_digitales = [{nombre:"Bexident",video: "https://i.postimg.cc/7Zgyxv8b/haleon.png",fecha:"TBD",valorizacion: "💲​Valoración: $364.187",impresiones: "Impresiones: 4.787.508",social:"Social media: 69.80%",movil:"📱Movil:29.50%",escritorio:"🖥️ Escritorio:0.69%"}
];

export default function Oral_health() {

    if (marcas_tradicionales.length === 0 && marcas_digitales.length === 0) {
        return <Error />;
    }
    else {
    return (
        <Tradicional
        titulo = {"DENTIFRICOS"}
        tradicional={marcas_tradicionales}
        digital={marcas_digitales}
        />
    );
    }
}
