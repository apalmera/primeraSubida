const requisitos={
    id:{
        demand:true,
        alias:'i'
    },
    nombre:{
        demand:true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'x'
    }
};


let cursos= [{
    id: 1,
    nombre: 'Introducción a la programación',
    duracion: '32 horas',
    valor: '150.000 pesos chilenos'
},
{    id: 2,
    nombre: 'Lenguaje SQL',
    duracion: '32 horas',
    valor: '50.000 pesos chilenos'
},
{
    id:3,
    nombre:'Programación orientada a objetos. Lenguaje JAVA',
    duracion: '32 horas',
    valor: '200.000 pesos chilenos'
}
];

module.exports = {
    requisitos,
    cursos
};