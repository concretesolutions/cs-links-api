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
        }Guia de Sobrevivência - http://dummy.link\n`
          + 'Valores - http://dummy.link\n'
          + 'Departamento Pessoal - http://dummy.link\n'
          + 'Salário & Benefícios - http://dummy.link\n'
          + 'Ponto Eletrônico & Horas Extras - http://dummy.link\n'
          + 'Eventos & Treinamentos - http://dummy.link\n'
          + 'Materiais Padrão - http://dummy.link\n'
          + 'Malote - http://dummy.link\n'
          + 'Reembolsos & Adiantamentos - http://dummy.link\n'
          + 'Viagens - http://dummy.link\n'
          + 'Tutorial Expenses - http://dummy.link\n'
          + 'Tutorial MyTe - http://dummy.link\n'
          + 'Talks Internas - http://dummy.link');
    });
    it('Should respond all Links with text todos', () => {
      callExpectation('todos', res,
        `${extendedMessage
        }Guia de Sobrevivência - http://dummy.link\n`
          + 'Valores - http://dummy.link\n'
          + 'Departamento Pessoal - http://dummy.link\n'
          + 'Salário & Benefícios - http://dummy.link\n'
          + 'Ponto Eletrônico & Horas Extras - http://dummy.link\n'
          + 'Eventos & Treinamentos - http://dummy.link\n'
          + 'Materiais Padrão - http://dummy.link\n'
          + 'Malote - http://dummy.link\n'
          + 'Reembolsos & Adiantamentos - http://dummy.link\n'
          + 'Viagens - http://dummy.link\n'
          + 'Tutorial Expenses - http://dummy.link\n'
          + 'Tutorial MyTe - http://dummy.link\n'
          + 'Talks Internas - http://dummy.link');
    });
    it('Should respond DP Link with text departamento pessoal, pessoas or dp',
      () => {
        const expectedMessage = `${baseMessage}Departamento Pessoal - http://dummy.link`;
        callExpectation('departamento pessoal', res, expectedMessage);
        callExpectation('pessoal', res, expectedMessage);
        callExpectation('dp', res, expectedMessage);
      });
    it('Should respond Valores Link with text valores', () => {
      callExpectation('valores', res, `${baseMessage}Valores - http://dummy.link`);
    });
    it('Should respond Guia de Sobrevivência Link with text guia', () => {
      callExpectation('guia', res, `${baseMessage}Guia de Sobrevivência - http://dummy.link`);
    });
    it('Should respond Viagens Link with texts viagem or viagens', () => {
      const expectedMessage = `${baseMessage}Viagens - http://dummy.link`;

      callExpectation('viagem', res, expectedMessage);
      callExpectation('viagens', res, expectedMessage);
    });
    it('Should respond Malote Link with texts malote or malotes', () => {
      const expectedMessage = `${baseMessage}Malote - http://dummy.link`;

      callExpectation('malote', res, expectedMessage);
      callExpectation('malotes', res, expectedMessage);
    });
    it('Should respond Salário e Benefícios Link with texts salário or salario',
      () => {
        const expectedMessage = `${baseMessage}Salário & Benefícios - http://dummy.link`;

        callExpectation('salário', res, expectedMessage);
        callExpectation('salario', res, expectedMessage);
      });
    it('Should respond Salário e Benefícios Link with texts benefícios, '
    + 'beneficios, benefício or beneficio', () => {
      const expectedMessage = `${baseMessage}Salário & Benefícios - http://dummy.link`;

      callExpectation('benefícios', res, expectedMessage);
      callExpectation('beneficios', res, expectedMessage);
      callExpectation('benefício', res, expectedMessage);
      callExpectation('beneficio', res, expectedMessage);
    });
    it('Should respond Reembolsos e Adiantamentos Link with texts reembolso, '
    + 'reembolsos, adiantamento or adiantamentos', () => {
      const expectedMessage = `${baseMessage}Reembolsos & Adiantamentos - http://dummy.link`;

      callExpectation('reembolso', res, expectedMessage);
      callExpectation('reembolsos', res, expectedMessage);
      callExpectation('adiantamento', res, expectedMessage);
      callExpectation('adiantamentos', res, expectedMessage);
    });
    it('Should respond Materiais Padrão Link with texts padrão, '
    + 'padrao, material, materiais, apresentação or apresentacao', () => {
      const expectedMessage = `${baseMessage}Materiais Padrão - http://dummy.link`;

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
      const expectedMessage = `${baseMessage}Eventos & Treinamentos - http://dummy.link`;

      callExpectation('evento', res, expectedMessage);
      callExpectation('eventos', res, expectedMessage);
      callExpectation('treinamento', res, expectedMessage);
      callExpectation('treinamentos', res, expectedMessage);
    });
    it('Should respond Tutorial Expenses Link.', () => {
      const expectedMessage = `${baseMessage
      }Tutorial Expenses - http://dummy.link`;

      callExpectation('expenses', res, expectedMessage);
    });
    it('Should respond Tutorial MyTe Link.', () => {
      const expectedMessage = `${baseMessage
      }Tutorial MyTe - http://dummy.link`;

      callExpectation('myte', res, expectedMessage);
    });
    it('Should respond Talks Internas Link '
    + 'with text talks, gravacoes or gravações', () => {
      const expectedMessage = `${baseMessage
      }Talks Internas - http://dummy.link`;

      callExpectation('talks', res, expectedMessage);
      callExpectation('gravacoes', res, expectedMessage);
      callExpectation('gravações', res, expectedMessage);
    });
    it('Should respond Ponto Eletrônico & Horas Extras Link with texts '
    + 'ponto eletrônico, ponto eletronico, ponto, horas or horas extras',
    () => {
      const expectedMessage = `${baseMessage}Ponto Eletrônico & Horas Extras - http://dummy.link`;

      callExpectation('ponto', res, expectedMessage);
      callExpectation('ponto eletronico', res, expectedMessage);
      callExpectation('ponto eletrônico', res, expectedMessage);
      callExpectation('horas', res, expectedMessage);
      callExpectation('horas extras', res, expectedMessage);
    });
  });
});
