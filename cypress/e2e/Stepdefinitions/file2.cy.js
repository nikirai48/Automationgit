import { When, Then } from "cypress-cucumber-preprocessor/steps";
import file from "../PageObject/file1.cy";
import 'cypress-file-upload';
import 'cypress-real-events/support';


When("Click on Contenthub sub tab", () => {
    file.content()
});


Then("i mouseover over Contact", () => {
	file.mouseover()
});

Then("Click on Resource library", () => {
	file.resourcelibrary()
});

Then("I click on new and select file", () => {
	file.newfile()
});

Then("i upload the file", () => {
	file.upload()
});


// Then("i go back", () => {
// 	file.back()
// });
