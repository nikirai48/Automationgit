class topic {
  visit() {
    cy.visit("https://prgloo-dev-admin-01.azurewebsites.net/login/");
  }
  enterUsername(username) {
    cy.get("#username").type(username);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  submitLogin() {
    cy.get("#btn-submit").click();
  }

  topictab() {
    cy.get("li.submenu__item")
      .should("exist")
      .contains("span", "Topics")
      .click();
  }
  topicitem() {
    cy.get("li.v4-card").first().should("exist").click();
  }
  timelinetab() {
    cy.get('div.v4-tabs__tab[tab="tab-2"]').click();
    cy.get(".v4-card").first().should("be.visible").click();
    cy.get(".v4-card").first().should("have.class", "v4-card--static");
  }
}

export default new topic();
