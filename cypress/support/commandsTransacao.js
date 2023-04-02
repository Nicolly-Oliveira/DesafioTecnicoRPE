import locators from './locators'
import './commandsTelas'
import './commandsValidar'

Cypress.Commands.add('cadastrarTransacaoSemValor', () => {
    cy.irParaTelaDeIncluirTransacao();
    cy.xpath(locators.TRANSACAO.CLIENTE).should('be.visible');
    cy.xpath(locators.TRANSACAO.VALOR).should('be.empty')
    cy.xpath(locators.BTN.SALVAR).should('be.visible').and('be.disabled'); 
})

Cypress.Commands.add('cadastrarTransacaoComValorIgualSaldo', (nome, valorADebitarIgualSaldo) => {
    cy.irParaTelaDeIncluirTransacao();
    cy.xpath(locators.TRANSACAO.CLIENTE).should('be.visible').select(nome).should('contain', nome)
    cy.xpath(locators.TRANSACAO.VALOR).should('be.visible').type(valorADebitarIgualSaldo).should('have.value', valorADebitarIgualSaldo)
    cy.xpath(locators.BTN.SALVAR).should('be.visible').and('not.be.disabled').click();
    cy.xpath(locators.MESSAGE.SUCCESS_INCLUIR_TRANSACAO).should('be.visible').and('contain', 'Venda realizada com sucesso'); 
})

Cypress.Commands.add('cadastrarTransacaoComValorMenorSaldo', (nome, valorADebitarMenorSaldo) => {
    cy.irParaTelaDeIncluirTransacao();
    cy.wait(3000);
    cy.xpath(locators.TRANSACAO.CLIENTE).should('be.visible').select(nome).should('contain', nome)
    cy.xpath(locators.TRANSACAO.VALOR).should('be.visible').type(valorADebitarMenorSaldo).should('have.value', valorADebitarMenorSaldo)
    cy.xpath(locators.BTN.SALVAR).should('be.visible').and('not.be.disabled').click();
    cy.xpath(locators.MESSAGE.SUCCESS_INCLUIR_TRANSACAO).should('be.visible').and('contain', 'Venda realizada com sucesso'); 
})

Cypress.Commands.add('cadastrarTransacaoComValorMaiorSaldo', (nome, valorADebitarMaiorSaldo) => {
    cy.irParaTelaDeIncluirTransacao();
    cy.wait(3000);
    cy.xpath(locators.TRANSACAO.CLIENTE).should('be.visible').select(nome).should('contain', nome)
    cy.xpath(locators.TRANSACAO.VALOR).should('be.visible').type(valorADebitarMaiorSaldo).should('have.value', valorADebitarMaiorSaldo)
    cy.xpath(locators.BTN.SALVAR).should('be.visible').and('not.be.disabled').click();
    cy.xpath(locators.MESSAGE.ERRO_INCLUIR_TRANSACAO).should('be.visible').and('contain', 'Venda não realizada, saldo insuficiente'); 
})





