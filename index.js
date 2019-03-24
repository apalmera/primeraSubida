const { cursos, requisitos } = require('./datos.js');
const express = require('express')
const app = express()

const argv = require('yargs')
    .command('inscribir', 'Inscribir en un curso ', requisitos)
    .argv

if (argv._[0] == 'inscribir') {

    let resultado = cursos.find(datosCurso);
    texto = 'El estudiante ' + argv.n + '\n' +
        'con cedula ' + argv.x + '\n' +
        'se ha matriculado en el curso llamado ' + resultado.nombre + 'tiene una duracion' + resultado.duracion + 'y un valor de' + resultado.valor;

} else {
    console.log('no se esta inscribiendo');
}

function datosCurso(dato) {
    return dato.id === argv.i;
}

app.get('/', function(req, res) {
    res.send(texto)
})

app.listen(3000)