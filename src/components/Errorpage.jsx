import dog from "../assets/sadog.png"
import "../styles/error.css"
export default function Error() {
    return (
        <main className="error_container">
            <div className="error-page">
                <h1>404 <br /> Pagina no encontrada</h1>
                <p>Lo sentimos. <br />No tenemos ningun creativo nuevo.</p>
            <div>
                <img src={dog} alt="" style={{maxWidth:"300px", borderRadius:"15px"}}/>
            </div >
                <a href="/" ><p>Regresa por favor al inicio</p> </a>
            </div>

        </main>
    );
}
