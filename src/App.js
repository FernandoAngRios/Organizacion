import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componenetes/Header/Header';
import Formulario from './componenetes/Formulario/Formulario';
import MiOrg from './componenetes/MiOrg';
import Equipo from './componenetes/Equipo';
import Footer from './componenetes/Footer';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto:"https://github.com/FernandoAngRios.png",
      nombre:"Fernando",
      puesto:"Aprendiz",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto:"https://github.com/FernandoAngRios.png",
      nombre:"Luis",
      puesto:"Aprendiz",
      fav: false
    }]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Bases",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    }
  ])

//Esconde o Muestra el formulario
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
//Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores,colaborador])
  }
//Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }
//Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo, index) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color        
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados)
  }
//Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id ){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map ((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
        /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      { 
        equipos.map((equipo,index)=> <Equipo 
          key={index} 
          datos={equipo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
