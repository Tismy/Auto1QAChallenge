package autoHero.stepDefinitions;

import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;
import com.aventstack.extentreports.ExtentReports;

import autoHero.configs.Constants;
import autoHero.configs.ExtentManager;
import autoHero.pageObjects.SearchPage;
import autoHero.utils.UtilsFun;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Base_Test {
	public WebDriver driver;

	SearchPage SearchPage;
	public static ExtentReports extent;

	@Before
	public void setUp() {
		DOMConfigurator.configure(Constants.log4Jxml);
		System.setProperty("org.uncommons.reportng.escape-output", "false");// This is needed to reportng to escape the special characters		extent = ExtentManager.getInstance();
		ExtentManager.testsuite = extent.createTest("Test satrted");	}

	@After
	public void tearDown() {
		if (driver != null) {
			driver.close();
			driver.quit();

		}

		extent.flush();
	}

}
