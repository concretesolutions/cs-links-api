const guiaLink = `Guia de Sobrevivência - ${process.env.URL_GUIA}`;
const valoresLink = `Valores - ${process.env.URL_VALORES}`;
const salariosLink = `Salário & Benefícios - ${process.env.URL_SALARIO}`;
const eventosLink = `Eventos & Treinamentos - ${process.env.URL_EVENTOS}`;
const materiaisLink = `Materiais Padrão - ${process.env.URL_MATERIAL}`;
const viagensLink = `Viagens - ${process.env.URL_VIAGENS}`;
const maloteLink = `Malote - ${process.env.URL_MALOTE}`;
const reembolsoLink = `Reembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}`;
const dpLink = `Departamento Pessoal - ${process.env.URL_DP}`;

const linkSelector = function(keyWord) {
  if (!keyWord || keyWord.match(/^todos$/)) {
    return 'Essa key word não está mapeada, '+
          'mas seguem todos os links que temos mapeados no momento\n' +
          guiaLink + '\n' +
          valoresLink + '\n' +
          dpLink + '\n' +
          salariosLink + '\n' +
          eventosLink + '\n' +
          materiaisLink + '\n' +
          maloteLink + '\n' +
          reembolsoLink + '\n' +
          viagensLink;
  }
  // Match guia.
  if (keyWord.match(/^guia$/)) {
    return guiaLink;
  }
  // Match valores.
  if (keyWord.match(/^valores$/)) {
    return valoresLink;
  }
  // Match departamento pessoal, pessoal and dp.
  if (keyWord.match(/^(departamento )?pessoal|dp$/)) {
    return dpLink;
  }
  // Match malote and malotes.
  if (keyWord.match(/^malotes?$/)) {
    return maloteLink;
  }
  // Match viagem and viagens.
  if (keyWord.match(/^viage(m|ns)$/)) {
    return viagensLink;
  }
  //Match reembolso, reembolsos, adiantamento and adiantamentos.
  if (keyWord.match(/^reembolsos?|adiantamentos?$/)) {
    return reembolsoLink;
  }
  // Match padrão, padrao, material, materiais apresentação and apresentacao
  if (keyWord
      .match(/^padr(ão|ao)|materia(l|is)|apresenta(ção|cao)$/)) {
    return materiaisLink;
  }
  // Match benefício, benefícios, baneficio, beneficios, salário, salários, 
  // salario and salarios.
  if (keyWord
      .match(/^benef(í|i)cios?|sal(á|a)rios?$/)) {
    return salariosLink;
  }
  // Match evento, eventos, treinamento, treinamentos.
  if (keyWord
      .match(/^eventos?|treinamentos?$/)) {
    return eventosLink;
  }
};

module.exports = {
  messageBuilder: function(keyWord) {
    const greeting = 'Olá, seguem os links:\n';
    const linksFound = linkSelector(keyWord);
    return greeting + linksFound;
  },
};
