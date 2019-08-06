const expect = require('chai').expect;

const {links} = require('../../routes/api');
const {messageBuilder} = require('../../helper/utils');
const reqWithUser = {
  query: {
    user_name: 'John Doe',
  },
};

const reqWithoutUser = {
  query: {
  },
};

const res = {
  sendCalledWith: '',
  send: function(arg) {
    this.sendCalledWith = arg;
  },
};

const callExpectation = function(request, response) {
  links(request, response);
  expect(response.sendCalledWith).to
      .equal(messageBuilder(request.query.user_name, request.query.text));
};

describe('Api Route', function() {
  describe('Links() function with user defined', function() {
    it('Should respond all Links as default', function() {
      const newReq = reqWithUser;
      callExpectation(newReq, res);
    });
    it('Should respond all Links with text todos', function() {
      const newReq = reqWithUser;
      newReq.query.text = 'todos';
      callExpectation(newReq, res);
    });
    it('Should respond Valores Link with text valores', function() {
      const newReq = reqWithUser;
      newReq.query.text = 'valores';
      callExpectation(newReq, res);
    });
    it('Should respond Guia de Sobrevivência Link with text guia', function() {
      const newReq = reqWithUser;
      newReq.query.text = 'guia';
      callExpectation(newReq, res);
    });
    it('Should respond Viagens Link with texts viagem or viagens', function() {
      const newReq = reqWithUser;
      newReq.query.text = 'viagem';
      callExpectation(newReq, res);
      newReq.query.text = 'viagens';
      callExpectation(newReq, res);
    });
    it('Should respond Salário e Benefícios Link with texts salário or salario'
        , function() {
          const newReq = reqWithUser;
          newReq.query.text = 'salário';
          callExpectation(newReq, res);
          newReq.query.text = 'salario';
          callExpectation(newReq, res);
        });
    it('Should respond Salário e Benefícios Link with texts benefícios, '+
    'beneficios, benefício or beneficio', function() {
      const newReq = reqWithUser;
      newReq.query.text = 'benefícios';
      callExpectation(newReq, res);
      newReq.query.text = 'beneficios';
      callExpectation(newReq, res);
      newReq.query.text = 'benefício';
      callExpectation(newReq, res);
      newReq.query.text = 'beneficio';
      callExpectation(newReq, res);
    });
  }),
  describe('Links() function without user defined', function() {
    it('Should respond all Links as default', function() {
      const newReq = reqWithoutUser;
      callExpectation(newReq, res);
    });
    it('Should respond all Links with text todos', function() {
      const newReq = reqWithoutUser;
      newReq.query.text = 'todos';
      callExpectation(newReq, res);
    });
    it('Should respond Valores Link with text valores', function() {
      const newReq = reqWithoutUser;
      newReq.query.text = 'valores';
      callExpectation(newReq, res);
    });
    it('Should respond Guia de Sobrevivência Link with text guia', function() {
      const newReq = reqWithoutUser;
      newReq.query.text = 'guia';
      callExpectation(newReq, res);
    });
    it('Should respond Viagens Link with texts viagem or viagens', function() {
      const newReq = reqWithoutUser;
      newReq.query.text = 'viagem';
      callExpectation(newReq, res);
      newReq.query.text = 'viagens';
      callExpectation(newReq, res);
    });
    it('Should respond Salário e Benefícios Link with texts salário or salario'
        , function() {
          const newReq = reqWithoutUser;
          newReq.query.text = 'salário';
          callExpectation(newReq, res);
          newReq.query.text = 'salario';
          callExpectation(newReq, res);
        });
    it('Should respond Salário e Benefícios Link with texts benefícios, '+
    'beneficios, benefício or beneficio', function() {
      const newReq = reqWithoutUser;
      newReq.query.text = 'benefícios';
      callExpectation(newReq, res);
      newReq.query.text = 'beneficios';
      callExpectation(newReq, res);
      newReq.query.text = 'benefício';
      callExpectation(newReq, res);
      newReq.query.text = 'beneficio';
      callExpectation(newReq, res);
    });
  });
});
