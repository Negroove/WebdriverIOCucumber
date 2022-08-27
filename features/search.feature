Feature: Search product from home page

  Scenario Outline: The user search product 

    Given I am on the home page
    When I write <producto> 
    Then I should see a label with results

    
    Examples:
      | producto |
      | pilas    |
