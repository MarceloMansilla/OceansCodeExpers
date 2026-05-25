Feature: Registration

  Background:
    Given the user navigates to the login page

  @registration @smoke
  Scenario: Register user
    When the user click on Register here
    And the user enters all information with gender "Male" and occupation "Doctor" and phone "1234567890"
    And the user clicks on register button
    Then the user should be registered
