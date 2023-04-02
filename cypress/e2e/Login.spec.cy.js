/// <reference types="cypress"/>

import locators from '../support/locators'
import '../support/commandsLogin'
import '../support/commandsValidar'

describe('Pagina Login',
  {
    env: {
      user: 'admin',
      password: 'admin'
    },
  }, () => {

  it('Login com credenciais válidas', () => {
    cy.login(Cypress.env('user'), Cypress.env('password'));
    cy.validarSucessoLogin();
    cy.logoff();
  })

  it('Login com credenciais inválidas', () => {
    cy.login('adminInvalido', 'admin');
    cy.validarFalhaLogin();
    cy.login('admin', 'adminInvalido');
    cy.validarFalhaLogin();
    cy.login('adminInvalido', 'adminInvalido');
    cy.validarFalhaLogin();
  })

  it('Login sem credenciais', () => {
    cy.loginSemDados();
    cy.validarFalhaLogin();
    cy.loginSemSenha('admin');
    cy.validarFalhaLogin();
    cy.loginSemEmail('admin');
    cy.validarFalhaLogin();
  })

})