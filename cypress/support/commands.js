import locators from './locators'

//Login
Cypress.Commands.add('login', (user, passwd) => {
    cy.visit('http://54.166.20.145:9080/desafioqa');
    cy.xpath(locators.LOGIN.USER).should('be.visible').type(user);
    cy.xpath(locators.LOGIN.PASSWORD).should('be.visible').type(passwd);
    cy.xpath(locators.LOGIN.BTN_LOGIN).should('be.visible').click();
})

Cypress.Commands.add('validarSucessoLogin', () => {
    cy.xpath(locators.MESSAGE.SUCCESS_LOGIN).should('be.visible').and('contain', 'Bem vindo ao Desafio');
})

Cypress.Commands.add('validarFalhaLogin', () => {
    cy.xpath(locators.MESSAGE.ERRO_LOGIN).should('be.visible').and('contain', 'Credenciais inválidas');
})

Cypress.Commands.add('logoff', () => {
    cy.xpath(locators.LOGIN.BTN_LOGOFF).click();
})

//Fluxo Realizar Compra
Cypress.Commands.add('cadastrarClienteAtivo', (nome, cpf, status, saldo) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_INCLUIR).should('be.visible').realHover().realTouch();
    cy.xpath(locators.CLIENTE.NOME).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.CLIENTE.CPF).should('be.visible').type(cpf).and('have.value', cpf);
    cy.xpath(locators.CLIENTE.STATUS).should('be.visible').select(status).should('have.value', 'true')
    cy.xpath(locators.CLIENTE.SALDO).should('be.visible').type(saldo).should('have.value', saldo);
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
    cy.xpath(locators.MESSAGE.SUCCESS_INCLUIR_CLIENTE).should('be.visible').and('contain', 'Cliente salvo com sucesso');
})

Cypress.Commands.add('excluirCadastrarCliente', (nome) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_LISTAR).should('be.visible').realHover().realTouch();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.BTN.EXCLUIR(nome)).should('be.visible').click();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_LISTAR).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('not.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
})

Cypress.Commands.add('limparBaseClientes', () => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_LISTAR).should('be.visible').realHover().realTouch();
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.BTN.LIMPAR_BASE).should('be.visible').click();
    
})

Cypress.Commands.add('cadastrarTransacaoComValorIgualSaldo', (nome, valorADebitarIgualSaldo) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO_INCLUIR).should('be.visible').realHover().realTouch();
    cy.xpath(locators.TRANSACAO.CLIENTE).should('be.visible').select(nome).should('contain', nome)
    cy.xpath(locators.TRANSACAO.VALOR).should('be.visible').type(valorADebitarIgualSaldo).should('have.value', valorADebitarIgualSaldo)
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
    cy.xpath(locators.MESSAGE.SUCCESS_INCLUIR_TRANSACAO).should('be.visible').and('contain', 'Venda realizada com sucesso'); 
})

Cypress.Commands.add('cadastrarTransacaoComValorMenorSaldo', (nome, valorADebitarMenorSaldo) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO_INCLUIR).should('be.visible').realHover().realTouch();
    cy.wait(3000);
    cy.xpath(locators.TRANSACAO.CLIENTE).should('be.visible').select(nome).should('contain', nome)
    cy.xpath(locators.TRANSACAO.VALOR).should('be.visible').type(valorADebitarMenorSaldo).should('have.value', valorADebitarMenorSaldo)
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
    cy.xpath(locators.MESSAGE.SUCCESS_INCLUIR_TRANSACAO).should('be.visible').and('contain', 'Venda realizada com sucesso'); 
})

Cypress.Commands.add('cadastrarTransacaoComValorMaiorSaldo', (nome, valorADebitarMaiorSaldo) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO).should('be.visible').realHover();
    cy.xpath(locators.MENU.TRANSACAO_INCLUIR).should('be.visible').realHover().realTouch();
    cy.wait(3000);
    cy.xpath(locators.TRANSACAO.CLIENTE).should('be.visible').select(nome).should('contain', nome)
    cy.xpath(locators.TRANSACAO.VALOR).should('be.visible').type(valorADebitarMaiorSaldo).should('have.value', valorADebitarMaiorSaldo)
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
    cy.xpath(locators.MESSAGE.ERRO_INCLUIR_TRANSACAO).should('be.visible').and('contain', 'Venda não realizada, saldo insuficiente'); 
})

Cypress.Commands.add('verificarDebitoValorIgual', (nome, saldo, valorADebitarIgualSaldo) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_LISTAR).should('be.visible').realHover().realTouch();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_TABELA(nome)).should('be.visible').and('contain', nome);
    let saldoFinal = saldo - valorADebitarIgualSaldo;
    cy.xpath(locators.LISTAR_CLIENTE.SALDO_TABELA(nome)).should('be.visible').and('contain', saldoFinal);    
})

Cypress.Commands.add('verificarDebitoValorMenor', (nome, saldo, valorADebitarMenorSaldo) => {
    cy.xpath(locators.MENU.QA).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE).should('be.visible').realHover();
    cy.xpath(locators.MENU.CLIENTE_LISTAR).should('be.visible').realHover().realTouch();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_TABELA(nome)).should('be.visible').and('contain', nome);
    let saldoFinal = saldo - valorADebitarMenorSaldo;
    cy.xpath(locators.LISTAR_CLIENTE.SALDO_TABELA(nome)).should('be.visible').and('contain', saldoFinal);    
})




