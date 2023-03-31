/// <reference types="cypress"/>

import locators from '../support/locators'
import '../support/commands'

describe('Validar a obrigatoriedade dos campos com *',
  {
    env: {
      user: 'admin',
      password: 'admin',
      nomeClienteAtivo: 'Nicolly Oliveira',
      cpfClienteAtivo: '701.080.694-27',
      nomeClienteInativo: 'Natalice Oliveira',
      cpfClienteInativo: '570.513.054-68',
      statusAtivo: 'Ativo',
      statusInativo: 'Inativo',
      saldo: '100.00'
    },
  }, () => {

    beforeEach('Fazer login, validar login, limpar base e realizar cadastro de cliente ativo e inativo', () => {
        cy.login(Cypress.env('user'), Cypress.env('password'));
        cy.validarSucessoLogin();
        cy.limparBaseClientes();
        cy.cadastrarClienteAtivo(Cypress.env('nomeClienteAtivo'), Cypress.env('cpfClienteAtivo'), Cypress.env('statusAtivo'), Cypress.env('saldo'));
        cy.validarSucessoCadastroCliente();
        cy.cadastrarClienteInativo(Cypress.env('nomeClienteInativo'), Cypress.env('cpfClienteInativo'), Cypress.env('statusInativo'), Cypress.env('saldo'));
        cy.validarSucessoCadastroCliente();
    })

    it('Usar filtro cliente ativo', () => {
        cy.verificarFiltroClienteAtivo();
    })

    it('Usar filtro cliente inativo', () => {
        cy.verificarFiltroClienteInativo();
    })

    it('Deletar cliente', () => {
        cy.excluirCadastrarCliente(Cypress.env('nomeClienteInativo'));
    })

    it('Visualizar cliente', () => {
        cy.visualizarCadastrarCliente(Cypress.env('nomeClienteAtivo'));
    })

    afterEach('Limpar base e fazer logoff', () => {
        cy.limparBaseClientes();
        cy.logoff();
    })

})