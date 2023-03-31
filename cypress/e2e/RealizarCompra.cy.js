/// <reference types="cypress"/>

import locators from '../support/locators'
import '../support/commands'

describe('Fluxo realizar compra', 
  {
    env: {
      user: 'admin',
      password: 'admin',
      nome: 'Nicolly Oliveira',
      cpf: '701.080.694-27',
      status: 'Ativo',
      saldo: '100.00',
      valorADebitarIgualSaldo: '100.00',
      valorADebitarMenorSaldo: '30.00',
      valorADebitarMaiorSaldo: '150.00' 
    },
  }, () => {

  beforeEach('Realizar cadastro', () => {
    cy.login(Cypress.env('user'), Cypress.env('password'));
    cy.validarSucessoLogin();
    cy.limparBaseClientes();
    cy.wait(3000);
    cy.cadastrarClienteAtivo(Cypress.env('nome'), Cypress.env('cpf'), Cypress.env('status'), Cypress.env('saldo'));
  })

  it('Realizar compra com saldo IGUAL ao valor da compra', () => {
    cy.cadastrarTransacaoComValorIgualSaldo(Cypress.env('nome'), Cypress.env('valorADebitarIgualSaldo'));
    cy.verificarDebitoValorIgual(Cypress.env('nome'), Cypress.env('saldo'), Cypress.env('valorADebitarIgualSaldo'));
    
  })

  it('Realizar compra com saldo MAIOR ao valor da compra', () => {
    cy.cadastrarTransacaoComValorMenorSaldo(Cypress.env('nome'), Cypress.env('valorADebitarMenorSaldo'));
    cy.verificarDebitoValorMenor(Cypress.env('nome'), Cypress.env('saldo'), Cypress.env('valorADebitarMenorSaldo'));
    
  })

  it('Realizar compra com saldo MENOR ao valor da compra', () => {
    cy.cadastrarTransacaoComValorMaiorSaldo(Cypress.env('nome'), Cypress.env('valorADebitarMaiorSaldo'));    
  })

  afterEach('Realizar cadastro', () => {
    cy.limparBaseClientes();
    cy.logoff();
  })

})