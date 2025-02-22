class list{
    contactstab(){
        cy.ContactsTab().click()
    }
    list(){
        cy.get('.main-menu__middle.show .submenu__item:nth-child(3)').click()
    }
    newlist(){
        cy.get('.button__icon').click()
        cy.get('[gloo-fab-action="GROUP.LABEL"] > .v4-multi-fab__action > .button > .v4icon').click()
        cy.get('#name').type('test123')
        cy.get('.k-switch-handle').click();
        cy.contains('OK').click()
        cy.get(".k-multiselect-wrap .k-input").first().click()
        cy.get('.k-animation-container') // Parent container of dropdown items
  .find('li') // Find all list items
  .should('be.visible') // Ensure they are visible
  .each(($item) => {
    if($item.text().trim() === 'kishti rai'){
        cy.wrap($item).click();
    }

  })
  cy.get('#btn-save').click()

    }
}
export default new list();