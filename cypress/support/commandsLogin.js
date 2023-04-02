import locators from './locators'
import './commandsTelas'
import './commandsValidar'

Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('http://54.166.20.145:9080/desafioqa');
    cy.xpath(locators.LOGIN.USER).should('be.visible').type(user);
    cy.xpath(locators.LOGIN.PASSWORD).should('be.visible').type(passwd);
    cy.xpath(locators.LOGIN.BTN_LOGIN).should('be.visible').click();
})

Cypress.Commands.add('loginSemDados', () => {
    cy.visit('http://54.166.20.145:9080/desafioqa');
    cy.xpath(locators.LOGIN.USER).should('be.visible');
    cy.xpath(locators.LOGIN.PASSWORD).should('be.visible');
    cy.xpath(locators.LOGIN.BTN_LOGIN).should('be.visible').click();
})

Cypress.Commands.add('loginSemEmail', (password) => {
    cy.visit('http://54.166.20.145:9080/desafioqa');
    cy.xpath(locators.LOGIN.USER).should('be.visible');
    cy.xpath(locators.LOGIN.PASSWORD).should('be.visible').type(password);
    cy.xpath(locators.LOGIN.BTN_LOGIN).should('be.visible').click();
})

Cypress.Commands.add('loginSemSenha', (user) => {
    cy.visit('http://54.166.20.145:9080/desafioqa');
    cy.xpath(locators.LOGIN.USER).should('be.visible').type(user);
    cy.xpath(locators.LOGIN.PASSWORD).should('be.visible');
    cy.xpath(locators.LOGIN.BTN_LOGIN).should('be.visible').click();
})

Cypress.Commands.add('logoff', () => {
    cy.xpath(locators.LOGIN.BTN_LOGOFF).click();
})



