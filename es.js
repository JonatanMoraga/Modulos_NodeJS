const fs = require('fs');
const archivo = ('lectura.csv');

/*if (fs.existsSync(archivo)){
    console.log('Archivo already exists');
}else{
    console.log('Archivo already no exists')
}*/;

const contenido = 'Que es visual studio'
fs.writeFileSync(archivo,contenido);
console.log('Se ha escrito en el archivo');

const texto = '\n es un entorno de desarrollo integrado para Windows y macOS. Es compatible con múltiples lenguajes de programación, tales como C++, C#, Visual Basic .';

fs.appendFile(archivo,texto, (err) => {
    if(err) throw('No se puede agregar mas informacion');

    console.log('Se ha añadido mas informacion')
});
