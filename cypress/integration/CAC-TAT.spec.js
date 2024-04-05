///<reference types ="Cypress"/>
describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function () {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName')
            .type('Bruno')

        cy.get('#lastName')
            .type('Gomes')

        cy.get('#email')
            .type('emailteste@teste.com')

        cy.get('#open-text-area')
            .type('Lorem ipsum dolor sit amet.')

        cy.get('form .button')
            .click()

        cy.get('.success').should('be.visible')

    })
})
