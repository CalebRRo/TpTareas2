const process = require("process");
const {leerArchivo, guardarTarea, crearTarea, filtrarPorEstado, listar, eliminar} = require("./funcionDeTareas");
const tareas = leerArchivo()

const accion = process.argv[2]


switch (accion) {
    case "listar":
       
        listar(tareas)
        break;
    case "crear" :  
        let nuevaTarea = new crearTarea(process.argv[3])
        guardarTarea(nuevaTarea)
        break;

    case "filtrar" :
        let tareasFiltradas = filtrarPorEstado(process.argv[3]);
       listar(tareasFiltradas)
        break;  
    
    case "actualizar" :
        let tareaActualizada = actualizarEstado(process.argv[3],process.argv[4]) 
       console.log(tareaActualizada);
       break
       case "eliminar":
        let tareaEliminada = eliminar(process.argv[3])
        listar(tareaEliminada)
  
      break


    case undefined :
        console.log("........................................");
        console.log("Atencion tienes que pasar una accion 🤔");
        console.log("........................................");
        break;     
  

    default:
    console.log("........................................");  
    console.log("    No entiendo que queres hacer 🙄");
    console.log("........................................");
        break;
}




