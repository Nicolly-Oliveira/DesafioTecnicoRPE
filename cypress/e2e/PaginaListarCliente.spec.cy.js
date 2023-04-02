/// <reference types="cypress"/>

import locators from '../support/locators'
import '../support/commandsLogin'
import '../support/commandsTelas'
import '../support/commandsCliente'
import '../support/commandsTransacao'
import '../support/commandsValidar'

describe('Validar funcionalidades da pagina de listar clientes',
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
        cy.wait(3000)
        cy.cadastrarClienteInativo(Cypress.env('nomeClienteInativo'), Cypress.env('cpfClienteInativo'), Cypress.env('statusInativo'), Cypress.env('saldo'));
        cy.validarSucessoCadastroCliente();
        cy.wait(3000)
    })

    it('Usar filtro cliente ativo', () => {
        cy.verificarFiltroClienteAtivo();
    })

    it('Usar filtro cliente inativo', () => {
        cy.verificarFiltroClienteInativo();
    })

    it('Deletar cliente', () => {
        cy.excluirCadastroCliente(Cypress.env('nomeClienteInativo'));
    })

    afterEach('Limpar base e fazer logoff', () => {
        cy.limparBaseClientes();
        cy.logoff();
    })

})