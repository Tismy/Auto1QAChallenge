package autoHero.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import com.aventstack.extentreports.ExtentTest;

import autoHero.configs.BaseTest;
import autoHero.configs.Constants;
import autoHero.configs.ExtentManager;
import autoHero.pageObjects.SearchPage;
import autoHero.utils.Log;
import autoHero.utils.UtilsFun;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Search_Test{
	
public WebDriver driver;
	SearchPage SearchPage;

	
@Given("^Navigate to autohero website$")
public void navigate_to_autohero_website() throws Throwable {
	
	ExtentTest child = null;
	child = ExtentManager.testsuite.createNode("testVerifyRegistrationYear");
	ExtentManager.test = child;

	driver = UtilsFun.getChromeDriver();
	SearchPage = PageFactory.initElements(driver, SearchPage.class);
	driver.get(Constants.autoHerourl);
//	SearchPage = PageFactory.initElements(driver, SearchPage.class);
	Log.info("beforeTest method");
	Reporter.log("beforeTest method");
}

@When("^Apply Filter for First registration (\\d+)$")
public void apply_Filter_for_First_registration(int setMinimumRegYear) throws Throwable {

	ExtentTest child = null;
	child = ExtentManager.testsuite.createNode("testVerifyRegistrationYear");
	ExtentManager.test = child;
	SearchPage = PageFactory.initElements(driver, SearchPage.class);
	// function to apply filters
	SearchPage.ApplyFilterMinimumRegYear_Action(setMinimumRegYear);


}


@When("^Sort cars by Price Descending \"([^\"]*)\"$")
public void sort_cars_by_Price_Descending(String setSortBY) throws Throwable {
	ExtentTest child = null;
	child = ExtentManager.testsuite.createNode("testVerifyRegistrationYear");
	ExtentManager.test = child;
	SearchPage = PageFactory.initElements(driver, SearchPage.class);
	// function to apply filters
	SearchPage.ApplyFilterPriceSort_Action(setSortBY);

}




@Then("^Verify all cars are filtered by (\\d+)$")
public void verify_all_cars_are_filtered_by(int setMinimumRegYear) throws Throwable {
	 
		System.out.println("TYear:"+ setMinimumRegYear);
		
		ExtentTest child = null;
		child = ExtentManager.testsuite.createNode("testVerifyRegistrationYear");
		ExtentManager.test = child;
		SearchPage = PageFactory.initElements(driver, SearchPage.class);
		// function to apply filters
		SearchPage.VerifyRegistrationYear(setMinimumRegYear);

}
 


@Then("^Verify all cars are sorted by price descending$")
public void verify_all_cars_are_sorted_by_price_descending() throws Throwable {
	ExtentTest child = null;
	child = ExtentManager.testsuite.createNode("testVerifyRegistrationYear");
	ExtentManager.test = child;
	SearchPage = PageFactory.initElements(driver, SearchPage.class);
	// function to apply filters
	SearchPage.VerifyOPriceOrder();

}


}
