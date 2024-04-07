///<reference types ="Cypress"/>
describe('Central de Atendimento ao Cliente TAT', function () {
    beforeEach(() => {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function () {
        cy.title()
            .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    //Exercicio 1 e 2
    it('preenche os campos obrigatórios e envia o formulário', function () {
        cy.get('#firstName')
            .type('Bruno')

        cy.get('#lastName')
            .type('Gomes')

        cy.get('#email')
            .type('emailteste@teste.com')

        cy.get('#open-text-area')
            .type('Lorem ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet.', { delay: 0 })

        cy.get('form .button')
            .click()

        cy.get('.success').should('be.visible')

    })
    
    //Exercicio 3
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
        cy.get('#firstName')
            .type('Bruno')

        cy.get('#lastName')
            .type('Gomes')

        cy.get('#email')
            .type('emailteste.com')

        cy.get('#open-text-area')
            .type('Lorem ipsum dolor sit amet.')

        cy.get('form .button')
            .click()

        cy.contains('Valide os campos obrigatórios!')

    })

    //Exercicio 4
    it('validar valor vazio após inserir valores não-numericos no campo de telefone', function () {
        cy.get('#firstName')
            .type('Bruno')

        cy.get('#lastName')
            .type('Gomes')

        cy.get('#email')
            .type('email@teste.com')

        cy.get('#phone')
            .type('dsfsdfsdfsd')
            .should('have.value', '')

        cy.get('#open-text-area')
            .type('Lorem ipsum dolor sit amet.')

        cy.get('form .button')
            .click()

        cy.contains('Valide os campos obrigatórios!')

    })

    //Exercicio 5
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.get('#firstName')
            .type('Bruno')

        cy.get('#lastName')
            .type('Gomes')

        cy.get('#email')
            .type('emailteste@teste.com')
        
        cy.get('#phone-checkbox')
            .click()

        cy.get('#open-text-area')
            .type('Lorem ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet.', {delay: 0})

        cy.get('form .button')
            .click()

        cy.get('.error')
            .should('be.visible')
    })

    //Exercício 6
    it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.get('form .button')
        .click()

        cy.get('.error')
        .should('be.visible')
    })

})
