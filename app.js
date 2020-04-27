const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

console.log(comando);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            // .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Arhivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido.');
}

//console.log(argv);

//let base = 'abc';
//console.log(process.argv);
// comando gui: node app --base=5

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

/*crearArchivo(base)
    .then(archivo => console.log(`Arhivo creado: ${archivo}`))
    .catch(e => console.log(e));*/