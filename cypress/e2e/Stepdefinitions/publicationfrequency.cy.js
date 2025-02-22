import { When, Then } from "cypress-cucumber-preprocessor/steps";
import Publication from "../PageObject/PF.cy";
import PFCy from "../PageObject/PF.cy";


When('Click on Contacts tab', () => {
	Publication.Contactstab()
});


Then('I click on filter', () => {
    Publication.filters()
});


// Then('I click on the dropdown', () => {
// 	Publication.dropdown()
// });

// Then('i click on daily', () => {
// 	Publication.daily()
// });


// Then('i select the person', () => {
// 	Publication.person()
// });


// Then('i click on domain', () => {
// 	Publication.domain()
// });

Then('i search for organisation', () => {
	Publication.searchbased()
});
