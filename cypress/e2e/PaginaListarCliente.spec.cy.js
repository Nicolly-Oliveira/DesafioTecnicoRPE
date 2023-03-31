/// <reference types="cypress"/>

import locators from '../support/locators'
import '../support/commands'

describe('Validar a obrigatoriedade dos campos com *',
  {
    env: {
      user: 'admin',
      password: 'admin',
      nome: 'Nicolly Oliveira',
      cpf: '701.080.694-27',
      statusAtivo: 'Ativo',
      statusInativo: 'Ativo',
      saldo: '100.00'
    },
  }, () => {

    beforeEach('Fazer login, validar login, limpar base e realizar cadastro de cliente ativo e inativo', () => {
        cy.login(Cypress.env('user'), Cypress.env('password'));
        cy.validarSucessoLogin();
        cy.limparBaseClientes();
        cy.cadastrarClienteAtivo(Cypress.env('nome'), Cypress.env('cpf'), Cypress.env('statusAtivo'), Cypress.env('saldo'));
        cy.cadastrarClienteInativo(Cypress.env('nome'), Cypress.env('cpf'), Cypress.env('statusInativo'), Cypress.env('saldo'));
    })

  it('Usar filtro cliente ativo', () => {
    cy.verificarFiltroClienteAtivo();
  })

  it('Usar filtro cliente inativo', () => {
    cy.verificarFiltroClienteInativo();
  })

  it('Deletar cliente', () => {
    cy.excluirCadastrarCliente(Cypress.env('nome'));
  })

  it('Visualizar cliente', () => {
    cy.visualizarCadastrarCliente(Cypress.env('nome'));
  })

})