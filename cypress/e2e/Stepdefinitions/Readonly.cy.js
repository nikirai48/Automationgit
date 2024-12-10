import { When, Then } from "cypress-cucumber-preprocessor/steps";
import tc3 from "../PageObject/testcase3.cy";
import topic from "../PageObject/Topic.cy";

When("Click on Topics sub tab", () => {
  topic.topictab();
});

Then("Select a topic with Ready only label", () => {
  tc3.readonly();
});

Then("Verfiy that a context menu is displayed", () => {
  tc3.contextmenu();
});

Then("Verify that a delete option is not displayed", () => {
  tc3.nodeleteoption();
});
