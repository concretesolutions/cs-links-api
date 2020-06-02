/* eslint-disable max-len */
const contas = `Contas a Pagar - ${process.env.CONTACT_CONTAS}`;
const cio = `CIO - ${process.env.CONTACT_CIO}`;
const dp = `Departamento Pessoal - ${process.env.CONTACT_DP}`;
const myTe = `Atendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}`;
const asoc = `ASOC - ${process.env.CONTACT_ASOC}`;
const itSeg = `It´s Seg - ${process.env.CONTACT_ITSEG}`;

const contactSelector = function(keyWord) {
  if (!keyWord || keyWord.match(/^todos$/)) {
    return 'Essa key word não está mapeada, '+
          'mas seguem todos os contatos que temos mapeados no momento\n' +
          contas + '\n' +
          cio + '\n' +
          dp + '\n' +
          myTe + '\n' +
          asoc + '\n' +
          itSeg;
  }
  // Match contas.
  if (keyWord.match(/^contas$/)) {
    return contas;
  }
  // Match CIO.
  if (keyWord.match(/^CIO|cio$/)) {
    return cio;
  }
  // Match departamento pessoal, pessoal and dp.
  if (keyWord.match(/^(departamento )?pessoal|dp$/)) {
    return dp;
  }
  // Match myte and expenses.
  if (keyWord.match(/^myte|expenses$/)) {
    return myTe;
  }
  // Match asoc.
  if (keyWord.match(/^asoc$/)) {
    return asoc;
  }
  // Match itseg, itSeg and planos.
  if (keyWord.match(/^itseg|itSeg|planos$/)) {
    return itSeg;
  }
};

module.exports = {
  messageBuilder: function(keyWord) {
    const greeting = 'Olá, seguem os contatos:\n';
    const contactFounds = contactSelector(keyWord);
    return greeting + contactFounds;
  },
};
