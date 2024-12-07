/// <reference types="cypress" />

describe('First test suite', () => {

  it('first test', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //by tag name
    cy.get('input')
    //by id
    cy.get('#inputEmail1')
    //by class name
    cy.get('.input-full-width')
    //by attribute name
    cy.get('[fullwidth]')
    //by attribute and value
    cy.get('[placeholder="Email"]')
    //by entire class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')
    //by 2 attributes
    cy.get('[fullwidth][placeholder="Email"]')
    //by tag attributes and by class
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
    //by cypress testid
    cy.get('[data-cy="imputEmail1"]')
  })


})
