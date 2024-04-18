it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')
        .contains('CAC TAT - Política de privacidade')
        .should('be.visible')
})