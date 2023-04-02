import locators from './locators'

Cypress.Commands.add('irParaTelaDeIncluirCliente', () => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_INCLUIR).should('be.visible').realHover().realTouch();
})

Cypress.Commands.add('irParaTelaDeListarCliente', (nome, cpf, status, saldo) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_LISTAR).should('be.visible').realHover().realTouch();
})


Cypress.Commands.add('irParaTelaDeIncluirTransacao', (nome) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO_INCLUIR).should('be.visible').realHover().realTouch();
})

Cypress.Commands.add('irParaTelaDeListarTransacao', (nome) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO_INCLUIR).should('be.visible').realHover().realTouch();
})










