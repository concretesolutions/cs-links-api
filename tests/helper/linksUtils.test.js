/* eslint-disable no-undef */
require('dotenv').config({ path: 'mocha.env' });
const { expect } = require('chai');

const linksUtils = require('../../helper/linksUtils');

describe('Links Utils', () => {
  it('should return Guia de Sobrevivência link', () => {
    expect(linksUtils.messageBuilder('guia'))
      .equal(`Olá, seguem os links:\nGuia de Sobrevivência - ${process.env.URL_GUIA}`);
  });
  it('should return Valores link', () => {
    expect(linksUtils.messageBuilder('valores'))
      .equal(`Olá, seguem os links:\nValores - ${process.env.URL_VALORES}`);
  });
  it('should return Departamento Pessoal link', () => {
    expect(linksUtils.messageBuilder('departamento pessoal'))
      .equal(`Olá, seguem os links:\nDepartamento Pessoal - ${process.env.URL_DP}`);
    expect(linksUtils.messageBuilder('pessoal'))
      .equal(`Olá, seguem os links:\nDepartamento Pessoal - ${process.env.URL_DP}`);
    expect(linksUtils.messageBuilder('pessoas'))
      .equal(`Olá, seguem os links:\nDepartamento Pessoal - ${process.env.URL_DP}`);
    expect(linksUtils.messageBuilder('dp'))
      .equal(`Olá, seguem os links:\nDepartamento Pessoal - ${process.env.URL_DP}`);
  });
  it('should return Salário & Benefícios link', () => {
    expect(linksUtils.messageBuilder('benefício'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
    expect(linksUtils.messageBuilder('beneficio'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
    expect(linksUtils.messageBuilder('benefícios'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
    expect(linksUtils.messageBuilder('beneficios'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
    expect(linksUtils.messageBuilder('salario'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
    expect(linksUtils.messageBuilder('salarios'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
    expect(linksUtils.messageBuilder('salário'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
    expect(linksUtils.messageBuilder('salários'))
      .equal(`Olá, seguem os links:\nSalário & Benefícios - ${process.env.URL_SALARIO}`);
  });
  it('should return Ponto Eletrônico & Horas Extras link', () => {
    expect(linksUtils.messageBuilder('ponto'))
      .equal(`Olá, seguem os links:\nPonto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`);
    expect(linksUtils.messageBuilder('ponto eletronico'))
      .equal(`Olá, seguem os links:\nPonto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`);
    expect(linksUtils.messageBuilder('ponto eletrônico'))
      .equal(`Olá, seguem os links:\nPonto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`);
    expect(linksUtils.messageBuilder('horas'))
      .equal(`Olá, seguem os links:\nPonto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`);
    expect(linksUtils.messageBuilder('horas extras'))
      .equal(`Olá, seguem os links:\nPonto Eletrônico & Horas Extras - ${process.env.URL_PONTO}`);
  });
  it('should return Eventos & Treinamentos link', () => {
    expect(linksUtils.messageBuilder('evento'))
      .equal(`Olá, seguem os links:\nEventos & Treinamentos - ${process.env.URL_EVENTOS}`);
    expect(linksUtils.messageBuilder('eventos'))
      .equal(`Olá, seguem os links:\nEventos & Treinamentos - ${process.env.URL_EVENTOS}`);
    expect(linksUtils.messageBuilder('treinamento'))
      .equal(`Olá, seguem os links:\nEventos & Treinamentos - ${process.env.URL_EVENTOS}`);
    expect(linksUtils.messageBuilder('treinamentos'))
      .equal(`Olá, seguem os links:\nEventos & Treinamentos - ${process.env.URL_EVENTOS}`);
  });
  it('should return Materiais Padrão link', () => {
    expect(linksUtils.messageBuilder('padrão'))
      .equal(`Olá, seguem os links:\nMateriais Padrão - ${process.env.URL_MATERIAL}`);
    expect(linksUtils.messageBuilder('padrao'))
      .equal(`Olá, seguem os links:\nMateriais Padrão - ${process.env.URL_MATERIAL}`);
    expect(linksUtils.messageBuilder('material'))
      .equal(`Olá, seguem os links:\nMateriais Padrão - ${process.env.URL_MATERIAL}`);
    expect(linksUtils.messageBuilder('materiais'))
      .equal(`Olá, seguem os links:\nMateriais Padrão - ${process.env.URL_MATERIAL}`);
    expect(linksUtils.messageBuilder('apresentacao'))
      .equal(`Olá, seguem os links:\nMateriais Padrão - ${process.env.URL_MATERIAL}`);
    expect(linksUtils.messageBuilder('apresentação'))
      .equal(`Olá, seguem os links:\nMateriais Padrão - ${process.env.URL_MATERIAL}`);
    expect(linksUtils.messageBuilder('apresentações'))
      .equal(`Olá, seguem os links:\nMateriais Padrão - ${process.env.URL_MATERIAL}`);
  });
  it('should return Malote link', () => {
    expect(linksUtils.messageBuilder('malote'))
      .equal(`Olá, seguem os links:\nMalote - ${process.env.URL_MALOTE}`);
    expect(linksUtils.messageBuilder('malotes'))
      .equal(`Olá, seguem os links:\nMalote - ${process.env.URL_MALOTE}`);
  });
  it('should return Reembolsos & Adiantamentos link', () => {
    expect(linksUtils.messageBuilder('reembolso'))
      .equal(`Olá, seguem os links:\nReembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}`);
    expect(linksUtils.messageBuilder('Reembolsos'))
      .equal(`Olá, seguem os links:\nReembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}`);
    expect(linksUtils.messageBuilder('adiantamento'))
      .equal(`Olá, seguem os links:\nReembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}`);
    expect(linksUtils.messageBuilder('adiantamentos'))
      .equal(`Olá, seguem os links:\nReembolsos & Adiantamentos - ${process.env.URL_REEMBOLSO}`);
  });
  it('should return Viagens link', () => {
    expect(linksUtils.messageBuilder('viagem'))
      .equal(`Olá, seguem os links:\nViagens - ${process.env.URL_VIAGENS}`);
    expect(linksUtils.messageBuilder('viagens'))
      .equal(`Olá, seguem os links:\nViagens - ${process.env.URL_VIAGENS}`);
  });
  it('should return Tutorial Expenses link', () => {
    expect(linksUtils.messageBuilder('expenses'))
      .equal(`Olá, seguem os links:\nTutorial Expenses - ${process.env.URL_EXPENSES}`);
    expect(linksUtils.messageBuilder('expense'))
      .equal(`Olá, seguem os links:\nTutorial Expenses - ${process.env.URL_EXPENSES}`);
    expect(linksUtils.messageBuilder('despesas'))
      .equal(`Olá, seguem os links:\nTutorial Expenses - ${process.env.URL_EXPENSES}`);
    expect(linksUtils.messageBuilder('despesa'))
      .equal(`Olá, seguem os links:\nTutorial Expenses - ${process.env.URL_EXPENSES}`);
  });
  it('should return Tutorial MyTe link', () => {
    expect(linksUtils.messageBuilder('myte'))
      .equal(`Olá, seguem os links:\nTutorial MyTe - ${process.env.URL_MYTE}`);
    expect(linksUtils.messageBuilder('timesheet'))
      .equal(`Olá, seguem os links:\nTutorial MyTe - ${process.env.URL_MYTE}`);
  });
  it('should return Talks Internas link', () => {
    expect(linksUtils.messageBuilder('talks'))
      .equal(`Olá, seguem os links:\nTalks Internas - ${process.env.URL_TALKS}`);
    expect(linksUtils.messageBuilder('gravações'))
      .equal(`Olá, seguem os links:\nTalks Internas - ${process.env.URL_TALKS}`);
    expect(linksUtils.messageBuilder('gravacoes'))
      .equal(`Olá, seguem os links:\nTalks Internas - ${process.env.URL_TALKS}`);
    expect(linksUtils.messageBuilder('gravacao'))
      .equal(`Olá, seguem os links:\nTalks Internas - ${process.env.URL_TALKS}`);
    expect(linksUtils.messageBuilder('gravação'))
      .equal(`Olá, seguem os links:\nTalks Internas - ${process.env.URL_TALKS}`);
  });
});
