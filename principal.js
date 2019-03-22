const {cursos, requisitos} = require ('./datos');

const argv = require('yargs')
            .command('inscribir', 'Inscribir en un curso ', requisitos)
            .argv

const fs = require('fs');

if(argv.n== null){
    for(let i= 0; i< cursos.length; i++){
        setTimeout(function(){
            console.log('El curso se llama '+ cursos[i].nombre+' y tiene una duracion de '+cursos[i].duracion+' y un valor de '+cursos[i].valor);
        },i* 2000) 
    }
}

if(argv.i>=1 && argv.i<=3){

    let resultado= cursos.find(datosCurso); 
    
    let crearArchivo = (argv) => {
        texto= 'El estudiante '+ argv.n +'\n' +
               'con cedula '+ argv.x +'\n' +
               'se ha matriculado en el curso llamado '+ resultado.nombre + 'tiene una duracion' + resultado.duracion + 'y un valor de' + resultado.valor
              
               fs.writeFile('matricula.txt',texto,(err) => {
                if(err) throw(err);
                console.log('se ha creado el archivo')
              });
    
    }
    crearArchivo(argv);
}

if(argv.id> 3) {
    console.log("Ha ingresado un id que no corresponde a ningun curso");
    let listarCurso= cursos.forEach(element => {
            console.log('El curso se llama '+ element.nombre+' y tiene una duracion de '+element.duracion+' y un valor de '+element.valor);
    });

}

function datosCurso(dato) { 
    return dato.id === argv.i;
} 




