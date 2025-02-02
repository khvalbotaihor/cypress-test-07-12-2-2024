
export class FormLayoutsPage{

  submitInlineFormWithNameAndEmail(name, email){
    cy.contains('nb-card','Inline form').find('form').then(form => {
      cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
      cy.wrap(form).find('[placeholder="Email"]').type(email)
      cy.wrap(form).find('[type="checkbox"]').check({force: true})
      //cy.wrap(form).find('[type="submit"]').click()
      cy.wrap(form).submit()
    })
  }

  submitBasicFormWitEmailAndPassword(email, password){
    cy.contains('nb-card','Basic form').find('form').then(form => {
      cy.wrap(form).find('[id="exampleInputEmail1"]').type(email)
      cy.wrap(form).find('[id="exampleInputPassword1"]').type(password)
      cy.wrap(form).find('[type="checkbox"]').check({force: true})
      //cy.wrap(form).find('[type="submit"]').click()
      cy.wrap(form).submit()
    })
  }

}

export const onFormLayoutPage = new FormLayoutsPage()
