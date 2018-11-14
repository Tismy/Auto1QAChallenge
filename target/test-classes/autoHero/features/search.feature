Feature: As a user , I want the all cars are filtered by first registration(2015) and sorted by price descending

 Scenario Outline: search functionality
 Given Navigate to autohero website
 When Apply Filter for First registration <RegistrationYear>
 When Sort cars by Price Descending "<SortPriceDesc>"
Then Verify all cars are filtered by <RegistrationYear>
Then Verify all cars are sorted by price descending

Examples:
 | RegistrationYear  | SortPriceDesc|
 | 2015              |Höchster Preis|

 

 

 