import { When, Then } from "cypress-cucumber-preprocessor/steps";
import list from "../PageObject/Newlist.cy";


When('Click on Contacts tab', () => {
	list.contactstab()
});

Then('I click on lists tab', () => {
	list.list()
});

Then('I click on new list', () => {
	list.newlist()
});
