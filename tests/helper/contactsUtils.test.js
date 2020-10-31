/* eslint-disable no-undef */
const { expect } = require('chai');
const contactsUtils = require('../../helper/contactsUtils');

describe('Contact Utils', () => {
  it('should return Contas a Pagar contact', () => {
    expect(contactsUtils.messageBuilder('contas'))
      .equal('Olá, seguem os contatos:\nContas a Pagar - http://dummy.link');
  });
  it('should return cio contact', () => {
    expect(contactsUtils.messageBuilder('cio'))
      .equal('Olá, seguem os contatos:\nCIO - http://dummy.link');
    expect(contactsUtils.messageBuilder('CIO'))
      .equal('Olá, seguem os contatos:\nCIO - http://dummy.link');
  });
  it('should return Departamento Pessoal contact', () => {
    expect(contactsUtils.messageBuilder('departamento pessoal'))
      .equal('Olá, seguem os contatos:\nDepartamento Pessoal - http://dummy.link');
    expect(contactsUtils.messageBuilder('dp'))
      .equal('Olá, seguem os contatos:\nDepartamento Pessoal - http://dummy.link');
  });
  it('should return myTe contact', () => {
    expect(contactsUtils.messageBuilder('myte'))
      .equal('Olá, seguem os contatos:\nAtendimento Time & Expenses (10 às 16h) - http://dummy.link');
    expect(contactsUtils.messageBuilder('expenses'))
      .equal('Olá, seguem os contatos:\nAtendimento Time & Expenses (10 às 16h) - http://dummy.link');
  });
  it('should return ASOC contact', () => {
    expect(contactsUtils.messageBuilder('asoc'))
      .equal('Olá, seguem os contatos:\nASOC - http://dummy.link');
  });
  it('should return It´s Seg contact', () => {
    expect(contactsUtils.messageBuilder('itseg'))
      .equal('Olá, seguem os contatos:\nIt´s Seg - http://dummy.link');
    expect(contactsUtils.messageBuilder('itSeg'))
      .equal('Olá, seguem os contatos:\nIt´s Seg - http://dummy.link');
    expect(contactsUtils.messageBuilder('planos'))
      .equal('Olá, seguem os contatos:\nIt´s Seg - http://dummy.link');
  });
});
