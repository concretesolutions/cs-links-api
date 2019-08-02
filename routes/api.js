module.exports = {
    links: function(req, res) {
        switch(req.query.text) {
            case 'guia':
                res.send("Guia de Sobrevivência - https://blog.accenture.com/concrete/");
                break;
            case 'valores':
                res.send('Valores - https://blog.accenture.com/concrete/2018/08/01/valores/');
                break;
            case 'viagem':
            case 'viagens':
                res.send('Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
                break;
            case 'benefício':
            case 'beneficio':
            case 'benefícios':
            case 'beneficios':
            case 'salário':
            case 'salario':
                res.send('Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
                break;
            case 'todos':
            default:
                res.send('Guia de Sobrevivência - https://blog.accenture.com/concrete/ \n'+
                          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/ \n'+
                          'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/ \n' +
                          'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
                break;
        }
    }    
};