import { When, Then } from "cypress-cucumber-preprocessor/steps";
import tc2 from "../PageObject/testcase2.cy";

When("Click on Themes sub tab", () => {
  tc2.themestab();
});

Then(
  "Click on the checkbox to select a Theme with no Associated topic it should delete and with associated topic it should Archive",
  () => {
    tc2.Checkbox1();
  },
);
