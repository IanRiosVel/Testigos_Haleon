import Tradicional from "../components/Tracional_media";
import Error from "../components/Errorpage";
// import dolo_neurobion from "../assets/Tradicional/dolo_neurobion.mp4"
// import alliviax from "../assets/Tradicional/Alliviax.mp4"
// import flanax from "../assets/Digital/flanax.mp4"
// import aspirina from "../assets/Digital/aspirina.mp4"
// import temprabanner from "../assets/Digital/tempra1.mp4"

const marcas_tradicionales = [ {nombre: "Dolo Neurobion",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16404940&sptid=16404940&matype=VIDEO&key=098A6F85CA0AA9A0C1D72A426C4C54C5.mp4", inicio_programa: "Fecha de transmisión: 1 de Agosto 2025",
    genero:"Genero de programa: Comedia, Concursos, Deportes, Dibujos animados, Documentales, Espectaculos, Noticias, Peliculas, Reality Show, Revista, Series, Talk Show, Telenovela", canal: "Canal: Azteca Uno, Azteca 7, Canal 5, Las Estrellas, Cinemax, Discovery Channel, El nu9ve, Fox Sports, FX, Golden, Golden Edge, Multimedios, Space, Star Channel, TL Novelas, TNT,TUDN, Univeral TV, Warner",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 20 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"},

{nombre: "Alliviax",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16414625&sptid=16414625&matype=VIDEO&key=B6AAEEECD47D71089B29D3A34DCE30AF.mp4", inicio_programa: "Fecha de transmisión: 7 de Agosto 2025",
    genero:"Genero de programa: Deportes, Dibujos Animados, Entretenimiento, Entrevista, Esoterico/Paranormal, Espectaculos, Noticias, Opinion, Pelicula, Noticias, Reality show, Revista, Series, Talk Show, Telenovela, Unitario", canal: "Canal: Azteca Uno, Azteca 7, Imagen Televisión, Multimedios",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 30 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"},

{nombre: "Alli-Triple",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16445587&sptid=16445587&matype=VIDEO&key=AF192858CD0265B243881EA183B5091C.mp4", inicio_programa: "Fecha de transmisión: 27 de Agosto 2025",
    genero:"Genero de programa: Deportes, Dibujos Animados, Entretenimiento, Entrevista, Esoterico/Paranormal, Espectaculos, Noticias, Opinion, Pelicula, Noticias, Reality show, Revista, Series, Talk Show, Telenovela, Unitario", canal: "Canal: Azteca Uno, Azteca 7, Imagen Televisión, Multimedios",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 20 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"}

,

{nombre: "Bio-Electro",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16458715&sptid=16458715&matype=VIDEO&key=779BCF534165BCB263A3BA4801C68BFB.mp4", inicio_programa: "Fecha de transmisión: 13 de Septiembre 2025",
    genero:"Genero de programa: Deportes, Dibujos Animados, Entretenimiento, Entrevista, Esoterico/Paranormal, Espectaculos, Noticias, Opinion, Pelicula, Noticias, Reality show, Revista, Series, Talk Show, Telenovela, Unitario", canal: "Canal: Azteca Uno, Azteca 7, Imagen Televisión, Multimedios",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 20 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"},


];



const marcas_digitales = [
    {nombre:"Flanax",video: "https://i.postimg.cc/7Zgyxv8b/haleon.png",fecha:"13 julio 2025",valorizacion: "💲​Valoración: $22.937",impresiones: "Impresiones: 925.802",social:"Social media: Meta 100%",movil:"📱Movil:0%",escritorio:"🖥️ Escritorio:100%"},

    {nombre:"Aspirina Go",video: "https://i.postimg.cc/7Zgyxv8b/haleon.png",fecha:"23 junio 2025 - 29 junio",valorizacion: "💲​Valoración: $226.147",impresiones: "Impresiones: 10.889.815",social:"Social media: Meta 100%",movil:"📱Movil:0%",escritorio:"🖥️ Escritorio:100%"},

    {nombre:"Tempra Fen",video: "https://i.postimg.cc/7Zgyxv8b/haleon.png",fecha:"1 mayo - 10 agosto 2025",valorizacion: "💲​Valoración: $63.346",impresiones: "Impresiones: 111.632",social:"Direct: 2.09%, Programmatic: 1.60%, Google: 96-32%",movil:"📱Movil: 86.21%",escritorio:"🖥️ Escritorio:13.79%"}

];
export default function Systematic() {

    if (marcas_tradicionales.length === 0 && marcas_digitales.length === 0) {
        return <Error />;
    }
    else {
    return (
        <Tradicional
        titulo = {"Pain Tabletas"}
        tradicional={marcas_tradicionales}
        digital={marcas_digitales}
        />
    );
    }
}
