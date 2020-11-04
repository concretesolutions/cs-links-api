/* eslint-disable no-undef */
require('dotenv').config({ path: 'mocha.env' });

const { expect } = require('chai');

const { contacts } = require('../../routes/contacts');

const res = {
  sendCalledWith: '',
  send(arg) {
    this.sendCalledWith = arg;
  },
};

const buildRequest = (keyWord) => {
  const req = {
    query: {
      text: keyWord,
    },
  };
  return req;
};

const baseMessage = 'Olá, seguem os contatos:\n';

const extendedMessage = `${baseMessage}Essa key word não está mapeada, `
  + 'mas seguem todos os contatos que temos mapeados no momento\n';

const callExpectation = (keyWord, actual, expected) => {
  contacts(buildRequest(keyWord), actual);
  expect(actual.sendCalledWith).to.equal(expected);
};

describe('Api Route', () => {
  describe('Contacts() function without user defined', () => {
    it('Should respond all Contacts as default and with text todos',
      () => {
        callExpectation(null, res, `${extendedMessage}Contas a Pagar - ${process.env.CONTACT_CONTAS}\n`
          + `CIO - ${process.env.CONTACT_CIO}\n`
          + `Departamento Pessoal - ${process.env.CONTACT_DP}\n`
          + `Atendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}\n`
          + `ASOC - ${process.env.CONTACT_ASOC}\n`
          + `It´s Seg - ${process.env.CONTACT_ITSEG}`);
        callExpectation('todos', res, `${extendedMessage}Contas a Pagar - ${process.env.CONTACT_CONTAS}\n`
          + `CIO - ${process.env.CONTACT_CIO}\n`
          + `Departamento Pessoal - ${process.env.CONTACT_DP}\n`
          + `Atendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}\n`
          + `ASOC - ${process.env.CONTACT_ASOC}\n`
          + `It´s Seg - ${process.env.CONTACT_ITSEG}`);
      });
    it('Should respond Contas Link with text contas', () => {
      callExpectation('contas', res, `${baseMessage}Contas a Pagar - ${process.env.CONTACT_CONTAS}`);
    });
    it('Should respond CIO Link with text cio or CIO', () => {
      callExpectation('cio', res, `${baseMessage}CIO - ${process.env.CONTACT_CIO}`);
      callExpectation('CIO', res, `${baseMessage}CIO - ${process.env.CONTACT_CIO}`);
    });
    it('Should respond Departamento Pessoal Link with text dp, '
      + 'departamento pessoal', () => {
      callExpectation('dp', res, `${baseMessage}Departamento Pessoal - ${process.env.CONTACT_DP}`);
      callExpectation('dp', res, `${baseMessage}Departamento Pessoal - ${process.env.CONTACT_DP}`);
    });
    it('Should respond Departamento Pessoal Link with text dp, '
      + 'departamento pessoal', () => {
      callExpectation('myte', res, `${baseMessage}Atendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}`);
      callExpectation('expenses', res, `${baseMessage}Atendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}`);
    });
  });
});
