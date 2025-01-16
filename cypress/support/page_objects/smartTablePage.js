
export class smartTablePage{

  updateAgeByFirstName() {
    cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(33)
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain', '33')
    })
  }

  addNewUser(){
    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then(tr => {
      cy.wrap(tr).find('[placeholder="First Name"]').type('john')
      cy.wrap(tr).find('[placeholder="Last Name"]').type('smith')
      cy.wrap(tr).find('.nb-checkmark').click()

    })

    cy.get('tbody tr').first().find('td').then(tc => {
      cy.wrap(tc).eq(2).should('contain', 'john')
      cy.wrap(tc).eq(3).should('contain', 'smith')
    })
  }

  compareAge(ageList){
    cy.wrap(ageList).each(age => {
      cy.get('thead').find('[placeholder="Age"]').clear().type(age)
      cy.wait(500)
      cy.get('tbody tr').each(tRow => {
        if(age == 200){
          cy.wrap(tRow).find('td').eq(0).should('contain', 'No data found')

        }else{
        cy.wrap(tRow).find('td').eq(6).should('contain', age)
        }
      })
    })
  }

}

export const onSmartTablePage = new smartTablePage()
