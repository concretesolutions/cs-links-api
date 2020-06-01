require('dotenv').config();

const expect = require('chai').expect;

const {contacts} = require('../../routes/contacts');

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

const baseMessage = 'Olá, seguem os contatos:\n';

const extendedMessage = baseMessage +
        'Essa key word não está mapeada, '+
        'mas seguem todos os contatos que temos mapeados no momento\n';

const callExpectation = function(keyWord, actual, expected) {
  contacts(buildRequest(keyWord), actual);
  expect(actual.sendCalledWith).to.equal(expected);
};

describe('Api Route', function() {
  describe('Contacts() function without user defined', function() {
    it('Should respond all Contacts as default and with text todos', function() {
      callExpectation(null, res, extendedMessage +
        'Contas a Pagar - http://dummy.link\n' +
        'CIO - http://dummy.link\n' +
        'Departamento Pessoal - http://dummy.link\n' +
        'Atendimento Time & Expenses (10 às 16h) - http://dummy.link\n' +
        'ASOC - http://dummy.link\n' +
        'It´s Seg - http://dummy.link');
      callExpectation('todos', res, extendedMessage +
      'Contas a Pagar - http://dummy.link\n' +
      'CIO - http://dummy.link\n' +
      'Departamento Pessoal - http://dummy.link\n' +
      'Atendimento Time & Expenses (10 às 16h) - http://dummy.link\n' +
      'ASOC - http://dummy.link\n' +
      'It´s Seg - http://dummy.link');
    });
    it('Should respond Contas Link with text contas', function() {
      callExpectation('contas', res, baseMessage +
        'Contas a Pagar - http://dummy.link');
    });
    it('Should respond CIO Link with text cio or CIO', function() {
      callExpectation('cio', res, baseMessage +
        'CIO - http://dummy.link');
      callExpectation('CIO', res, baseMessage +
        'CIO - http://dummy.link');
    });
    it('Should respond Departamento Pessoal Link with text dp, departamento pessoal', function() {
      callExpectation('dp', res, baseMessage +
        'Departamento Pessoal - http://dummy.link');
      callExpectation('dp', res, baseMessage +
        'Departamento Pessoal - http://dummy.link');
    });
    it('Should respond Departamento Pessoal Link with text dp, departamento pessoal', function() {
      callExpectation('myte', res, baseMessage +
        'Atendimento Time & Expenses (10 às 16h) - http://dummy.link');
      callExpectation('expenses', res, baseMessage +
        'Atendimento Time & Expenses (10 às 16h) - http://dummy.link');
    });
  });
});
