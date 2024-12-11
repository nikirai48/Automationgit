import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../PageObject/loginpage.cy";
const loginPage = new LoginPage();

Given("I visit the login page", () => {
  loginPage.visit();
});

When("I enter valid credentials", () => {
  const username = "nikirai48@gmail.com";
  const password = "Humansofindia@11";
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.submitLogin();
});

Then("I land on the dashboard", () => {
  cy.url().should(
    "include",
    "https://prgloo-dev-admin-01.azurewebsites.net/#!/",
  );
});

Then("I click response desk tab", () => {
  cy.get("#module-responseDesk > .v4icon").click();
});

Then("I should land on Conversation sub tab", () => {
  cy.url().should(
    "include",
    "https://prgloo-dev-admin-01.azurewebsites.net/#!/conversations",
  );
});

Then("I click on all the sub tabs", () => {
  loginPage.navigatetotab();
});
