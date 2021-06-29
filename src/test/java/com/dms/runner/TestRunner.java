package com.dms.runner;

import java.io.File;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

import org.apache.log4j.Logger;
import org.testng.IAnnotationTransformer;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.ITestAnnotation;
import org.testng.annotations.Test;

import com.dms.base.TestBase;
import com.vimalselvam.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.api.SnippetType;
import cucumber.api.java.Before;


//@ExtendedCucumberOptions
@CucumberOptions(
		features = ".\\src\\test\\java\\com\\dms\\features",
		glue = {"com.dms.stepDefinitions"},
		tags = "~@RepositoryFeature",
//		tags = "@Folder",
		plugin= {"pretty"
				,"html:target/cucumber-reports/cucumber-pretty"
				,"json:target/cucumber-reports/CucumberTestReport.json"
				, "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/html/ExtentReport.html"}
		, dryRun = false
				,monochrome=true
				,snippets = SnippetType.CAMELCASE
		) 

public class TestRunner extends TestBase implements IAnnotationTransformer {

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	private TestNGCucumberRunner testNGCucumberRunner;


	//********************Multiple times same test*******************************
	@SuppressWarnings("rawtypes")
	@Override
	public void transform(ITestAnnotation annotation, Class testClass,  Constructor testConstructor, Method testMethod) {
		// TODO Auto-generated method stub
		annotation.setInvocationCount(1);
	}
	//********************Multiple times same test*******************************	


	@BeforeClass(alwaysRun = true)
	public void setUpClass() {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Before
	public void beforeScenario(Scenario scenario) {
		Reporter.assignAuthor("ToolsQA - KalaiSelvam");
	}


	@Test(groups = "cucumber scenarios", description = "Runs Cucumber Scenarios", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) throws Throwable{
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void tearDownClass() {
		Reporter.loadXMLConfig(new File(".\\src\\test\\resources\\extent-config.xml"));
		//Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
		try{Reporter.setSystemInfo("User Name", TestBase.propertyInputs.getUserName());}
		catch(NullPointerException e)
		{
			Reporter.setSystemInfo("User Name", "Administrator");
		}
		Reporter.setSystemInfo("Application Name", "GreenDMS");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment", "QA");
		Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
		//		TestBase.driver.get(".\\target\\html\\ExtentReport.html");
		//		System.out.println("report opened" + ".\\target\\html\\ExtentReport.html");

		testNGCucumberRunner.finish();
//		driver.quit();

	}
}