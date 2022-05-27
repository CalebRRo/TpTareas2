const tareas = require("./tareas.json")
 


// const aliminar = function(titulo) {
//     let eliminar = tareas.map(titulo)
//      if (tareas.titulo === titulo) {
//          return eliminar
//      }
    //}
    const filtrarPorTitulo = function (titulo) {

        let tareasFiltradas = tareas.filter(tarea => tarea.titulo === titulo)
        return tareasFiltradas

    }

    console.log(filtrarPorTitulo("Tareas2"));