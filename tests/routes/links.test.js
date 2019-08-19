const expect = require('chai').expect;

const {links} = require('../../routes/links');

const res = {
  sendCalledWith: '',
  send: function(arg) {
    this.sendCalledWith = arg;
  },
};

const buildRequest = function(userName, keyWord) {
  let req;
  if (userName) {
    req = {
      query: {
        user_name: userName,
        text: keyWord,
      },
    };
  } else {
    req = {
      query: {
        text: keyWord,
      },
    };
  };
  return req;
};

const callExpectation = function(userName, keyWord, actual, expected) {
  links(buildRequest(userName, keyWord), actual);
  expect(actual.sendCalledWith).to
      .equal(expected);
};

describe('Api Route', function() {
  describe('Links() function with user defined', function() {
    it('Should respond all Links as default', function() {
      callExpectation('John Doe', null, res,
          'Olá John Doe, seguem os links:\n'+
          'Essa key word não está mapeada, mas seguem todos os links que temos mapeados no momento\n' +
          'Guia de Sobrevivência - https://blog.accenture.com/concrete/\n' +
          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/\n' +
          'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/\n' +
          'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/\n' +
          'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/\n' +
          'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
    });
    it('Should respond all Links with text todos', function() {
      callExpectation('John Doe', 'todos', res,
          'Olá John Doe, seguem os links:\n'+
          'Essa key word não está mapeada, mas seguem todos os links que temos mapeados no momento\n' +
          'Guia de Sobrevivência - https://blog.accenture.com/concrete/\n' +
          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/\n' +
          'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/\n' +
          'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/\n' +
          'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/\n' +
          'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
    });
    it('Should respond Valores Link with text valores', function() {
      callExpectation('John Doe', 'valores', res,
          'Olá John Doe, seguem os links:\n'+
          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/');
    });
    it('Should respond Guia de Sobrevivência Link with text guia', function() {
      callExpectation('John Doe', 'guia', res,
          'Olá John Doe, seguem os links:\n'+
          'Guia de Sobrevivência - https://blog.accenture.com/concrete/');
    });
    it('Should respond Viagens Link with texts viagem or viagens', function() {
      const expectedMessage = 'Olá John Doe, seguem os links:\n'+
      'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/';

      callExpectation('John Doe', 'viagem', res, expectedMessage);
      callExpectation('John Doe', 'viagens', res, expectedMessage);
    });
    it('Should respond Malote Link with texts malote or malotes', function() {
      const expectedMessage = 'Olá John Doe, seguem os links:\n'+
      'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/';

      callExpectation('John Doe', 'malote', res, expectedMessage);
      callExpectation('John Doe', 'malotes', res, expectedMessage);
    });
    it('Should respond Salário e Benefícios Link with texts salário or salario'
        , function() {
          const expectedMessage = 'Olá John Doe, seguem os links:\n'+
          'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';

          callExpectation('John Doe', 'salário', res, expectedMessage);
          callExpectation('John Doe', 'salario', res, expectedMessage);
        });
    it('Should respond Salário e Benefícios Link with texts benefícios, '+
    'beneficios, benefício or beneficio', function() {
      const expectedMessage = 'Olá John Doe, seguem os links:\n'+
      'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';

      callExpectation('John Doe', 'benefícios', res, expectedMessage);
      callExpectation('John Doe', 'beneficios', res, expectedMessage);
      callExpectation('John Doe', 'benefício', res, expectedMessage);
      callExpectation('John Doe', 'beneficio', res, expectedMessage);
    });
    it('Should respond Materiais Padrão Link with texts padrão, '+
    'padrao, material, materiais, apresentação or apresentacao', function() {
      const expectedMessage = 'Olá John Doe, seguem os links:\n'+
      'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/';

      callExpectation('John Doe', 'padrão', res, expectedMessage);
      callExpectation('John Doe', 'padrao', res, expectedMessage);
      callExpectation('John Doe', 'material', res, expectedMessage);
      callExpectation('John Doe', 'materiais', res, expectedMessage);
      callExpectation('John Doe', 'apresentação', res, expectedMessage);
      callExpectation('John Doe', 'apresentacao', res, expectedMessage);
    });
  }),
  describe('Links() function without user defined', function() {
    it('Should respond all Links as default', function() {
      callExpectation(null, null, res,
          'Olá, seguem os links:\n'+
          'Essa key word não está mapeada, '+
          'mas seguem todos os links que temos mapeados no momento\n' +
          'Guia de Sobrevivência - https://blog.accenture.com/concrete/\n' +
          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/\n' +
          'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/\n' +
          'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/\n' +
          'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/\n' +
          'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
    });
    it('Should respond all Links with text todos', function() {
      callExpectation(null, 'todos', res,
          'Olá, seguem os links:\n'+
          'Essa key word não está mapeada, '+
          'mas seguem todos os links que temos mapeados no momento\n' +
          'Guia de Sobrevivência - https://blog.accenture.com/concrete/\n' +
          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/\n' +
          'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/\n' +
          'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/\n' +
          'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/\n' +
          'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/');
    });
    it('Should respond Valores Link with text valores', function() {
      callExpectation(null, 'valores', res,
          'Olá, seguem os links:\n'+
          'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/');
    });
    it('Should respond Guia de Sobrevivência Link with text guia', function() {
      callExpectation(null, 'guia', res,
          'Olá, seguem os links:\n'+
          'Guia de Sobrevivência - https://blog.accenture.com/concrete/');
    });
    it('Should respond Viagens Link with texts viagem or viagens', function() {
      const expectedMessage = 'Olá, seguem os links:\n'+
      'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/';

      callExpectation(null, 'viagem', res, expectedMessage);
      callExpectation(null, 'viagens', res, expectedMessage);
    });
    it('Should respond Malote Link with texts malote or malotes', function() {
      const expectedMessage = 'Olá, seguem os links:\n'+
      'Malote - https://blog.accenture.com/concrete/2018/08/06/malote/';

      callExpectation(null, 'malote', res, expectedMessage);
      callExpectation(null, 'malotes', res, expectedMessage);
    });
    it('Should respond Salário e Benefícios Link with texts salário or salario'
        , function() {
          const expectedMessage = 'Olá, seguem os links:\n'+
          'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';

          callExpectation(null, 'salário', res, expectedMessage);
          callExpectation(null, 'salario', res, expectedMessage);
        });
    it('Should respond Salário e Benefícios Link with texts benefícios, '+
    'beneficios, benefício or beneficio', function() {
      const expectedMessage = 'Olá, seguem os links:\n'+
      'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';

      callExpectation(null, 'benefícios', res, expectedMessage);
      callExpectation(null, 'beneficios', res, expectedMessage);
      callExpectation(null, 'benefício', res, expectedMessage);
      callExpectation(null, 'beneficio', res, expectedMessage);
    });
  });
});
