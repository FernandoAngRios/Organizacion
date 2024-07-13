import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Maj¿nejar Envio",e)
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar);
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }


    return (
    <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
                required
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
                required
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de Foto" 
                valor={foto} 
                actualizarValor={actualizarFoto} 
                required
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarValor={actualizarEquipo} 
                equipos={props.equipos}
            />
            <Boton>
                Crear    
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
                required
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar Color en Hex" 
                valor={color} 
                actualizarValor={actualizarColor} 
                type= "color"
                required
            />

            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
    );
}

export default Formulario;