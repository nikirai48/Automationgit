Feature: User login

  Scenario: User logs in with valid credentials
    Given I visit the login page
    When I enter valid credentials
    Then I land on the dashboard
    Then  I click response desk tab
    Then I should land on Conversation sub tab
    Then I click on all the sub tabs



    
