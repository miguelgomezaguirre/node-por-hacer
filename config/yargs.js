const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'crea un elemnto por hacer', { descripcion })
    .command('actualizar', 'actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'borra una tarea de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}