const itemSelector = require('./matchItem');

const list = {
  cio: {
    action: `CIO - ${process.env.CONTACT_CIO}`,
    regex: /^CIO|cio$/,
  },
  dp: {
    action: `Departamento Pessoal - ${process.env.CONTACT_DP}`,
    regex: /^(departamento )?pessoal|dp$/,
  },
  myTe: {
    action: `Atendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}`,
    regex: /^myte|expenses$/,
  },
  asoc: {
    action: `ASOC - ${process.env.CONTACT_ASOC}`,
    regex: /^asoc$/,
  },
  itSeg: {
    action: `It´s Seg - ${process.env.CONTACT_ITSEG}`,
    regex: /^itseg|itSeg|planos$/,
  },
};

const env = 'contatos';

module.exports = {
  messageBuilder(keyWord) {
    const greeting = 'Olá, seguem os contatos:\n';
    const contactFounds = itemSelector(keyWord, list, env);
    return greeting + contactFounds;
  },
};
