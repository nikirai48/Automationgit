Feature: Themes

 Background :I am on the login page And I login with valid credentials

  Scenario: Deleting themes with no topics
  When Click on Themes sub tab
  Then Click on the checkbox to select a Theme with no Associated topic it should delete and with associated topic it should Archive
  
  