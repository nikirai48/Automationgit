import { When, Then } from "cypress-cucumber-preprocessor/steps";
import pages from "../PageObject/pages.cy";

When("Click on Statements sub tab", () => {
	pages.statement()
});

Then("I check the no of pages", () => {
	pages.number()
});


Then("I check the number of rows and column", () => {
	pages.rowsnumber()
});


Then("I read all the rows from first page", () => {
	pages.readallrows()
});


Then("I navigate to upto 5 pages", () => {
	pages.navigatepage()
});
