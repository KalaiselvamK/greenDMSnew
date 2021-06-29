package com.dms.stepDefinitions;

import org.testng.Assert;
import com.dms.base.TestBase;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;







public class LoginStepDef extends TestBase{

	@Given("^Open Browser$")
	public void openGreeDMSApplication(){
		setup();
	}

	@Then("^Go to GreenDMS application$")
	public void goToGreeDMSApplication(){
		openURL(propertyInputs.getURL());
	}


	@When("^Checking loging page title is \"([^\"]*)\"$")
	public void checkingLogingPageTitleIs(String expTitle){
		String actualTitle = titleCheck();
		Assert.assertEquals(actualTitle, expTitle);
	}

	@And("^Login to the application$")
	public void loginToTheApplication(){
		login(propertyInputs.getUserName(), propertyInputs.getPassword());
	}

	@And("^Logout the application$")
	public void logoutTheApplication(){
		logout();
	}
}
