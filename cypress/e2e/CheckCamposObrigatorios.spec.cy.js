/// <reference types="cypress"/>

import locators from '../support/locators'
import '../support/commands'

describe('Validar a obrigatoriedade dos campos com *',
  {
    env: {
      user: 'admin',
      password: 'admin',
      nome: '',
      cpf: '',
      statusAtivo: 'Ativo',
      saldo: '100.00'
    },
  }, () => {

    beforeEach('Fazer login, validar login, limpar base e realizar cadastro de cliente ativo', () => {
        cy.login(Cypress.env('user'), Cypress.env('password'));
        cy.validarSucessoLogin();
        cy.limparBaseClientes();
        cy.cadastrarClienteAtivo(Cypress.env('nome'), Cypress.env('cpf'), Cypress.env('statusAtivo'), Cypress.env('saldo'));
    })

  it('Verificar aviso de campo obrigatorio ao tentar salvar cliente sem nome e cpf', () => {
    cy.validarObrigatoriedadeCampoNome();
    cy.validarObrigatoriedadeCampoCPF();
  })

  it('Verficar o botão salvar desativado, quando o campo valor não foi preenchido', () => {
    cy.cadastrarTransacaoSemValor();
  })
  

})