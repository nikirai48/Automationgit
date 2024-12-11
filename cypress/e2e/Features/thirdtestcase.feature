Feature: Readonly

 Background :I am on the login page And I login with valid credentials

  Scenario: Unable to delete topics with Readonly label
  When Click on Topics sub tab 
  Then Select a topic with Ready only label
  Then Verfiy that a context menu is displayed
  Then Verify that a delete option is not displayed