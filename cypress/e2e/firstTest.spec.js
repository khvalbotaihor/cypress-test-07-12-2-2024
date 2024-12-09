/// <reference types="cypress" />

const exp = require("constants")
const { lab } = require("d3-color")

describe('First test suite', () => {

  beforeEach('open page', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
  })

  it('first test', () => {

    // cy.visit('/')
    // cy.contains('Forms').click()
    // cy.contains('Form Layouts').click()

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
    // cy.visit('/')
    // cy.contains('Forms').click()
    // cy.contains('Form Layouts').click()

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

  it('save subject of the command', () => {
    // cy.visit('/')
    // cy.contains('Forms').click()
    // cy.contains('Form Layouts').click()

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

  it('extract text values', () => {

    //1
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    //2
    cy.get('[for="exampleInputEmail1"]').then(label => {
      const labelText = label.text()
      expect(labelText).to.equal('Email address')
      cy.wrap(label).should('contain', 'Email address')
    })

    //3
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
      expect(text).to.equal('Email address')
    })
    cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain', 'Email address')

    //4
    cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
      expect(classValue).to.equal('label')
    })

    //5 invoke property
    cy.get('#exampleInputEmail1').type('test@gmail.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@gmail.com').then(propertyValue => {
      expect(propertyValue).to.equal('test@gmail.com')
    })
  })

  it('radio button', () => {
    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
      cy.wrap(radioButtons).eq(0).check({force: true}).should('be.checked')
      cy.wrap(radioButtons).eq(1).check({force: true})
      cy.wrap(radioButtons).eq(0).should('not.be.checked')
      cy.wrap(radioButtons).eq(2).should('be.disabled')
        })
  })

})

it('checkboxes', () => {
  cy.visit('/')
  cy.contains('Modal & Overlays').click()
  cy.contains('Toastr').click()

  //cy.get('[type="checkbox"]').check({force:true})
  cy.get('[type="checkbox"]').eq(0).click({force: true})
  cy.get('[type="checkbox"]').eq(1).check({force: true})

})

it('datepicker', () => {
  function checkDate(numberOfDays){
    let date = new Date()
    date.setDate(date.getDate() + numberOfDays)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
    let futureYear = date.getFullYear()
    let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`

    cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(value => {
      console.log(`future month - ${futureMonth} and future year - ${futureYear} and ${value}`)
      if(!value.includes(futureMonth) || !value.includes(futureYear)){
        cy.get('[data-name="chevron-right"]').click()
        checkDate(numberOfDays)
      }else{
        cy.get('.day-cell').not('bounding-month').contains(futureDay).click()
      }
    })
    return dateToAssert;
  }


  cy.visit('/')
  cy.contains('Forms').click()
  cy.contains('Datepicker').click()

  cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
    cy.wrap(input).click()

    const dateToAssert = checkDate(50)
    cy.wrap(input).invoke('prop', 'value').should('contains', dateToAssert)
    cy.wrap(input).should('have.value', dateToAssert)

  })
})

it.only('lists and drop-downs', () => {
  cy.visit('/')

  //1
  cy.get('nav nb-select').click()
  cy.get('.options-list').contains('Dark').click()
  cy.get('nav nb-select').should('contain', 'Dark')

  //2
  cy.get('nav nb-select').then(objectDropdown => {
    cy.wrap(objectDropdown).click()
    cy.get('.options-list nb-option')
    .then(list => {
      const listLength = list.length
      cy.wrap(list).each((listItem, index) => {
        const itemText = listItem.text().trim()
        console.log(listLength)
        cy.wrap(listItem).click()
        cy.wrap(objectDropdown).should('contain', itemText)
        if(index <  listLength -1){
          cy.wrap(objectDropdown).click()
        }

      })

    })

  })
})
