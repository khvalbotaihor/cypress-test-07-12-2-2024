const { navigateTo } = require("../support/page_objects/navigationPage")
const {onFormLayoutPage} = require("../support/page_objects/formLayoutsPage")
const {onDatePickerPage} = require("../support/page_objects/datePickerPage")

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

  it.only(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    //navigateTo.formLayoutsPage()
    //onFormLayoutPage.submitInlineFormWithNameAndEmail('John', 'test@gmail.com')
    //onFormLayoutPage.submitBasicFormWitEmailAndPassword('test@mail.com','testpassword123')
    navigateTo.datePickerPage()
    //onDatePickerPage.selectDate(5)
    onDatePickerPage.selectDateWithRange(1,2)


  })

})
