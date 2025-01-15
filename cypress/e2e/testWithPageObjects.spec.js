const { navigateTo } = require("../support/page_objects/navigationPage")
const {onFormLayoutPage} = require("../support/page_objects/formLayoutsPage")

describe('Test with Page Objects', () => {

  beforeEach('open application', () => {
    cy.visit('/')
  })

  it('verify navigation across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.toasterPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
  })

  it(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutPage.submitInlineFormWithNameAndEmail('John', 'test@gmail.com')


  })

})
