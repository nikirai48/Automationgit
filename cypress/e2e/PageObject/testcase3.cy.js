class tc3 {
  topictab() {
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Topics")
      .click();
  }
  readonly() {
    cy.get("li.v4-card") // Select all topic items
      .contains("Read Only") // Find the topic that contains the "Read Only" label
      .parents("li.v4-card") // Get the parent topic container
      .first() // If there are multiple, pick the first one
      .find('input[type="checkbox"]') // Find the checkbox inside that topic
      .click();
  }
  contextmenu() {
    cy.get(".list-action-toolbar__actions");
  }
  nodeleteoption() {
    cy.get("li.list-action-toolbar__action--danger").should("not.exist");
  }
}
export default new tc3();
