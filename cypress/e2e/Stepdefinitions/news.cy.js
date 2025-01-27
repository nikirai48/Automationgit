import { When, Then } from "cypress-cucumber-preprocessor/steps";
import newsroom from "../PageObject/newsroomtab.cy";



When("Click on Contenthub tab", () => {
	newsroom.contenthub()
});


Then("I click on Newsroom sub tab", () => {
	newsroom.newstab()
});
