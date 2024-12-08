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

  it('second test', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //theory
    //get() - find elements on the page by locator globally
    //find() - find child elements by locator
    //contains() - find HTML text and by text and locator

    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')
    cy.contains('nb-card', 'Horizontal form').find('button')
    cy.contains('nb-card', 'Horizontal form').contains('Sign in')


    // cypress chain and DOM
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()
  })

  it.only('save subject of the command', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

    //You can't do things like this in cypress
    // const usingTheGrid = cy.contains('nb-card', 'Using the Grid');
    // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
    // usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')

    //cypress alias
    cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
    cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

    //cypress then() method
    cy.contains('nb-card', 'Using the Grid').then(usingTheGrid => {
      cy.wrap(usingTheGrid).find('[for="inputEmail1"]').should('contain', 'Email')
      cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain', 'Password')
    })
  } )

})
