import locators from './locators'

Cypress.Commands.add('validarSucessoLogin', () => {
    cy.xpath(locators.MESSAGE.SUCCESS_LOGIN).should('be.visible').and('contain', 'Bem vindo ao Desafio');
})

Cypress.Commands.add('validarFalhaLogin', () => {
    cy.xpath(locators.MESSAGE.ERRO_LOGIN).should('be.visible').and('contain', 'Credenciais inválidas');
})

Cypress.Commands.add('validarSucessoCadastroCliente', () => {
    cy.xpath(locators.MESSAGE.SUCCESS_INCLUIR_CLIENTE).should('be.visible').and('contain', 'Cliente salvo com sucesso');
})

Cypress.Commands.add('validarObrigatoriedadeCampoNome', () => {
    cy.xpath(locators.MESSAGE.CAMPO_OBRIGATORIO_NOME_INCLUIR_CLIENTE).should('be.visible').and('contain', 'Campo Obrigatório');
})

Cypress.Commands.add('validarObrigatoriedadeCampoCPF', () => {
    cy.xpath(locators.MESSAGE.CAMPO_OBRIGATORIO_CPF_INCLUIR_CLIENTE).should('be.visible').and('contain', 'Campo Obrigatório');
})