import locators from './locators'
import './commandsTelas'
import './commandsValidar'


Cypress.Commands.add('cadastrarClienteAtivo', (nome, cpf, status, saldo) => {
    cy.irParaTelaDeIncluirCliente();
    cy.xpath(locators.CLIENTE.NOME).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.CLIENTE.CPF).should('be.visible').type(cpf).and('have.value', cpf);
    cy.xpath(locators.CLIENTE.STATUS).should('be.visible').select(status).should('have.value', 'true')
    cy.xpath(locators.CLIENTE.SALDO).should('be.visible').type(saldo).should('have.value', saldo);
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
})


Cypress.Commands.add('cadastrarClienteInativo', (nome, cpf, status, saldo) => {
    cy.irParaTelaDeIncluirCliente();
    cy.xpath(locators.CLIENTE.NOME).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.CLIENTE.CPF).should('be.visible').type(cpf).and('have.value', cpf);
    cy.xpath(locators.CLIENTE.STATUS).should('be.visible').select(status).should('have.value', 'false')
    cy.xpath(locators.CLIENTE.SALDO).should('be.visible').type(saldo).should('have.value', saldo);
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
})

Cypress.Commands.add('cadastrarClienteSemNomeECPF', (status, saldo) => {
    cy.irParaTelaDeIncluirCliente();
    cy.xpath(locators.CLIENTE.NOME).should('be.visible').should('be.empty');
    cy.xpath(locators.CLIENTE.CPF).should('be.visible').should('be.empty');
    cy.xpath(locators.CLIENTE.STATUS).should('be.visible').select(status).should('have.value', 'true')
    cy.xpath(locators.CLIENTE.SALDO).should('be.visible').type(saldo).should('have.value', saldo);
    cy.xpath(locators.BTN.SALVAR).should('be.visible').click();
})

Cypress.Commands.add('verificarFiltroClienteAtivo', () => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.BTN.FILTRO_ATIVO).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.TABELA_CLIENTES)
        .each(function($row, index, $rows){
            cy.wrap($row).should('have.class', 'success').and('not.have.class', 'danger');
        })
})

Cypress.Commands.add('verificarFiltroClienteInativo', (nome, cpf, status, saldo) => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.BTN.FILTRO_ATIVO).should('be.visible').click();
    var val = [];
    cy.xpath(locators.LISTAR_CLIENTE.TABELA_CLIENTES)
    cy.xpath(locators.LISTAR_CLIENTE.TABELA_CLIENTES)
        .each(function($row, index, $rows){
            cy.wrap($row).should('have.class', 'danger').and('not.have.class', 'success');
        })
}) 

Cypress.Commands.add('excluirCadastroCliente', (nome) => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.BTN.EXCLUIR(nome)).should('be.visible').click();
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_TABELA(nome)).should('not.exist');
})

Cypress.Commands.add('perquisarClienteSemFiltro', () => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').and('be.empty');
    cy.xpath(locators.LISTAR_CLIENTE.DATA_DE_VALIDADE).should('be.visible').and('be.empty');
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.TABELA_CLIENTES).should('not.exist');
})

Cypress.Commands.add('visualizarCadastrarCliente', (nome) => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.BTN.VISUALIZAR(nome)).should('be.visible').click();
    cy.xpath(locators.CLIENTE.NOME).should('be.visible').and('have.value', nome);
    cy.xpath(locators.CLIENTE.STATUS).should('be.visible').and('have.value', 'true')
})

Cypress.Commands.add('limparBaseClientes', () => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.BTN.LIMPAR_BASE).should('be.visible').click();
    
})

Cypress.Commands.add('verificarDebitoValorIgual', (nome, saldo, valorADebitarIgualSaldo) => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_TABELA(nome)).should('be.visible').and('contain', nome);
    let saldoFinal = saldo - valorADebitarIgualSaldo;
    cy.xpath(locators.LISTAR_CLIENTE.SALDO_TABELA(nome)).should('be.visible').and('contain', saldoFinal);    
})

Cypress.Commands.add('verificarDebitoValorMenor', (nome, saldo, valorADebitarMenorSaldo) => {
    cy.irParaTelaDeListarCliente();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_PESQUISA).should('be.visible').type(nome).and('have.value', nome);
    cy.xpath(locators.BTN.PESQUISAR).should('be.visible').click();
    cy.xpath(locators.LISTAR_CLIENTE.NOME_TABELA(nome)).should('be.visible').and('contain', nome);
    let saldoFinal = saldo - valorADebitarMenorSaldo;
    cy.xpath(locators.LISTAR_CLIENTE.SALDO_TABELA(nome)).should('be.visible').and('contain', saldoFinal);    
})




