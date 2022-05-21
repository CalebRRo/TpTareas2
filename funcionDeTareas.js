const fs = require("fs")

 
    
    const leerArchivo = function(){
        let tareas = fs.readFileSync("./tareas.json","utf-8")
        return JSON.parse(tareas)
    }
    const escribirJSON = function (tareas) {
        let tareasStringify = JSON.stringify(tareas, null, 3);
        fs.writeFileSync("./tareas.json", tareasStringify,"utf-8")
    
    }
    const crearTarea = function(titulo){
        this.titulo = titulo;
        this.estado = "pendiente"
    }
    const guardarTarea = function (tarea) {
        let tareas = leerArchivo();
        tareas.push(tareas);
        escribirJSON(tareas)
    }
 

module.exports = {
    leerArchivo,
    escribirJSON,
    crearTarea,
    guardarTarea
};
   

