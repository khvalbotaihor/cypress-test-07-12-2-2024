describe('', () => {

  it('', () => {
    cy.visit('https://radogado.github.io/shadow-dom-demo/')
    cy.get('#app').shadow().find('#container').should('have.text', 'Content in the shadow, without style leaksDynamically generated content')
  })


 })
