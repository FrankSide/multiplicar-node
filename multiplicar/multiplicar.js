const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`===Tabla de ${base}===`.green);
    console.log('================='.green);
    for (let j = 0; j < limite; j++) {
        console.log(`${base} * ${j} = ${j * base} \n`);
    }
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`)
            return;
        }

        let data = '';

        for (let i = 0; i < limite; i++) {
            data += (`${base} * ${i} = ${i * base} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}