const fs = require("fs")
 

  const leerArchivo = function(){
        let tareas = fs.readFileSync("./tareas.json","utf-8")
        return JSON.parse(tareas)
    }
  const listar = function (tareas) {
      
        console.log(".................................");
        tareas.forEach((tarea, i) => {
           console.log(`(${i+1})- ${tarea.titulo} -> ${tarea.estado}`); 
        });
        console.log(".................................");
    }  
    const escribirJSON = function (tareas) {
        let tareasStringify = JSON.stringify(tareas, null, 3);
        fs.writeFileSync("./tareas.json", tareasStringify, "utf-8")
    }
    const crearTarea = function(titulo){
        this.titulo = titulo;
        this.estado = "pendiente";
    }
    const guardarTarea = function (tarea) {
        let tareas = leerArchivo();
        tareas.push(tarea);
        escribirJSON(tareas)
    }
    const filtrarPorEstado = function (estado) {
        let tareas = leerArchivo()
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado)
        return tareasFiltradas
    }
    const eliminar = function (titulo) {
        let tareas = leerArchivo();
        let tareasSinElementoEliminado = tareas.filter(
          (tarea) => tarea.titulo !== titulo
        );
        escribirJSON(tareasSinElementoEliminado);
      
        return tareasSinElementoEliminado;
      };
  
    
 

 

module.exports = {
    leerArchivo,
    escribirJSON,
    crearTarea,
    guardarTarea,
    filtrarPorEstado,
    listar,
    eliminar
    
};
   

