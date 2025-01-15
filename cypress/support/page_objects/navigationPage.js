
function selectGroupMenuItem(groupName){
  cy.contains('a', groupName).then( menu => {
    cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
      if(attr.includes('left')){
        cy.wrap(menu).click()
      }
    })
  } )
}

export class NavigationPage{

  formLayoutsPage(){
    // cy.contains('Forms').then(($item) => {
    //   const expandStateIcon = $item.find('.expand-state')
    //   const iconValue = expandStateIcon.attr('ng-reflect-icon')
    //   iconValue !== 'chevron-down-outline' ? cy.contains('Forms').click() : cy.log('Icon is not chevron-left-outline. Perform action B.');
    // }){
    selectGroupMenuItem('Forms')

    cy.contains('Form Layouts').click()
  }

  datePickerPage(){
    // cy.contains('Forms').then(($item) => {
    //   const expandStateIcon = $item.find('.expand-state')
    //   const iconValue = expandStateIcon.attr('ng-reflect-icon')
    //   iconValue !== 'chevron-down-outline' ? cy.contains('Forms').click() : cy.log('Icon is not chevron-left-outline. Perform action B.');
    // })

   selectGroupMenuItem('Forms')
   cy.contains('Datepicker').click()
  }


  toasterPage(){
    selectGroupMenuItem('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  smartTablePage(){
    selectGroupMenuItem('Tables & Data')
    cy.contains('Smart Table').click()
  }

  tooltipPage(){
    selectGroupMenuItem('Modal & Overlays')
    cy.contains('Tooltip').click()
  }

}

export const navigateTo = new NavigationPage()
