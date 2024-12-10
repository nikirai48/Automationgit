Feature: Protected statements

 Background :I am on the login page And I login with valid credentials

  Scenario: Protected statements cannot be deleted
  When Click on Statements sub tab 
  Then Click on Filters and Select protected
  Then Click on Protected statement to select
  Then Click on back button to close filters
  Then Click on the checkbox to select the statement
  Then Verify that protected statement cannot be deleted or Archived
