const fs = require('node:fs');

const languages = {
    "cat": "Taula de multiplicar del ",
    "esp": "tabla de multiplicar del ",
    "en": "Multiplication table of "

}

const langJSON = JSON.stringify(languages);

// Forma Asincrona 
fs.writeFile("lang.json", langJSON, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});