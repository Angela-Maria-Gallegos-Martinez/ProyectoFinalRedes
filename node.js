var fs = require('fs'),
    readline = require('readline');
    if(!window.localStorage) return false;
    var gd= localStorage.correo + localStorage.password;
    console.log(gd);
      
    fs.writeFile("nuevo.txt", gd, function(err) {
       if (err) {
         return console.log(err);
       }
     
       console.log("El archivo fue creado correctamente");
     });