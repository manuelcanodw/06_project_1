//Modulos que vamos a utilizar, para lo que los importaremos 
const fs = require('node:fs');
const path = require('node:path');
const pc = require("picocolors");

//esto sera la prueba de picocolors
// console.log(pc.bgBlue("Esto deberia estar en color amarillo"));

console.clear();


//verificar si solo hay 2 argumentos en la ejecucion del js
if (process.argv.length == 2) {
    let menu = `Este programa muestra la tabla de multiplicar del numero que elijas\n`
    menu += `Te lo mostrara con el idioma que escojas de los siguientes\n`
    menu += `cat - esp - eng`
    menu += `Ademas lo grabara en un fichero`
    menu += `Ejemplo de uso : ${pc.green("node app.js 3 cat")}`
    console.log(menu);
    //fianlizae la app
    process.exit();
}
//falta:
// Verificar que esten los dos argumentos requeridos
// verificar 
//obtener el operador y el idioma
const operador = process.argv[2]
const lang = process.argv[3];

//obtener e fichero de idiomas
const rutaJson = path.join("config", "languages.json");
const JsonLang = fs.readFileSync(rutaJson, "utf8");
const langObj = JSON.parse(JsonLang);
// console.log(langObj); verificael objeto
// console.log(langObj[lang]);


//titulo de la tabla y el fichero
const title = langObj[lang]+ operador


//definir la cabecera 
let header = "================================================\n";
header += title + `\n`;
header += "================================================\n";
console.log(pc.green(header));

// Numero limite
const numLimit = 10;
let tabla = "";
for (let i = 1; i < numLimit + 1; i++) {
    tabla += `${operador} x ${i} = ${operador * i}\n`;
}
console.log(tabla);

//grabar el fichero
const newTitle = title.split(" ").join("_");
const rutaCarpetas = path.join("txt", lang)
// console.log(newTitle);
// console.log(rutaFichero);





//Verificar si la ruta existe
if (!fs.existsSync(rutaCarpetas)) {
    console.log(`la ruta ${rutaCarpetas} no exitia`);
    fs.mkdirSync(rutaCarpetas, {recursive: true});

}


const rutaFichero = path.join(rutaCarpetas, newTitle+".txt");
fs.writeFileSync(rutaFichero, header + tabla, 'utf8');

