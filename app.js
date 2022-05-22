const process = require("process");
const {leerArchivo, guardarTarea, crearTarea} = require("./funcionDeTareas");
const tareas = leerArchivo()

const accion = process.argv[2]
const titulo = process.argv[3]

switch (accion) {
    case "listar":
        console.log(".................................");
        tareas.forEach((tarea, i) => {
           console.log(`(${i+1})- ${tarea.titulo} -> ${tarea.estado}`); 
        });
        console.log(".................................");
        
        break;
    case "crear" :  
        let nuevaTarea = new crearTarea(titulo.trim())
        guardarTarea(nuevaTarea)
        break;
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




