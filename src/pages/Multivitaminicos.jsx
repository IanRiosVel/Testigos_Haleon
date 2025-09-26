//import neurobion from "../assets/Tradicional/neurobion.mp4";
//import neurodig from "../assets/Digital/neurobion_digital.mp4";
//import bedoyecta from "../assets/Digital/bedoyecta.mp4"

import Tradicional from "../components/Tracional_media";



const marcas_tradicionales = [
    {nombre: "Neurobión", video: "https://i.postimg.cc/7Zgyxv8b/haleon.png", inicio_programa: "Fecha de transmisión: 11 de Julio 2025",
    genero:"Genero de programa: Talk Show, Concursos, Revistas, Noticias, Deportes, Pelicula,Dibujos Animados, Series, Comedia, Telenovela, Unitarios, Reality Show", canal: "Canal: Azteca Uno, Azteca 7, Canal 5, Distrito Comedia, Warner, U, TNT,Telemundo, Sony, Las estrellas, Cinemax",
    tipo_spot: "Tipo de Spot: Spot Regular", duracion: "Duración: 10 y 20 segundos", franja:"Franja: Prime, Afternoon, Morning, Over Night", programa:"Programa: Acercate a Rocio, FSN, El chavo, Venga la alegria,TELEDIARIO NOCTURNO, Telediario Vespertino"}
];
//TODO crear para OOH, Print, Radio

const marcas_digitales = [
    {nombre: "Neurobión", video: "https://i.postimg.cc/7Zgyxv8b/haleon.png", fecha:"Fecha:5 julio a 21 julio", valorizacion: "💲​Valoración: $228.679", impresiones: "Impresiones: 3.696.600", social:"Social media: 14.22%", movil:"📱Movil:0%", escritorio:"🖥️ Escritorio:85.78%"}
,
{nombre: "Bedoyecta", video: "https://i.postimg.cc/7Zgyxv8b/haleon.png", fecha:"Fecha:10 junio -- vigente", valorizacion: "💲​Valoración: --", impresiones: "Impresiones: --", social:"Social media: --", movil:"📱Movil:--", escritorio:"🖥️ Escritorio:--"}];

    
export default function Multivitaminicos() {

    return (
        
        <Tradicional
        titulo = {"MULTIVITAMINICOS"}
        tradicional={marcas_tradicionales}
        digital={marcas_digitales}
        />
    );
        
}


