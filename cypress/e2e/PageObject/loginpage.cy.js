class LoginPage {
  navigatetotab() {
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Topics")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "At a glance")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Cases")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Activities")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Interview Requests")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Statements")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Themes")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "My Network")
      .click();
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "File Attachments")
      .click();
  }
}

export default LoginPage;
