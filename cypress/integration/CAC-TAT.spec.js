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

        cy.contains('form .button', 'Enviar')
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

        cy.contains('form .button', 'Enviar')
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

        cy.contains('form .button', 'Enviar')
            .click()

        cy.contains('Valide os campos obrigatórios!')
    })

    //Exercicio 4
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
        cy.fillMandatoryFieldsExceptPhoneField()
    })

    //Exercícios 5
    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName')
            .type('Bruno')
            .should('have.value', 'Bruno')
            .clear()
            .should('have.value', '')

        cy.get('#lastName')
            .type('Gomes')
            .should('have.value', 'Gomes')
            .clear()
            .should('have.value', '')

        cy.get('#email')
            .type('emailteste@teste.com')
            .should('have.value', 'emailteste@teste.com')
            .clear()
            .should('have.value', '')

        cy.get('#phone')
            .type('1234567890')
            .should('have.value', '1234567890')
            .clear()
            .should('have.value', '')
    })

    //Exercício 6
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
        cy.contains('form .button', 'Enviar')
            .click()
        cy.get('.error')
            .should('be.visible')
    })

    //Exercício 7
    it('envia o formuário com sucesso usando um comando customizado', () => {
        cy.fillMandatoryFieldsAndSubmit()
    })

    //Exercício 8
    it('seleciona um produto (YouTube) por seu texto', () => {
        cy.get('select#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })

    //Exercício 9
    it('seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('select#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    //Exercício 10
    it('seleciona um produto (Blog) por seu índice', () => {
        cy.get('select')
            .select(1)
            .should('have.value', 'blog')
    })

    //Exercício 11
    it('marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"]')
            .check('feedback')
            .should('be.checked')
    })

    //Exercício 12
    it('marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each((radio) => {
                cy.wrap(radio)
                    .check()
                    .should('be.checked')
            })
    })

    //Exercício 13
    Cypress._.times(5, () => {
        it('marca ambos checkboxes, depois desmarca o último', () => {
            cy.get('input[type="checkbox"]')
                .check()
                .should('be.checked')
                .last()
                .uncheck()
        })
    })

    //Exercício 14
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.fillMandatoryFieldsExceptPhoneField()
    })

    //Exercicio 15
    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json')
            .then(file => {
                expect(file[0].files[0].name).to.equal('example.json') //Verfica o nome do primeiro arquivo do selectFile
            })
    })

    //Exercicio 16
    it('seleciona um arquivo simulando um drag-and-drop', () => {
        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .then(file => {
                expect(file[0].files[0].name).to.equal('example.json')
            })
    })

    //Exercício 17
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json', { encoding: null }).as('exampleFile')
        cy.get('input[type="file"]')
            .selectFile('@exampleFile')
            .then(sampleFile => {
                console.log(sampleFile)
                expect(sampleFile[0].files[0].name).to.equal('example.json')
            })
    })

    //Exercício 18
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a')
            .should('have.attr', 'target', '_blank')
    })

    //Exercício 19
    it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target', '_blank')
            .click()

        cy.get('h1').contains('CAC TAT - Política de privacidade')
        //Outros tipos de validação verificando a URL da página clicada
        //cy.url().should('include', 'privacy.html')
        //cy.contains('CAC TAT - Política de privacidade').should('be.visible')
    })

    it('verifica mensagem de erro e de sucesso', () => {
        cy.clock()
        cy.fillMandatoryFieldsExceptPhoneField()
        cy.tick(3000)
        cy.get('.error')
            .should('not.be.visible')
        cy.get('#phone-checkbox')
            .uncheck()

        cy.get('.group .field')
            .clear()
        cy.fillMandatoryFieldsAndSubmit()
        cy.tick(3000)
        cy.get('.success')
            .should('not.be.visible')
    })

    it.only('exibe e esconde as mensagens de sucesso usando o .invoke()', () => {
        cy.get('.success')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .and('contain', "Mensagem enviada com sucesso.")
            .invoke('hide')
            .should('not.be.visible')

    })

    it.only('exibe e esconde as mensagens de erro usando o .invoke()', () => {
        cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', "Valide os campos obrigatórios!")
        .invoke('hide')
        .should('not.be.visible')

    })
})