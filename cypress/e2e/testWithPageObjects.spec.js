const { navigateTo } = require("../support/page_objects/navigationPage")
const {onFormLayoutPage} = require("../support/page_objects/formLayoutsPage")
const {onDatePickerPage} = require("../support/page_objects/datePickerPage")
const {onSmartTablePage} = require("../support/page_objects/smartTablePage")


describe('Test with Page Objects', () => {

  beforeEach('open application', () => {
    cy.openHomePage()
  })

  it('verify navigation across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datePickerPage()
    navigateTo.toasterPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
  })

  it.only(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutPage.submitInlineFormWithNameAndEmail('John', 'test@gmail.com')
    onFormLayoutPage.submitBasicFormWitEmailAndPassword('test@mail.com','testpassword123')
    navigateTo.datePickerPage()
    onDatePickerPage.selectDate(5)
    onDatePickerPage.selectDateWithRange(11,22)
    navigateTo.smartTablePage()
    onSmartTablePage.updateAgeByFirstName()
    onSmartTablePage.addNewUser('jim', 'brown')
    onSmartTablePage.compareAge([20,30,40,200])
    navigateTo.smartTablePage()
    onSmartTablePage.addNewUser('test to', 'delete')
    onSmartTablePage.deleteRowByIndex(1)



  })

})
