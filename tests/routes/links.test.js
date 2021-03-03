/* eslint-disable no-undef */
require('dotenv').config({ path: 'mocha.env' });
const { expect } = require('chai');

const { links } = require('../../routes/links');

const res = {
  sendCalledWith: '',
  send(arg) {
    this.sendCalledWith = arg;
  },
};

const buildRequest = function (keyWord) {
  const req = {
    query: {
      text: keyWord,
    },
  };
  return req;
};

const baseMessage = 'Olá, seguem os links:\n';

const extendedMessage = `${baseMessage
}Essa key word não está mapeada, `
                  + 'mas seguem todos os links que temos mapeados no momento\n';

const callExpectation = (keyWord, actual, expected) => {
  links(buildRequest(keyWord), actual);
  expect(actual.sendCalledWith).to
    .equal(expected);
};

describe('Api Route', () => {
  describe('Links() function without user defined', () => {
    it('Should respond all Links as default', () => {
      callExpectation(null, res,
        `${extendedMessage
        }Guia de Sobrevivência - ${process.env.URL_GUIA}\n`
          + `Valores - ${process.env.URL_VALORES}\n`
          + `Departamento Pessoal - ${process.env.URL_DP}\n`
          + `Salário & Benefícios - ${process.env.URL_SALARIO}\n`
          + `Ponto Eletrônico & Horas Extras - ${process.env.URL_PONTO}\n`
          + `Atestado Médico - ${process.env.URL_ATESTADO}\n`
          + `Eventos & Treinamentos - ${process.env.URL_EVENTOS}\n`
          + `Materiais Padrão - ${process.env.URL_MATERIAL}\n`
          + `Malote - ${process.env.URL_MALOTE}\n`
          + `Reembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}\n`
          + `Viagens - ${process.env.URL_VIAGENS}\n`
          + `Tutorial Expenses - ${process.env.URL_EXPENSES}\n`
          + `Tutorial MyTe - ${process.env.URL_MYTE}\n`
          + `Talks Internas - ${process.env.URL_TALKS}`);
    });
    it('Should respond all Links with text todos', () => {
      callExpectation('todos', res,
        `${extendedMessage
        }Guia de Sobrevivência - ${process.env.URL_GUIA}\n`
          + `Valores - ${process.env.URL_VALORES}\n`
          + `Departamento Pessoal - ${process.env.URL_DP}\n`
          + `Salário & Benefícios - ${process.env.URL_SALARIO}\n`
          + `Ponto Eletrônico & Horas Extras - ${process.env.URL_PONTO}\n`
          + `Atestado Médico - ${process.env.URL_ATESTADO}\n`
          + `Eventos & Treinamentos - ${process.env.URL_EVENTOS}\n`
          + `Materiais Padrão - ${process.env.URL_MATERIAL}\n`
          + `Malote - ${process.env.URL_MALOTE}\n`
          + `Reembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}\n`
          + `Viagens - ${process.env.URL_VIAGENS}\n`
          + `Tutorial Expenses - ${process.env.URL_EXPENSES}\n`
          + `Tutorial MyTe - ${process.env.URL_MYTE}\n`
          + `Talks Internas - ${process.env.URL_TALKS}`);
    });
    it('Should respond DP Link with text departamento pessoal, pessoas or dp',
      () => {
        const expectedMessage = `${baseMessage}Departamento Pessoal - ${process.env.URL_DP}`;
        callExpectation('departamento pessoal', res, expectedMessage);
        callExpectation('pessoal', res, expectedMessage);
        callExpectation('dp', res, expectedMessage);
      });
    it('Should respond Valores Link with text valores', () => {
      callExpectation('valores', res, `${baseMessage}Valores - ${process.env.URL_VALORES}`);
    });
    it('Should respond Guia de Sobrevivência Link with text guia', () => {
      callExpectation('guia', res, `${baseMessage}Guia de Sobrevivência - ${process.env.URL_GUIA}`);
    });
    it('Should respond Viagens Link with texts viagem or viagens', () => {
      const expectedMessage = `${baseMessage}Viagens - ${process.env.URL_VIAGENS}`;

      callExpectation('viagem', res, expectedMessage);
      callExpectation('viagens', res, expectedMessage);
    });
    it('Should respond Malote Link with texts malote or malotes', () => {
      const expectedMessage = `${baseMessage}Malote - ${process.env.URL_MALOTE}`;

      callExpectation('malote', res, expectedMessage);
      callExpectation('malotes', res, expectedMessage);
    });
    it('Should respond Salário e Benefícios Link with texts salário or salario',
      () => {
        const expectedMessage = `${baseMessage}Salário & Benefícios - ${process.env.URL_SALARIO}`;

        callExpectation('salário', res, expectedMessage);
        callExpectation('salario', res, expectedMessage);
      });
    it('Should respond Salário e Benefícios Link with texts benefícios, '
    + 'beneficios, benefício or beneficio', () => {
      const expectedMessage = `${baseMessage}Salário & Benefícios - ${process.env.URL_SALARIO}`;

      callExpectation('benefícios', res, expectedMessage);
      callExpectation('beneficios', res, expectedMessage);
      callExpectation('benefício', res, expectedMessage);
      callExpectation('beneficio', res, expectedMessage);
    });
    it('Should respond Reembolsos e Adiantamentos Link with texts reembolso, '
    + 'reembolsos, adiantamento or adiantamentos', () => {
      const expectedMessage = `${baseMessage}Reembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}`;

      callExpectation('reembolso', res, expectedMessage);
      callExpectation('reembolsos', res, expectedMessage);
      callExpectation('adiantamento', res, expectedMessage);
      callExpectation('adiantamentos', res, expectedMessage);
    });
    it('Should respond Materiais Padrão Link with texts padrão, '
    + 'padrao, material, materiais, apresentação or apresentacao', () => {
      const expectedMessage = `${baseMessage}Materiais Padrão - ${process.env.URL_MATERIAL}`;

      callExpectation('padrão', res, expectedMessage);
      callExpectation('padrões', res, expectedMessage);
      callExpectation('padrao', res, expectedMessage);
      callExpectation('material', res, expectedMessage);
      callExpectation('materiais', res, expectedMessage);
      callExpectation('apresentação', res, expectedMessage);
      callExpectation('apresentações', res, expectedMessage);
      callExpectation('apresentacao', res, expectedMessage);
    });
    it('Should respond Eventos & Treinamentos Link with texts eventos, '
    + 'evento, treinamento or treinamentos', () => {
      const expectedMessage = `${baseMessage}Eventos & Treinamentos - ${process.env.URL_EVENTOS}`;

      callExpectation('evento', res, expectedMessage);
      callExpectation('eventos', res, expectedMessage);
      callExpectation('treinamento', res, expectedMessage);
      callExpectation('treinamentos', res, expectedMessage);
    });
    it('Should respond Tutorial Expenses Link.', () => {
      const expectedMessage = `${baseMessage}Tutorial Expenses - ${process.env.URL_EXPENSES}`;

      callExpectation('expenses', res, expectedMessage);
    });
    it('Should respond Tutorial MyTe Link.', () => {
      const expectedMessage = `${baseMessage}Tutorial MyTe - ${process.env.URL_MYTE}`;

      callExpectation('myte', res, expectedMessage);
    });
    it('Should respond Talks Internas Link '
    + 'with text talks, gravacoes or gravações', () => {
      const expectedMessage = `${baseMessage}Talks Internas - ${process.env.URL_TALKS}`;

      callExpectation('talks', res, expectedMessage);
      callExpectation('gravacoes', res, expectedMessage);
      callExpectation('gravações', res, expectedMessage);
    });
    it('Should respond Ponto Eletrônico & Horas Extras Link with texts '
    + 'ponto eletrônico, ponto eletronico, ponto, horas or horas extras',
    () => {
      const expectedMessage = `${baseMessage}Ponto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`;

      callExpectation('ponto', res, expectedMessage);
      callExpectation('ponto eletronico', res, expectedMessage);
      callExpectation('ponto eletrônico', res, expectedMessage);
      callExpectation('horas', res, expectedMessage);
      callExpectation('horas extras', res, expectedMessage);
    });
    it('Should respond Atestados Médicos Link.', () => {
      const expectedMessage = `${baseMessage}Atestado Médico - ${process.env.URL_ATESTADO}`;

      callExpectation('atestado', res, expectedMessage);
      callExpectation('atestados', res, expectedMessage);
      callExpectation('atestado médico', res, expectedMessage);
      callExpectation('atestados médico', res, expectedMessage);
      callExpectation('atestado medico', res, expectedMessage);
      callExpectation('atestados medico', res, expectedMessage);
      callExpectation('atestado médicos', res, expectedMessage);
      callExpectation('atestados médicos', res, expectedMessage);
      callExpectation('atestado medicos', res, expectedMessage);
      callExpectation('atestados medicos', res, expectedMessage);
    });
  });
});
