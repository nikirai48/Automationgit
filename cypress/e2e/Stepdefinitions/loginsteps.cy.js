import { Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../PageObject/loginpage.cy";
const loginPage = new LoginPage();

Then("I click response desk tab", () => {
  cy.get("#module-responseDesk > .v4icon").click();
});


Then('I verify the title of the page', () => {
	loginPage.title();
});


Then("I click on all the sub tabs", () => {
  loginPage.navigatetotab();
});
