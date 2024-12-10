class tc2 {
  themestab() {
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Themes")
      .click();
  }
  Checkbox1() {
    cy.get(".totals span")
      .invoke("text")
      .then((text) => {
        const total = parseInt(text.trim(), 10);
        if (total === 0) {
          cy.get("div.checkbox").first().find('input[type="checkbox"]').click();
          cy.get("li.list-action-toolbar__action--danger").click({
            force: true,
          });
          cy.get("button.danger.wide").contains("Yes, please delete").click();
          cy.get("#toast-container").should("be.visible");
          cy.get(".toast-message").should("contain.text", "1 theme deleted");
        } else {
          cy.get("div.checkbox").first().find('input[type="checkbox"]').click();
          cy.get(".list-action-toolbar__action--danger").click({ force: true });
          cy.get("button.danger.wide").contains("Yes, please archive").click();
          cy.get("#toast-container").should("be.visible");
          cy.get(".toast-message").should("contain.text", "1 theme archived");
        }
      });
  }
}

export default new tc2();
