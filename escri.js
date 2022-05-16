const fs = require('fs');
const archivo = ('lectura.html');

/*if (fs.existsSync(archivo)){
    console.log('Archivo already exists');
}else{
    console.log('Archivo already no exists')
}*/ 


/*fs.access(archivo,fs.constants.F_OK,(err) => { 
    if(err) {
        console.log('El archivo no existe');
    }else{
        console.log('El archivo si existe');
    }


});*/

const contenido = 'Que es el COVID'
fs.writeFileSync(archivo,contenido);
console.log('Se ha escrito en el archivo');

const texto = '\n Es una enfermedad infecciosa provocada por el virus SARS-CoV-2.';

fs.appendFile(archivo,texto, (err) => {
    if(err) throw('No se puede agregar mas informacion');

    console.log('Se ha añadido mas informacion')
});