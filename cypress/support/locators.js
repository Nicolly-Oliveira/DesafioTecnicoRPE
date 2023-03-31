const locators = {
    LOGIN: {
        USER: `//input[@name='username']`,
        PASSWORD: `//input[@name='password']`,
        BTN_LOGIN: `//button[contains(text(),'Sign in')]`,
        BTN_LOGOFF: `//input[@value='SAIR']`
    },
    MENU: {
        HOME: `//a[@title='Inicio']`,
        QA: `//a[@title='QA']`,
        CLIENTE: `//a[@title='Clientes']`,
        CLIENTE_INCLUIR: `//a[@title='Clientes']//..//a[@title='Incluir']`,
        CLIENTE_LISTAR: `//a[@title='Clientes']//..//a[@title='Listar']`,
        TRANSACAO: `//a[@title='Transações']`,
        TRANSACAO_INCLUIR: `//a[@title='Transações']//..//span[contains(.,'Incluir')]`,
        TRANSACAO_LISTAR: `//a[@title='Transações']//..//span[contains(.,'Listar')]`
    },
    BTN: {
        SALVAR: `//button[@id='botaoSalvar']`,
        CANCELAR: `//a[contains(text(),'Cancelar')]`,
        LIMPAR: `//button[@id='botaoLimpar']`,
        ALTERAR: `//a[contains(text(),'Alterar')]`,
        PESQUISAR: `//input[@value='Pesquisar']`,
        LIMPAR_BASE: `//input[@value='Limpar Base']`,
        FILTRO_BLOCK: `//body/div[@id='main']/div[@id='content']/div[1]/form[2]/div[1]/div[1]/div[1]/div[1]/span[1]`,
        FILTRO_ATIVO: `//body/div[@id='main']/div[@id='content']/div[1]/form[2]/div[1]/div[1]/div[2]/div[1]/span[1]/i[1]`,
        VISUALIZAR: nome => `//tbody/tr[contains(.,'${nome}')]/td/a[@class='btn btn-sm btn-primary']`,
        EXCLUIR: nome => `//tbody/tr[contains(.,'${nome}')]/td/a[@class='btn btn-sm btn-danger']`
    },
    CLIENTE: {
        NOME: `//input[@id='nome']`,
        CPF: `//input[@id='cpf']`,
        STATUS: `//select[@id='status']`,
        SALDO: `//input[@id='saldoCliente']`,
    },
    LISTAR_CLIENTE: {
        NOME_PESQUISA: `//body/div[@id='main']/div[@id='content']/div[1]/form[2]/div[1]/fieldset[1]/div[1]/div[1]/div[1]/input[1]`,
        DATA_DE_VALIDADE: `//input[@id='calendario_input']`,
        NOME_TABELA: nome => `//tbody/tr/td[contains(.,'${nome}')]`,
        CPF_TABELA: nome => `//tbody/tr/td[contains(.,'${nome}')]/following-sibling::td[1]`,
        SALDO_TABELA: nome => `//tbody/tr/td[contains(.,'${nome}')]/following-sibling::td[2]`,
        VALIDADE_TABELA: nome => `//tbody/tr/td[contains(.,'${nome}')]/following-sibling::td[3]`,
        CLIENTE_ATIVO: `//tbody/tr[@class='success']`,
        CLIENTE_BLOCK: `//tbody/tr[@class='danger']`,
        VALIDAR_STATUS: nome => `//td[contains(text(),'${nome}')]/ancestor::tr`
    },

    TRANSACAO: {
        CLIENTE: `//select[@id='cliente']`,
        VALOR: `//input[@id='valorTransacao']`,
    },
    LISTAR_TRANSACAO: {
        NOME_TABELA: nome => `//tbody/tr[contains(.,'${nome}')]`,
        CPF_TABELA: cpf => `//tbody/tr[contains(.,'${cpf}')]/td[2]`,
        DATA_TABELA: data => `//tbody/tr[contains(.,'${data}')]/td[3]`,
        VALOR_TABELA: valor => `//tbody/tr[contains(.,'${valor}')]/td[4]`,
    },
    MESSAGE: {
        SUCCESS_LOGIN: `//h1[contains(text(),'Bem vindo ao Desafio')]`,
        SUCCESS_INCLUIR_CLIENTE: `//strong[contains(text(),'Cliente salvo com sucesso')]`,
        SUCCESS_INCLUIR_TRANSACAO: `//strong[contains(text(),'Venda realizada com sucesso')]`,
        ERRO_INCLUIR_TRANSACAO: `//strong[contains(text(),'Venda não realizada, saldo insuficiente')]`,
        ERRO_LOGIN: `//label[contains(text(),'Credenciais inválidas')]`
    },
    
}

export default locators;