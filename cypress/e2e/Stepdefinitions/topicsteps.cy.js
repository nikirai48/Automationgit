import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import topic from "../PageObject/Topic.cy";

Given(
  "User successfully logins into the Admin and lands Response desk tab",
  () => {
    topic.visit();
    const username = "nikirai48@gmail.com";
    const password = "Humansofindia@11";
    topic.enterUsername(username);
    topic.enterPassword(password);
    topic.submitLogin();
  },
);

When("Click on Topics sub tab", () => {
  topic.topictab();
});

Then("Click on any Topic with items associated to it", () => {
  topic.topicitem();
});

Then("click on Timeline tab", () => {
  topic.timelinetab();
});
