const guiaLink = 'Guia de Sobrevivência - https://blog.accenture.com/concrete/';
const valoresLink = 'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/';
const salariosLink = 'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';
const materiaisLink = 'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/'
const viagensLink = 'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/';
const linkSelector = function(keyWord) {

  if(!keyWord || keyWord.match(/^todos$/)) {
    return 'Essa key word não está mapeada, '+
          'mas seguem todos os links que temos mapeados no momento\n' +
          guiaLink + '\n' +
          valoresLink + '\n' +
          salariosLink + '\n' +
          materiaisLink + '\n' +
          viagensLink;
  }
  if(keyWord.match(/^guia$/)) {
    return guiaLink;
  }
  if(keyWord.match(/^valores$/)) {
    return valoresLink;
  }
  if(keyWord.match(/^viagem|viagens$/)) {
    return viagensLink;
  }
  if(keyWord.match(/^material|materiais|padrão|padrao|apresentação|apresentacao$/)) {
    return materiaisLink;
  }
  if(keyWord.match(/^benefício|beneficio|benefícios|beneficios|salário|salario$/)) {
    return salariosLink;
  }
};


module.exports = {
  messageBuilder: function(user, keyWord) {
    const greeting = user ?
                    'Olá ' + user + ', seguem os links:\n'
                    : 'Olá, seguem os links:\n';
    const linksFound = linkSelector(keyWord);
    return greeting + linksFound;
  },
};
