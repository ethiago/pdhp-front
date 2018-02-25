
var fs = require('fs');

var parameters = [ { name: "baseUrl", envName:"BASEURL", defaultValue: "http://localhost:3000" } ];

var autoCode = "'use strict';\nangular.module('pdhp.autoConst', [])\n";

parameters.forEach(function(elem){
    autoCode += ".constant('"+elem.name+"', '"+ (process.env[elem.envName] || elem.defaultValue) +"')\n"
});

autoCode += ";";

fs.writeFile("dist/js/autoconst.js", autoCode , function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

