Feature: Amazon Search

Scenario: User can search for a product
    Given I am on the Amazon home page
    When I search for "Apple MacBook Air Laptop"
    Then I should see search results
    And the results should contain "Apple MacBook Air Laptop"

Scenario: User can add product to cart
    Given I am on a product page
    When I click Add to Cart
    Then the item should be in my cart