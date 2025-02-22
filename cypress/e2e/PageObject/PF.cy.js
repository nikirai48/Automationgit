class Publication {
    Contactstab() {
        cy.wait(7000)
        cy.ContactsTab().should("exist").click();
      }
    filters(){
        cy.get(".content-header__filter-button").click()
    }
    dropdown(){
        cy.get('.k-input').contains("Any Publication Frequency").click();
    }
    daily(){
        cy.get('.k-animation-container') // Parent container of dropdown items
  .find('li') // Find all list items
  .should('be.visible') // Ensure they are visible
  .each(($item) => {
    if($item.text().trim() === 'Annually'){
        cy.wrap($item).click();
    }

  })
        
    }  
    person(){
        cy.get('.k-input').contains("Any Country").click()
        cy.get('.k-list-container') // Parent container of dropdown items (replace with actual class if different)
  .find('li') // Find all list items (options)
  .should('be.visible') // Ensure they are visible
  .each(($item) => {
    if ($item.text().trim() === 'India') {
      cy.wrap($item).click(); // Click on "India"
    }
  });
    }

    domain(){
        cy.get('.k-input').contains('Any Score').click()
        cy.get('.k-list-container')
        .find('li')
        .should('be.visible')
        .each(($item) => {
            if($item.text().trim() === 'Low Score (1- 33)'){
                cy.wrap($item).click()
            }
        })
    }

    searchbased(){
        cy.get('input[placeholder="Organization name"]').type('humans')
        cy.get('.k-animation-container')
        .should('be.visible') // Ensure dropdown is visible
        .contains('Radio Le Mans') // Step 4: Find the option with text "Radio"
        .click(); 
    }

}

export default new Publication()