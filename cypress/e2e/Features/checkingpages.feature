Feature: Checking No of pages

 Background :I am on the login page And I login with valid credentials

  Scenario: Checking no of pages
  When Click on Statements sub tab 
  Then I check the no of pages
  Then I navigate to upto 5 pages
  Then I check the number of rows and column
  Then I read all the rows from first page
  