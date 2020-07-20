const superExpressive = require('super-expressive');

const guiaLink = `Guia de Sobrevivência - ${process.env.URL_GUIA}`;
const valoresLink = `Valores - ${process.env.URL_VALORES}`;
const salariosLink = `Salário & Benefícios - ${process.env.URL_SALARIO}`;
const eventosLink = `Eventos & Treinamentos - ${process.env.URL_EVENTOS}`;
const materiaisLink = `Materiais Padrão - ${process.env.URL_MATERIAL}`;
const viagensLink = `Viagens - ${process.env.URL_VIAGENS}`;
const maloteLink = `Malote - ${process.env.URL_MALOTE}`;
const reembolsoLink = `Reembolsos & Adiantamentos - ${process.env
    .URL_REEMBOLSO}`;
const pontoLink = `Ponto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`;
const dpLink = `Departamento Pessoal - ${process.env.URL_DP}`;
const tutorialExpensesLink = `Tutorial Expenses - ${process.env.URL_EXPENSES}`;
const tutorialMyTeLink = `Tutorial MyTe - ${process.env.URL_MYTE}`;
const talksInternasLink = `Talks Internas - ${process.env.URL_TALKS}`;

const linkSelector = function(keyWord) {
  if (!keyWord || keyWord.match(/^todos$/)) {
    return 'Essa key word não está mapeada, '+
          'mas seguem todos os links que temos mapeados no momento\n' +
          guiaLink + '\n' +
          valoresLink + '\n' +
          dpLink + '\n' +
          salariosLink + '\n' +
          pontoLink + '\n' +
          eventosLink + '\n' +
          materiaisLink + '\n' +
          maloteLink + '\n' +
          reembolsoLink + '\n' +
          viagensLink + '\n' +
          tutorialExpensesLink + '\n' +
          tutorialMyTeLink + '\n' +
          talksInternasLink;
  }
  const guiaRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .string('guia')
      .endOfInput
      .toRegex();

  const valoresRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .string('valores')
      .endOfInput
      .toRegex();

  const dpRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .group
      .optional.string('departamento ')
      .string('pessoal')
      .end()
      .string('pessoas')
      .string('dp')
      .end()
      .endOfInput
      .toRegex();

  const maloteRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .string('malote')
      .optional.string('s')
      .endOfInput
      .toRegex();

  const viagemRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .string('viage')
      .anyOf
      .string('m')
      .string('ns')
      .end()
      .endOfInput
      .toRegex();

  const reembolsoRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .group
      .string('reembolso')
      .optional.string('s')
      .end()
      .group
      .string('adiantamento')
      .optional.string('s')
      .end()
      .end()
      .endOfInput
      .toRegex();

  const padraoRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .string('padrão')
      .string('padrao')
      .string('padrões')
      .string('material')
      .string('materiais')
      .string('apresentacao')
      .string('apresentação')
      .string('apresentações')
      .end()
      .endOfInput
      .toRegex();

  const salarioRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .string('benefício')
      .string('beneficio')
      .string('benefícios')
      .string('beneficios')
      .string('materiais')
      .string('salário')
      .string('salários')
      .string('salario')
      .string('salarios')
      .end()
      .endOfInput
      .toRegex();

  const eventosRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .string('evento')
      .string('eventos')
      .string('treinamento')
      .string('treinamentos')
      .end()
      .endOfInput
      .toRegex();

    const expensesRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .string('expenses')
      .string('expense')
      .string('despesas')
      .string('despesa')
      .end()
      .endOfInput
      .toRegex();

  const myteRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .string('myte')
      .string('timesheet')
      .end()
      .endOfInput
      .toRegex();

  const talksRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .string('talks')
      .string('gravações')
      .string('gravação')
      .string('gravacoes')
      .string('gravacao')
      .end()
      .endOfInput
      .toRegex();

  const pontoRegex = superExpressive()
      .caseInsensitive
      .startOfInput
      .anyOf
      .capture
      .string('ponto')
      .optional.anyOf
      .string(' eletronico')
      .string(' eletrônico')
      .end()
      .end()
      .string('horas')
      .string('horas extras')
      .end()
      .endOfInput
      .toRegex();

  if (keyWord.match(guiaRegex)) {
    return guiaLink;
  }

  if (keyWord.match(valoresRegex)) {
    return valoresLink;
  }

  if (keyWord.match(dpRegex)) {
    return dpLink;
  }

  if (keyWord.match(maloteRegex)) {
    return maloteLink;
  }

  if (keyWord.match(viagemRegex)) {
    return viagensLink;
  }

  if (keyWord.match(reembolsoRegex)) {
    return reembolsoLink;
  }

  if (keyWord
      .match(padraoRegex)) {
    return materiaisLink;
  }

  if (keyWord
      .match(salarioRegex)) {
    return salariosLink;
  }

  if (keyWord
      .match(eventosRegex)) {
    return eventosLink;
  }

  if (keyWord
      .match(expensesRegex)) {
    return tutorialExpensesLink;
  }

  if (keyWord
      .match(myteRegex)) {
    return tutorialMyTeLink;
  }
  // Match Talks Internas.
  if (keyWord
      .match(talksRegex)) {
    return talksInternasLink;
  }
  // Match ponto eletrônico, ponto eletronico, ponto, horas & horas extras.
  if (keyWord.match(pontoRegex)) {
    return pontoLink;
  }
};

module.exports = {
  messageBuilder: function(keyWord) {
    const greeting = 'Olá, seguem os links:\n';
    const linksFound = linkSelector(keyWord);
    return greeting + linksFound;
  },
};
