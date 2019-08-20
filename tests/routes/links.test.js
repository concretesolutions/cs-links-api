const expect = require('chai').expect;

const {links} = require('../../routes/links');

const res = {
  sendCalledWith: '',
  send: function(arg) {
    this.sendCalledWith = arg;
  },
};

const buildRequest = function(keyWord) {
  const req = {
    query: {
      text: keyWord,
    },
  };
  return req;
};

const baseMessage = 'Olá, seguem os links:\n';

const extendedMessage = baseMessage +
                  'Essa key word não está mapeada, '+
                  'mas seguem todos os links que temos mapeados no momento\n';

const callExpectation = function(keyWord, actual, expected) {
  links(buildRequest(keyWord), actual);
  expect(actual.sendCalledWith).to
      .equal(expected);
};

describe('Api Route', function() {
  describe('Links() function without user defined', function() {
    it('Should respond all Links as default', function() {
      callExpectation(null, res,
          extendedMessage +
          'Guia de Sobrevivência - https://blog.accenture.com/concrete/\n' +
          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/\n' +
          'Departamento Pessoal - https://blog.accenture.com/concrete/2018/08/06/departamento-pessoal/\n' +
          'Salário & Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/\n' +
          'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/\n' +
          'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/\n' +
          'Reembolsos & Adiantamentos - https://blog.accenture.com/concrete/2018/08/06/reembolso-e-adiantamentos/\n' +
          'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
    });
    it('Should respond all Links with text todos', function() {
      callExpectation('todos', res,
          extendedMessage +
        'Guia de Sobrevivência - https://blog.accenture.com/concrete/\n' +
        'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/\n' +
        'Departamento Pessoal - https://blog.accenture.com/concrete/2018/08/06/departamento-pessoal/\n' +
        'Salário & Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/\n' +
        'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/\n' +
        'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/\n' +
        'Reembolsos & Adiantamentos - https://blog.accenture.com/concrete/2018/08/06/reembolso-e-adiantamentos/\n' +
        'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
    });
    it('Should respond DP Link with text departamento pessoal, pessoas or dp'
        , function() {
          const expectedMessage = baseMessage +
        'Departamento Pessoal - https://blog.accenture.com/concrete/2018/08/06/departamento-pessoal/';
          callExpectation('departamento pessoal', res, expectedMessage);
          callExpectation('pessoal', res, expectedMessage);
          callExpectation('dp', res, expectedMessage);
        });
    it('Should respond Valores Link with text valores', function() {
      callExpectation('valores', res,
          baseMessage +
        'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/');
    });
    it('Should respond Guia de Sobrevivência Link with text guia', function() {
      callExpectation('guia', res, baseMessage +'Guia de Sobrevivência - https://blog.accenture.com/concrete/');
    });
    it('Should respond Viagens Link with texts viagem or viagens', function() {
      const expectedMessage = baseMessage +
      'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/';

      callExpectation('viagem', res, expectedMessage);
      callExpectation('viagens', res, expectedMessage);
    });
    it('Should respond Malote Link with texts malote or malotes', function() {
      const expectedMessage = baseMessage +
      'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/';

      callExpectation('malote', res, expectedMessage);
      callExpectation('malotes', res, expectedMessage);
    });
    it('Should respond Salário e Benefícios Link with texts salário or salario'
        , function() {
          const expectedMessage = baseMessage +
          'Salário & Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';

          callExpectation('salário', res, expectedMessage);
          callExpectation('salario', res, expectedMessage);
        });
    it('Should respond Salário e Benefícios Link with texts benefícios, '+
    'beneficios, benefício or beneficio', function() {
      const expectedMessage = baseMessage +
      'Salário & Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';

      callExpectation('benefícios', res, expectedMessage);
      callExpectation('beneficios', res, expectedMessage);
      callExpectation('benefício', res, expectedMessage);
      callExpectation('beneficio', res, expectedMessage);
    });
    it('Should respond Reembolsos e Adiantamentos Link with texts reembolso, '+
    'reembolsos, adiantamento or adiantamentos', function() {
      const expectedMessage = baseMessage +
      'Reembolsos & Adiantamentos - https://blog.accenture.com/concrete/2018/08/06/reembolso-e-adiantamentos/';

      callExpectation('reembolso', res, expectedMessage);
      callExpectation('reembolsos', res, expectedMessage);
      callExpectation('adiantamento', res, expectedMessage);
      callExpectation('adiantamentos', res, expectedMessage);
    });
    it('Should respond Materiais Padrão Link with texts padrão, '+
    'padrao, material, materiais, apresentação or apresentacao', function() {
      const expectedMessage = baseMessage +
      'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/';

      callExpectation('padrão', res, expectedMessage);
      callExpectation('padrao', res, expectedMessage);
      callExpectation('material', res, expectedMessage);
      callExpectation('materiais', res, expectedMessage);
      callExpectation('apresentação', res, expectedMessage);
      callExpectation('apresentacao', res, expectedMessage);
    });
  });
});
