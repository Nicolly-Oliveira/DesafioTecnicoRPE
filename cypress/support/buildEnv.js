const buildEnv = () => {
    cy.intercept({method: 'GET', url: '/login'}, (req) => {
        req.reply({
            id: '222',
            name: 'Usuario Falso',
            token: 'Uma string que nao deveria ser aceita'
        })
    }).as('singin')
    
}

export default buildEnv