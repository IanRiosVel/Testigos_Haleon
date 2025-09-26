import { useState } from "react";
import "../styles/Tracional_media.css";

export default function Multivitaminicos({ titulo, tradicional, digital }) {
  const [selectMedios, setSelectedButton] = useState(null);

  const handleSelect = (medios) => {
    setSelectedButton(medios);
  };

  const mostrarMarcas =
    selectMedios === "Medios Tradicionales"
      ? tradicional
      : selectMedios === "Medio Digital"
      ? digital
      : [];

  return (
    <>
      <title>{titulo}</title>
      <div>
        <section className="titulo-section">
          <h1 className="titulo">{titulo}</h1>
          <h3>Selecciona el tipo de medio para mostrar sus testigos</h3>
        </section>

        <div className="bottons">
          <ul>
            <li>
              <button
                className="bottons_trad"
                onClick={() => handleSelect("Medios Tradicionales")}
              >
                Medios Tradicionales
              </button>
            </li>
            <li>
              <button
                className="bottons_dig"
                onClick={() => handleSelect("Medio Digital")}
              >
                Medio Digital
              </button>
            </li>
          </ul>
        </div>

        <section key={selectMedios} className="marcas-container">
          {mostrarMarcas.map((marca, index) => (
            <div key={index} className="marca">
              <h2 className="marca-titulo">{marca.nombre}</h2>
              <video controls className="marca-video">
                <source src={marca.video} type="video/mp4" />
              </video>
              <div className="descripcion">
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
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
