const linkSelector = function(keyWord) {
  switch (keyWord) {
    case 'guia':
      return 'Guia de Sobrevivência - https://blog.accenture.com/concrete/';
    case 'valores':
      return 'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/';
    case 'viagem':
    case 'viagens':
      return 'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/';
    case 'material':
    case 'materiais':
    case 'padrão':
    case 'padrao':
    case 'apresentação':
    case 'apresentacao':
      return 'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/';
    case 'benefício':
    case 'beneficio':
    case 'benefícios':
    case 'beneficios':
    case 'salário':
    case 'salario':
      return 'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/';
    case 'todos':
    default:
      return 'Essa key word não está mapeada, mas seguem todos os links que temos mapeados no momento \n' + 
             'Guia de Sobrevivência - https://blog.accenture.com/concrete/ \n' +
             'Valores - https://blog.accenture.com/concrete/2018/08/01/valores/ \n' +
             'Salário e Benefícios - https://blog.accenture.com/concrete/2018/08/06/salario-beneficios/ \n' +
             'Materiais Padrão - https://blog.accenture.com/concrete/2018/09/21/materiais-padrao/ \n' +
             'Viagens - https://blog.accenture.com/concrete/2018/08/06/viagens/';
  }
};

module.exports = {
  messageBuilder: function(user, keyWord) {
    const greeting = user ?
                    'Olá ' + user + ', seguem os links: \n'
                    : 'Olá, seguem os links: \n';
    const linksFound = linkSelector(keyWord);
    return greeting + linksFound;
  }
};