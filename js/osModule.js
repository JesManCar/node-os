import os from "node:os";

function getDataOS(){

    return `
    Nombre: ${os.hostname}
    Tipo: ${os.type}
    Versión: ${os.version}
    Arquitectura: ${os.arch}
    CPUs: ${os.cpus().length}
    Memoria Total: ${os.totalmem/1000000} MB
    Memoria Libre: ${os.freemem/1000000} MB
    `;
}

export { getDataOS };