import { useState } from "react";
import "../styles/Tracional_media.css";
export default function Multivitaminicos({titulo, tradicional, digital}) {

    const [selectMedios, setSelectedButton] = useState(null);
    const handleSelect = (medios) => {
    setSelectedButton(medios);
    }
    const mostrarMarcas = selectMedios === "Medios Tradicionales" ? tradicional : selectMedios === "Medio Digital" ? digital : [];
    return (
    <>
    <title>{titulo}</title>
    <div>
        <section style={{textAlign: 'center', margin: '20px', alignContent: 'center',alignItems: 'center'}}>
            <h1 style={{borderRadius:'10px',backgroundColor:'#186cee',color:'white', padding:'10px'}}>{titulo}</h1>
            <h3>Selecciona el tipo de medio para mostrar sus testigos</h3>
        </section>
        
        <div className="bottons">
            <ul>
                <li><button className="bottons_trad" onClick={()=> handleSelect("Medios Tradicionales")}>Medios Tradicionales</button></li>
                <li><button className="bottons_dig" onClick={()=> handleSelect("Medio Digital")}>Medio Digital </button></li>
            </ul>
        </div>
        
        <section key=  {selectMedios}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
            mostrarMarcas.map((marca, index) => (
                <div key={index} className="marca" style={{ textAlign: 'center', margin: '20px' }}>
                <h2 style={{alignItems:"center",backgroundColor:'#186cee',borderRadius:"15px", color:'white'}}>{marca.nombre}</h2>
                <video width="320" height="240" controls style={{borderRadius: '15px'}}>
                    <source src={marca.video} type="video/mp4" />
                </video>
                <div className="descripcion" style={{
                    marginTop: '10px',
                    marginBottom: '10px',
                    margin:'10px',
                    maxWidth: '320px',
                    backgroundColor: '#4fe0ed',
                    padding: '10px',
                    borderRadius: '15px',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    {selectMedios === "Medios Tradicionales" ? (
                    <>
                        <p>{marca.inicio_programa}</p>
                        <p>{marca.genero}</p>
                        <p>{marca.canal}</p>
                        <p>{marca.tipo_spot}</p>
                        <p>{marca.duracion}</p>
                        <p>{marca.franja}</p>
                        <p>{marca.programa}</p>
                    </>
                    ) : (
                    <>
                        <p>{marca.fecha}</p>
                        <p>{marca.valorizacion}</p>
                        <p>{marca.impresiones}</p>
                        <p>{marca.social}</p>
                        <p>{marca.movil}</p>
                        <p>{marca.escritorio}</p>
                    </>
                    )
                }
            </div>
            </div>
        )) 
    }
    </section>

    </div>
    </>
);
}
