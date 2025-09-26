import { Link } from 'react-router-dom';
import { useState } from "react";
import "../styles/Home.css";


export default function Home() {
    const categorias = [
    { nombre: "Multivitamins", imagen:"https://i.postimg.cc/K8nyZXSz/centrum.png", pag: "/multivitaminicos" },
    { nombre: "Oral Health", imagen: "https://i.postimg.cc/vmbwTPbr/sensodyne.png", pag: "/oral_health" },
    { nombre: "Pain Topic", imagen: "https://i.postimg.cc/VNgQCjkR/voltaren.png", pag: "/topic" },
    { nombre: "Pain Systematic", imagen: "https://i.postimg.cc/13pZ9xh5/advil-mejoral.png", pag: "/systematic" },
    { nombre: "Antitusives", imagen: "https://i.postimg.cc/s2sCxnsB/tesalon.png", pag: "/antitusives" },
    { nombre: "Antigripals", imagen: "https://i.postimg.cc/FKNXzPNL/theraflu.png", pag: "/antigripals" },
    { nombre: "Vitamin-C", imagen: "https://i.postimg.cc/25rNyHrW/emergen-c.png", pag: "/vitamin-c" },
    { nombre: "Anti-acids", imagen: "https://i.postimg.cc/Bv4fbh42/tums.png", pag: "/antiacidos" },
    { nombre: "Dental Fixer", imagen: "https://i.postimg.cc/Gmk1c0w8/Corega.png", pag: "/fijador_den" },
    ];
    const [hoverCategory, setHoverCategory] = useState(null);
        return (
            <>
            <div className="container_body">
                <div>
                    <h1>Bienvenido a tu pagina de Testigos</h1>
                    <p>Esta pagina de inicio te va a dirigir a las categorias del grupo.</p>
                    <p>Podras consultar los testigo más recientes de la competencia en los medios Online y Offline.</p>
                    <p>Por favor, ayudanos a saber si necesitas algo más.</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }} >
                    {
                        categorias.map((categoria,index) => (
                        <div 
                            key={index}
                            onMouseEnter={() => setHoverCategory(categoria)}
                            onMouseLeave={() => setHoverCategory(null)}
                            style= {{padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    textAlign: 'center',
                                    width: '150px',
                                    }}
                                    className='categorias'
                                    >
                        <h2>{categoria.nombre}</h2>
                        {hoverCategory?.nombre === categoria.nombre && (
                            <div style={{ marginTop: '10px' }}>
                                <Link to={categoria.pag || "/oral_health"} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <img 
                                    src={categoria.imagen} 
                                    alt={categoria.nombre} 
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                                </Link>
                            </div>
                            
                        )}
                        
                        </div>
                    ))}
                    </div>
                </div>        

            </>
        )
}