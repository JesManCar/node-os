import os from "node:os";

function getDataOS(){

    return `
    Nombre: ${os.platform}
    Tipo: ${os.type}
    Versión: ${os.version}
    Arquitectura: ${os.arch}
    CPUs: ${os.cpus().length}
    Memoria Total: ${(os.totalmem/1024/1024/1024).toFixed(2)} GB
    Memoria Libre: ${(os.freemem/1024/1024/1024).toFixed(2)} GB
    `;
}

export { getDataOS };