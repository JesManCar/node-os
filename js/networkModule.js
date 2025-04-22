import os from "node:os";
/*const os = require('node:os')
console.log(os)*/


function getDataNetwork(){

    let net ="";

    for (const [interName, interfaceData] of Object.entries(os.networkInterfaces())) {
        net += `
        Interfaz: ${interName}`;
        interfaceData.forEach((element) => {
            net +=`
            Familia: ${element.family}
            Direccion: ${element.address}
            Interno: ${element.internal}` 
        })
    };

    return net;
}

//module.exports = getDataNetwork;
export { getDataNetwork };