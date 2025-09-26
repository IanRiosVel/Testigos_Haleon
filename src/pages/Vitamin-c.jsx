import Tradicional from "../components/Tracional_media";
import Error from "../components/Errorpage";
const marcas_tradicionales = [
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
