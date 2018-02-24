
var fs = require('fs');

var parameters = [ "baseUrl" ];

var autoCode = "'use strict';\nangular.module('pdhp.autoConst', [])\n";

parameters.forEach(function(elem){
    autoCode += ".constant('"+elem+"', '"+ process.env[elem.toUpperCase()] +"')\n"
});

autoCode += ";";

fs.writeFile("dist/js/autoconst.js", autoCode , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

