var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log("Server running on port 3000");
});

app.get("/links", (req, res, next) => {
    switch(req.query.text) {
        case 'guia':
            res.send("https://blog.accenture.com/concrete/");
            break;
        case 'valores':
            res.send('https://blog.accenture.com/concrete/2018/08/01/valores/');
            break;
        case 'viagem':
        case 'viagens':
            res.send('https://blog.accenture.com/concrete/2018/08/06/viagens/');
            break;
        case 'benefício':
        case 'beneficio':
        case 'benefícios':
        case 'beneficios':
        case 'salário':
        case 'salario':
            res.send('https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
            break;
        case 'todos':
        default:
            res.send('Guia de Sobrevivência - https://blog.accenture.com/concrete/ \n'+
                      'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/ \n'+
                      'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/ \n' +
                      'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
            break;
    }

   });