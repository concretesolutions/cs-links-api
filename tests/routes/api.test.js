const expect = require('chai').expect;

const { links } = require('../../routes/api');

let req = {
    query: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Api Route', function() {
    describe('Links() function', function() {
        it('Should respond all Links as default', function() {            
            links(req, res);
            expect(res.sendCalledWith).to
            .equal(
            'Guia de Sobrevivência - https://blog.accenture.com/concrete/ \n'+
            'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/ \n'+
            'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/ \n' +
            'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
        });
        it('Should respond all Links with text todos', function() {
            let newReq = req;
            req.query.text = 'todos';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal(
            'Guia de Sobrevivência - https://blog.accenture.com/concrete/ \n'+
            'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/ \n'+
            'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/ \n' +
            'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
        });
        it('Should respond Valores Link with text valores', function() {
            let newReq = req;
            req.query.text = 'valores';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Valores - https://blog.accenture.com/concrete/2018/08/01/valores/');
        });
        it('Should respond Guia de Sobrevivência Link with text guia', function() {
            let newReq = req;
            req.query.text = 'guia';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Guia de Sobrevivência - https://blog.accenture.com/concrete/');
        });
        it('Should respond Viagens Link with texts viagem or viagens', function() {
            let newReq = req;
            req.query.text = 'viagem';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
            req.query.text = 'viagens';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
        });
        it('Should respond Salário e Benefícios Link with texts salário or salario', function() {
            let newReq = req;
            req.query.text = 'salário';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
            req.query.text = 'salario';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
        });
        it('Should respond Salário e Benefícios Link with texts benefícios, beneficios, benefício or beneficio', function() {
            let newReq = req;
            req.query.text = 'benefícios';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
            req.query.text = 'beneficios';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
            req.query.text = 'benefício';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
            req.query.text = 'beneficio';            
            links(newReq, res);
            expect(res.sendCalledWith).to
            .equal('Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/');
        });
    })
});