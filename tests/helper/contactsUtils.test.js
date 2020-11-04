/* eslint-disable no-undef */
require('dotenv').config({ path: 'mocha.env' });
const { expect } = require('chai');

const contactsUtils = require('../../helper/contactsUtils');

describe('Contact Utils', () => {
  it('should return Contas a Pagar contact', () => {
    expect(contactsUtils.messageBuilder('contas'))
      .equal(`Olá, seguem os contatos:\nContas a Pagar - ${process.env.CONTACT_CONTAS}`);
  });
  it('should return cio contact', () => {
    expect(contactsUtils.messageBuilder('cio'))
      .equal(`Olá, seguem os contatos:\nCIO - ${process.env.CONTACT_CIO}`);
    expect(contactsUtils.messageBuilder('CIO'))
      .equal(`Olá, seguem os contatos:\nCIO - ${process.env.CONTACT_CIO}`);
  });
  it('should return Departamento Pessoal contact', () => {
    expect(contactsUtils.messageBuilder('departamento pessoal'))
      .equal(`Olá, seguem os contatos:\nDepartamento Pessoal - ${process.env.CONTACT_DP}`);
    expect(contactsUtils.messageBuilder('dp'))
      .equal(`Olá, seguem os contatos:\nDepartamento Pessoal - ${process.env.CONTACT_DP}`);
  });
  it('should return myTe contact', () => {
    expect(contactsUtils.messageBuilder('myte'))
      .equal(`Olá, seguem os contatos:\nAtendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}`);
    expect(contactsUtils.messageBuilder('expenses'))
      .equal(`Olá, seguem os contatos:\nAtendimento Time & Expenses (10 às 16h) - ${process.env.CONTACT_MYTE}`);
  });
  it('should return ASOC contact', () => {
    expect(contactsUtils.messageBuilder('asoc'))
      .equal(`Olá, seguem os contatos:\nASOC - ${process.env.CONTACT_ASOC}`);
  });
  it('should return It´s Seg contact', () => {
    expect(contactsUtils.messageBuilder('itseg'))
      .equal(`Olá, seguem os contatos:\nIt´s Seg - ${process.env.CONTACT_ITSEG}`);
    expect(contactsUtils.messageBuilder('itSeg'))
      .equal(`Olá, seguem os contatos:\nIt´s Seg - ${process.env.CONTACT_ITSEG}`);
    expect(contactsUtils.messageBuilder('planos'))
      .equal(`Olá, seguem os contatos:\nIt´s Seg - ${process.env.CONTACT_ITSEG}`);
  });
});
