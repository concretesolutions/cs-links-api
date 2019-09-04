const contacts = '* Contas a Pagar (11) 5188-1851 \n'
               + '* CIO  \n'
               + '  - RJ (21) 4003-4883 \n'
               + '  - SP (11) 5188-3011 \n'
               + '* Departamento Pessoal \n'
               + '  - admpessoal.brasil@accenture.com\n'
               + '  - (11) 5188-3244\n'
               + '  - (21) 4501-9244\n'
               + '  - (41) 3014-2980\n'
               + '* It´s Seg (Planos de Saúde & Dental) \n'
               + '  - (11) 5188-1908 \n'
               + '  - atendimento.accenture@itsseg.com';


module.exports = {
  contatos: function(req, res) {
    res.send(contacts);
  },
};
