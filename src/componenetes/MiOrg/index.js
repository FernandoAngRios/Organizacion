import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {

    /*  const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        actualizarMostrar(!mostrar)
    }*/

    return <section className="OrgSection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/BotonAdd.png" alt="Imagen de boton de agregar" onClick={props.cambiarMostrar}></img>
    </section>;
}

export default MiOrg;