import { When, Then } from "cypress-cucumber-preprocessor/steps";
import frame from "../PageObject/frame.cy";

When("Click on Contenthub sub tab", () => {
	frame.content()
});

Then("i mouseover", () => {
	frame.mouseover()
});

Then("I right click on first item", () => {
	frame.rightclick()
});


Then("Click on New", () => {
	frame.new()
});

Then("Click on textbox", () => {
    frame.textbox()
});

Then("I make it bold", () => {
	frame.bold()
});

Then("i scroll to the bottom", () => {
	frame.scroll()
});


