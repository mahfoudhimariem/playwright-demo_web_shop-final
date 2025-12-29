@wishlist
Feature: Wishlist management on webShop website

  Background:
    Given I navigate to webShop website
    When I click on the Log in link
    When I enter valid credentials
      | email    | {userEmail} |
      | password | $Z4J2ra!U98h! |
    And I click on the Log in button
    Then I verify that I am redirected to the homepage with email '{userEmail}'

  Scenario: Add product to wishlist
    When I add "Black & White Diamond Heart" to wishlist
    Then I should see "Black & White Diamond Heart" in wishlist

  Scenario: Remove product from wishlist
    Given "Black & White Diamond Heart" is in wishlist
    When I remove "Black & White Diamond Heart" from wishlist
    Then wishlist should be empty
