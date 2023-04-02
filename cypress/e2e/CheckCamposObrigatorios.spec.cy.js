/// <reference types="cypress"/>

import locators from '../support/locators'
import '../support/commandsLogin'
import '../support/commandsTelas'
import '../support/commandsCliente'
import '../support/commandsTransacao'
import '../support/commandsValidar'

describe('Validar a obrigatoriedade dos campos com *',
  {
    env: {
      user: 'admin',
      password: 'admin',
      nome: 'Nicolly Oliveira',
      cpf: '701.080.694-12',
      statusAtivo: 'Ativo',
      saldo: '100.00'
    },
  }, () => {

    beforeEach('Fazer login, validar login, limpar base e realizar cadastro de cliente ativo', () => {
        cy.login(Cypress.env('user'), Cypress.env('password'));
        cy.validarSucessoLogin();
        cy.limparBaseClientes();
        cy.cadastrarClienteAtivo(Cypress.env('nome'), Cypress.env('cpf'), Cypress.env('statusAtivo'), Cypress.env('saldo'));
        cy.wait(3000)
    })

    it('Verificar aviso de campo obrigatorio ao tentar salvar cliente sem nome e cpf', () => {
        cy.cadastrarClienteSemNomeECPF(Cypress.env('statusAtivo'), Cypress.env('saldo'));
        cy.validarObrigatoriedadeCampoNome();
        cy.validarObrigatoriedadeCampoCPF();
    })

    it('Verficar o botão salvar desativado, quando o campo valor não foi preenchido', () => {
        cy.cadastrarTransacaoSemValor();
    })

    it('Verificar a obrigatoriedade do campo nome e data para pesquisar clientes', () => {
        cy.perquisarClienteSemFiltro();
    })
  
    afterEach('Limpar base e fazer logoff', () => {
        cy.limparBaseClientes();
        cy.logoff();
    })
})