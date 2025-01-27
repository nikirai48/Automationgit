class tc4 {
  statementtab() {
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Statements")
      .click();
  }
  filters() {
    cy.get(".content-header__filter-button ").click();
  }
  Protected() {
    cy.get("#filter-protected").click();
  }
  backbutton() {
    cy.get(".v4icon--arrow-right").click();
  }
  lock() {
    cy.get("h3.ellipsis.title")
      .find("span.icon-lock_solid") // Look for the lock icon inside the title
      .closest("li") // Find the parent <li> of the lock icon (which should be the statement's container)
      .find('input[type="checkbox"]') // Find the checkbox within the same <li>
      .click(); // Click the checkbox
  }
  nodeleteArchive() {
    cy.get("li.list-action-toolbar__action--danger").should("not.exist");
    // Check that the Archive option (indicated by the Archive icon) does not exist in the menu
    cy.get("li.list-action-toolbar__action")
      .contains("span", "v4icon--archive") // Look for the Archive icon in the <span> element
      .should("not.exist"); // Ensure that the Archive option does not exist in the DOM
  }
  
}
export default new tc4();
