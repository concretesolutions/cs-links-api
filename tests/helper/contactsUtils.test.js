const { expect } = require('chai');
const contactsUtils = require('../../helper/contactsUtils');

describe('Contact Utils', () => {
  it('should return Contas a Pagar contact', () => {
    expect(contactsUtils.messageBuilder('contas'))
      .equal('Olá, seguem os contatos:\nContas a Pagar - undefined');
  });
  it('should return cio contact', () => {
    expect(contactsUtils.messageBuilder('cio'))
      .equal('Olá, seguem os contatos:\nCIO - undefined');
    expect(contactsUtils.messageBuilder('CIO'))
      .equal('Olá, seguem os contatos:\nCIO - undefined');
  });
  it('should return Departamento Pessoal contact', () => {
    expect(contactsUtils.messageBuilder('departamento pessoal'))
      .equal('Olá, seguem os contatos:\nDepartamento Pessoal - undefined');
    expect(contactsUtils.messageBuilder('dp'))
      .equal('Olá, seguem os contatos:\nDepartamento Pessoal - undefined');
  });
  it('should return myTe contact', () => {
    expect(contactsUtils.messageBuilder('myte'))
      .equal('Olá, seguem os contatos:\nAtendimento Time & Expenses (10 às 16h) - undefined');
    expect(contactsUtils.messageBuilder('expenses'))
      .equal('Olá, seguem os contatos:\nAtendimento Time & Expenses (10 às 16h) - undefined');
  });
  it('should return ASOC contact', () => {
    expect(contactsUtils.messageBuilder('asoc'))
      .equal('Olá, seguem os contatos:\nASOC - undefined');
  });
  it('should return It´s Seg contact', () => {
    expect(contactsUtils.messageBuilder('itseg'))
      .equal('Olá, seguem os contatos:\nIt´s Seg - undefined');
    expect(contactsUtils.messageBuilder('itSeg'))
      .equal('Olá, seguem os contatos:\nIt´s Seg - undefined');
    expect(contactsUtils.messageBuilder('planos'))
      .equal('Olá, seguem os contatos:\nIt´s Seg - undefined');
  });
});
