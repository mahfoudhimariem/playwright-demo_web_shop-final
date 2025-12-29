@cart
Feature: Shopping cart management on webShop website

  Background:
    Given I navigate to webShop website
    When I click on the Log in link
    When I enter valid credentials
      | email    | {userEmail} |
      | password | $Z4J2ra!U98h! |
    And I click on the Log in button
    Then I verify that I am redirected to the homepage with email '{userEmail}'

  Scenario: Add a product to cart
    When I add "Build your own computer" to the cart
    Then I should see "Build your own computer" in cart

  Scenario: Remove a product from cart
    Given I have "Build your own computer" in cart
    When I remove "Build your own computer" from cart
    Then the cart should be empty
