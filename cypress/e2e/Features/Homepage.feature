Feature: User login

Background :I am on the login page And I login with valid credentials

  Scenario: User logs in with valid credentials
    Then  I click response desk tab
    Then I should land on Conversation sub tab
    Then I click on all the sub tabs



    
