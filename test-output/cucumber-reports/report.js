$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/autoHero/features/search.feature");
formatter.feature({
  "line": 1,
  "name": "As a user , I want the all cars are filtered by first registration(2015) and sorted by price descending",
  "description": "",
  "id": "as-a-user-,-i-want-the-all-cars-are-filtered-by-first-registration(2015)-and-sorted-by-price-descending",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "search functionality",
  "description": "",
  "id": "as-a-user-,-i-want-the-all-cars-are-filtered-by-first-registration(2015)-and-sorted-by-price-descending;search-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to autohero website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Apply Filter for First registration \u003cRegistrationYear\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Sort cars by Price Descending \"\u003cSortPriceDesc\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify all cars are filtered by \u003cRegistrationYear\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify all cars are sorted by price descending",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "as-a-user-,-i-want-the-all-cars-are-filtered-by-first-registration(2015)-and-sorted-by-price-descending;search-functionality;",
  "rows": [
    {
      "cells": [
        "RegistrationYear",
        "SortPriceDesc"
      ],
      "line": 11,
      "id": "as-a-user-,-i-want-the-all-cars-are-filtered-by-first-registration(2015)-and-sorted-by-price-descending;search-functionality;;1"
    },
    {
      "cells": [
        "2015",
        "Höchster Preis"
      ],
      "line": 12,
      "id": "as-a-user-,-i-want-the-all-cars-are-filtered-by-first-registration(2015)-and-sorted-by-price-descending;search-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 360868256,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "search functionality",
  "description": "",
  "id": "as-a-user-,-i-want-the-all-cars-are-filtered-by-first-registration(2015)-and-sorted-by-price-descending;search-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to autohero website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Apply Filter for First registration 2015",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Sort cars by Price Descending \"Höchster Preis\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Verify all cars are filtered by 2015",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify all cars are sorted by price descending",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_Test.navigate_to_autohero_website()"
});
formatter.result({
  "duration": 8858301204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 36
    }
  ],
  "location": "Search_Test.apply_Filter_for_First_registration(int)"
});
formatter.result({
  "duration": 331927214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Höchster Preis",
      "offset": 31
    }
  ],
  "location": "Search_Test.sort_cars_by_Price_Descending(String)"
});
formatter.result({
  "duration": 545754879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 32
    }
  ],
  "location": "Search_Test.verify_all_cars_are_filtered_by(int)"
});
formatter.result({
  "duration": 40559252353,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 30 seconds waiting for condition (element ([[ChromeDriver: chrome on XP (2032fa0ff2272375eb351c20510871e5)] -\u003e css selector: ul[class\u003d\"specList___2i0rY\"] li:nth-of-type(1)]) to become stale) to be refreshed\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Paul\u0027, ip: \u0027192.168.1.37\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:56803}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.43.600210 (68dcf5eebde37173d4027fa8635e332711d2874a), userDataDir\u003dC:\\Users\\Paul\\AppData\\Local\\Temp\\scoped_dir16380_28468}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.102, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2032fa0ff2272375eb351c20510871e5\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:261)\r\n\tat autoHero.utils.UtilsFun.waitforStaleElement(UtilsFun.java:115)\r\n\tat autoHero.pageObjects.SearchPage.VerifyRegistrationYear(SearchPage.java:178)\r\n\tat autoHero.stepDefinitions.Search_Test.verify_all_cars_are_filtered_by(Search_Test.java:79)\r\n\tat ✽.Then Verify all cars are filtered by 2015(src/test/java/autoHero/features/search.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search_Test.verify_all_cars_are_sorted_by_price_descending()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 375475768,
  "status": "passed"
});
});