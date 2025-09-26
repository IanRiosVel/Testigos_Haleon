import Tradicional from "../components/Tracional_media";
import Error from "../components/Errorpage";
const marcas_tradicionales = [
    {nombre: "Vick 44",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16467267&sptid=16467267&matype=VIDEO&key=B62637FDA0D429FD2E0D5BF654A91D10.mp4", inicio_programa: "Fecha de transmisión: 07 de Septiembre 2025",
    genero:"Genero de programa: Comedia, Concursos, Deportes, Dibujos animados, Documentales, Espectaculos, Noticias, Peliculas, Reality Show, Revista, Series, Talk Show, Telenovela", canal: "Canal: Azteca Uno, Azteca 7, Canal 5, Las Estrellas, Cinemax, Discovery Channel, El nu9ve, Fox Sports, FX, Golden, Golden Edge, Multimedios, Space, Star Channel, TL Novelas, TNT,TUDN, Univeral TV, Warner",
    tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 20 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"},

{nombre: "Tukol - Tukol Miel",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16458708&sptid=16458708&matype=VIDEO&key=2DEDC16BF58AC9625F336AE997A3D0EA.mp4", inicio_programa: "Fecha de transmisión: 08 de Septiembre 2025",
    genero:"Genero de programa: Comedia, Concursos, Deportes, Dibujos animados, Documentales, Espectaculos, Noticias, Peliculas, Reality Show, Revista, Series, Talk Show, Telenovela", canal: "Canal: Azteca Uno, Azteca 7, Canal 5, Las Estrellas, Cinemax, Discovery Channel, El nu9ve, Fox Sports, FX, Golden, Golden Edge, Multimedios, Space, Star Channel, TL Novelas, TNT,TUDN, Univeral TV, Warner",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 20 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"},

{nombre: "Vick 44",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16467267&sptid=16467267&matype=VIDEO&key=B62637FDA0D429FD2E0D5BF654A91D10.mp4", inicio_programa: "Fecha de transmisión: 07 de Septiembre 2025",
    genero:"Genero de programa: Comedia, Concursos, Deportes, Dibujos animados, Documentales, Espectaculos, Noticias, Peliculas, Reality Show, Revista, Series, Talk Show, Telenovela", canal: "Canal: Azteca Uno, Azteca 7, Canal 5, Las Estrellas, Cinemax, Discovery Channel, El nu9ve, Fox Sports, FX, Golden, Golden Edge, Multimedios, Space, Star Channel, TL Novelas, TNT,TUDN, Univeral TV, Warner",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 20 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"},

{nombre: "Vick 44",video: "https://auditsa.com.mx/TestigosHandler/TestigosMasterHandler.ashx?hitid=16467267&sptid=16467267&matype=VIDEO&key=B62637FDA0D429FD2E0D5BF654A91D10.mp4", inicio_programa: "Fecha de transmisión: 07 de Septiembre 2025",
    genero:"Genero de programa: Comedia, Concursos, Deportes, Dibujos animados, Documentales, Espectaculos, Noticias, Peliculas, Reality Show, Revista, Series, Talk Show, Telenovela", canal: "Canal: Azteca Uno, Azteca 7, Canal 5, Las Estrellas, Cinemax, Discovery Channel, El nu9ve, Fox Sports, FX, Golden, Golden Edge, Multimedios, Space, Star Channel, TL Novelas, TNT,TUDN, Univeral TV, Warner",
tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 20 segundos",franja:"Franja: Morning, Afternoon, Over Night, Prime time",programa:"Programa: --"},


   ];

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
