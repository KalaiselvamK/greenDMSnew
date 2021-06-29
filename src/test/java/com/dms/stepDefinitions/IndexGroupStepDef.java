package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import org.testng.Assert;

import com.dms.pages.DashboardPage;
import com.dms.pages.IndexGroupPage;

import cucumber.api.java.en.Then;

public class IndexGroupStepDef {

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	IndexGroupPage indexGroupPage;



	@Then("^Moving to Index Group page$")
	public void movingToIndexGroupPage() {
		logger.info("***Entering to Index Groups Page***");
		indexGroupPage = dashboard.navigateIndexGroupPage();
	}

	@Then("^Click New button to create new index group$")
	public void clickNewButtonToCreateNewIndexGroup() {
		logger.info("New button clicked");
		indexGroupPage.clickNewButton();
	}

	@Then("^Type Index Name$")
	public void typeIndexName() {
		indexGroupPage.enterNewName();
	}

	@Then("^Save and provide necessary details$")
	public void saveAndProvideNecessaryDetails() {
		indexGroupPage.clickSaveButton();
		indexGroupPage.fillIndexDisplayName();
		indexGroupPage.selectIndexFieldType();
		logger.info("Index Field Type Selected");
		indexGroupPage.selectIndexDataType();
		logger.info("Index Data Type Selected");
		indexGroupPage.fillMaxIndexLength();
		logger.info("Max Length Filled");
		indexGroupPage.fillDefaultValue();
		logger.info("Default value filled");
	}

	@Then("^Save and verify created Index Group$")
	public void saveAndVerifyCreatedIndexGroup() {
		indexGroupPage.clickAddIndexButton();
		Assert.assertTrue(indexGroupPage.verifyCreatedIndexName());
		logger.info("Created Index Name verified successfully");


	}


}
