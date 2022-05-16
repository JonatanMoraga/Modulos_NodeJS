//LEER ARCHIVOS TXT

const fs = require('fs');
const archivo = 'lectura.txt';

/*if(fs.existsSync(archivo)){
    console.log('El archivo existe');
}else{
    console.log('El archivo no existe');
}*/

/*fs.access(archivo, fs.constants.F_OK, (err) =>{
    if(err){
        console.log('El archivo no existe');
    }else{
        console.log('El archivo si existe');
    }

});
*/

const contenido = '¿Que es la champions?'
fs.writeFileSync(archivo,contenido);
console.log('Se ha escrito en el archivo');

//asincrona
/*fs.writeFile(archivo,contenido, (err) => {
    if(err) throw('Hubo un error al escribir en el archivo');
    console.log('Se ha escrito en el archivo');
});
*/

const definicion = '\n La UEFA Champions League, denominada Liga de Campeones de la UEFA en español, es el torneo oficial de fútbol más importante y famoso de todas las competiciones organizadas por la UEFA o Unión de Asociaciones Europeas de Fútbol a nivel de clubes, además de uno de los más reconocidos a nivel mundial.';

fs.appendFile(archivo,definicion, (err) =>{
    if (err) throw('No se puede adjuntar mas texto');
    console.log('Se ha adjutando mas informacion...');
})

////////////////////////////////
//LEER ARCHIVO XML
