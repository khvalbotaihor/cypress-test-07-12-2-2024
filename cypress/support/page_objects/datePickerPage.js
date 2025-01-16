
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


export class DatePickerPage{
  selectDate(numberOfDaysFromToday){
    // cy.contains('nb-card','Common Datepicker').find('[placeholder="Form Picker"]').click()
    // cy.get('.day-cell.today').invoke('text').then((text)=> {
    //   const nextDate = parseInt(text.trim(), 10) + numberOfDaysFromToday
    //   cy.contains(nextDate).click()
    // })

    cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
      cy.wrap(input).click()

      const dateToAssert = checkDate(numberOfDaysFromToday)
      cy.wrap(input).invoke('prop', 'value').should('contains', dateToAssert)
      cy.wrap(input).should('have.value', dateToAssert)
    })
  }

  selectDateWithRange(numberOfDaysFromToday, numberOfDaysTo){
    cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
      cy.wrap(input).click()

      const dateToAssertFrom = checkDate(numberOfDaysFromToday)
      const dateToAssertTo = checkDate(numberOfDaysTo)
      const checkValue = `${dateToAssertFrom} - ${dateToAssertTo}`

      cy.wrap(input).invoke('prop', 'value').should('contains', checkValue)
      cy.wrap(input).should('have.value', checkValue)
    })
  }
}

export const onDatePickerPage = new DatePickerPage()
