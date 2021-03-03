const superExpressive = require('super-expressive');
const itemSelector = require('./matchItem');

const list = {
  guiaLink: {
    action: `Guia de Sobrevivência - ${process.env.URL_GUIA}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.string('guia')
    	.endOfInput
    	.toRegex(),
  },
  valoresLink: {
    action: `Valores - ${process.env.URL_VALORES}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.string('valores')
    	.endOfInput
    	.toRegex(),
  },
  dpLink: {
    action: `Departamento Pessoal - ${process.env.URL_DP}`,
    regex:
    superExpressive()
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
    	.toRegex(),
  },
  salariosLink: {
    action: `Salário & Benefícios - ${process.env.URL_SALARIO}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.anyOf
    	.string('benefício')
    	.string('beneficio')
    	.string('benefícios')
    	.string('beneficios')
    	.string('salário')
    	.string('salários')
    	.string('salario')
    	.string('salarios')
    	.end()
    	.endOfInput
    	.toRegex(),
  },
  pontoLink: {
    action: `Ponto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`,
    regex:
    superExpressive()
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
    	.toRegex(),
  },
  atestadoLink: {
    action: `Atestado Médico - ${process.env.URL_ATESTADO}`,
    regex:
    superExpressive()
		.caseInsensitive
		.startOfInput
		.anyOf
		.capture
		.string('atestado')
		.optional.string('s')
		.optional.anyOf
		.string(' médico')
		.string(' médico')
		.string(' medico')
		.string(' medico')
		.end()
		.optional.string('s')
		.end()
		.end()
		.endOfInput
		.toRegex(),
  },
  eventosLink: {
    action: `Eventos & Treinamentos - ${process.env.URL_EVENTOS}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.anyOf
    	.string('evento')
    	.string('eventos')
    	.string('treinamento')
    	.string('treinamentos')
    	.end()
    	.endOfInput
    	.toRegex(),
  },
  materiaisLink: {
    action: `Materiais Padrão - ${process.env.URL_MATERIAL}`,
    regex:
    superExpressive()
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
    	.toRegex(),
  },
  maloteLink: {
    action: `Malote - ${process.env.URL_MALOTE}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.string('malote')
    	.optional.string('s')
    	.endOfInput
    	.toRegex(),
  },
  reembolsoLink: {
    action: `Reembolsos & Adiantamentos - ${process.env
      .URL_REEMBOLSO}`,
    regex:
    superExpressive()
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
    	.toRegex(),
  },
  viagensLink: {
    action: `Viagens - ${process.env.URL_VIAGENS}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.string('viage')
    	.anyOf
    	.string('m')
    	.string('ns')
    	.end()
    	.endOfInput
    	.toRegex(),
  },
  tutorialExpensesLink: {
    action: `Tutorial Expenses - ${process.env.URL_EXPENSES}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.anyOf
    	.string('expenses')
    	.string('expense')
    	.string('despesas')
    	.string('despesa')
    	.end()
    	.endOfInput
    	.toRegex(),
  },
  tutorialMyTeLink: {
    action: `Tutorial MyTe - ${process.env.URL_MYTE}`,
    regex:
    superExpressive()
    	.caseInsensitive
    	.startOfInput
    	.anyOf
    	.string('myte')
    	.string('timesheet')
    	.end()
    	.endOfInput
    	.toRegex(),
  },
  talksInternasLink: {
    action: `Talks Internas - ${process.env.URL_TALKS}`,
    regex:
    superExpressive()
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
    	.toRegex(),
  },
};

const env = 'links';
module.exports = {
  messageBuilder(keyWord) {
    const greeting = 'Olá, seguem os links:\n';
    const linksFound = itemSelector(keyWord, list, env);
    return greeting + linksFound;
  },
};
