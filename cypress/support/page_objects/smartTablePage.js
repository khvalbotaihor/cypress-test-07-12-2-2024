
export class smartTablePage{

  updateAgeByFirstName() {
    cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
      cy.wrap(tableRow).find('.nb-edit').click()
      cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(33)
      cy.wrap(tableRow).find('.nb-checkmark').click()
      cy.wrap(tableRow).find('td').eq(6).should('contain', '33')
    })
  }

  addNewUser(firstName, LasName){
    cy.get('thead').find('.nb-plus').click()
    cy.get('thead').find('tr').eq(2).then(tr => {
      cy.wrap(tr).find('[placeholder="First Name"]').type(firstName)
      cy.wrap(tr).find('[placeholder="Last Name"]').type(LasName)
      cy.wrap(tr).find('.nb-checkmark').click()

    })

    cy.get('tbody tr').first().find('td').then(tc => {
      cy.wrap(tc).eq(2).should('contain', firstName)
      cy.wrap(tc).eq(3).should('contain', LasName)
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

  deleteRowByIndex(index){
    const stub = cy.stub()
    cy.on('window:confirm', stub)
    cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
    })
  }

}

export const onSmartTablePage = new smartTablePage()
