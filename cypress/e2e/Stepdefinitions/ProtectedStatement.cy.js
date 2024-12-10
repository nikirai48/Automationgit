import { When, Then } from "cypress-cucumber-preprocessor/steps";
import tc4 from "../PageObject/testcase4.cy";

When("Click on Statements sub tab", () => {
  tc4.statementtab();
});

Then("Click on Filters and Select protected", () => {
  tc4.filters();
});

Then("Click on Protected statement to select", () => {
  tc4.Protected();
});

Then("Click on back button to close filters", () => {
  tc4.backbutton();
});

Then("Click on the checkbox to select the statement", () => {
  tc4.lock();
});

Then("Verify that protected statement cannot be deleted or Archived", () => {
  tc4.nodeleteArchive();
});
