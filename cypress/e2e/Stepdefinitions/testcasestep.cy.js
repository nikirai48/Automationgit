import { When, Then } from "cypress-cucumber-preprocessor/steps";
import tc1 from "../PageObject/testcase1.cy";

Then("I Click on Contacts tab", () => {
  tc1.Contactstab();
});

Then("I am on the Contacts sub tab", () => {
  tc1.mediatab();
});

Then("I Click on Media contacts sub tab", () => {
  tc1.tabclick;
});

Then("I Click on the filters icon", () => {
  tc1.Filter();
});

Then("I Click on Publication frequency dropdown", () => {
  tc1.dropdown();
});
