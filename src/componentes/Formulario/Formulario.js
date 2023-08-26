import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

  const[nombre,actualizarNombre]=useState("")
  const[puesto,actualizarPuesto]=useState("")
  const[foto,actualizarFoto]=useState("")
  const[equipo,actualizarEquipo]=useState("")

  const[titulo,actualizarTitulo] = useState("")
  const[color,actualizarColor] = useState("")

  const{registrarColaborador, crearEquipo} = props

  const manejarEnvio =(e)=>{
    e.preventDefault()//previene el comportamiento del navegador para tener control total y no se recargue toda la pagina
    console.log("manejar el envio",)
    let datosAEnviar={
      nombre: nombre,
      puesto: puesto,
      foto : foto,
      equipo: equipo
    }
    registrarColaborador(datosAEnviar)
  }

  const manejarNuevoEquipo = (e)=>{
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
          required={true} 
          valor={nombre} 
          actualizarValor = {actualizarNombre}
        />
        <Campo
          titulo="Puesto" 
          placeholder="Ingresa Puesto"  
          required
          valor={puesto} 
          actualizarValor = {actualizarPuesto}
        />
        <Campo 
          titulo="Foto" 
          placeholder="Ingresar enlace de Foto" 
          required
          valor={foto} 
          actualizarValor = {actualizarFoto}

        />
        <ListaOpciones
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
        equipos = {props.equipos}
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
          required={true} 
          valor={titulo} 
          actualizarValor = {actualizarTitulo}
        />
        <Campo
          titulo="color" 
          placeholder="Ingresa el color en Hex"  
          required
          valor={color} 
          actualizarValor = {actualizarColor}
          type="color"
        />
        <Boton>Registrar equipo</Boton>
      </form>  
    </section>
  );
};

export default Formulario;
