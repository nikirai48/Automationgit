class tc1 {
  Contactstab() {
    cy.get("li#module-influencer").should("exist").click();
  }
  mediatab() {
    cy.url().should(
      "include",
      "https://prgloo-dev-admin-01.azurewebsites.net/#!/influencers",
    );
  }
  tabclick() {
    cy.get("#section-app\\.influencers").click();
  }

  Filter() {
    cy.get("button.content-header__filter-button").click();
  }
  dropdown() {
    cy.get("label.form__label")
      .contains("Publication Frequency (Organizations only)")
      .click();
  }
}
export default new tc1();
