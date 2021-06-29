package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import org.testng.Assert;

import com.dms.base.TestBase;
import com.dms.constants.MyQDocumentStatus;
import com.dms.pages.DashboardPage;
import com.dms.pages.MyQueuePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyQueueStepDef extends TestBase {

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	MyQueuePage myQueuePage;
	private static String selectedWorkflowID;
	private static String selectedStatus;



	@Given("^Enter into MyQueue page$")
	public void enterIntoMyQueuePage()
	{
		logger.info("***Moving to MyQueue page***");
		myQueuePage = dashboard.navigateToMyQueuePage(); 
	}

	@When("^Select \"([^\"]*)\" from the dropdown$")
	public void selectFromTheDropdown(String status)
	{
		logger.info("Status: "+ status);
		String stat = status.toLowerCase().trim();
		if(stat.contains("progress")) {
			myQueuePage.selectStausDropDown(MyQDocumentStatus.IN_PROGRESS);
			selectedStatus = MyQDocumentStatus.IN_PROGRESS;
			logger.info("Selected Status: "+ selectedStatus);
		}
		else if (stat.contains("completed")) {
			myQueuePage.selectStausDropDown(MyQDocumentStatus.COMPLETED);			
			selectedStatus = MyQDocumentStatus.COMPLETED;
			logger.info("Selected Status: "+ selectedStatus);
		}
		else if (stat.contains("declined")) {
			myQueuePage.selectStausDropDown(MyQDocumentStatus.DECLINED);			
			selectedStatus = MyQDocumentStatus.DECLINED;
			logger.info("Selected Status: "+ selectedStatus);
		}
	}

	@Then("^Enter inside any one from the displayed list$")
	public void enterInsideAnyOneFromTheDisplayedList()
	{
		selectedWorkflowID = myQueuePage.clickFirstDocument();
		logger.info("Entered into first document: "+selectedWorkflowID );

	}

	@Then("^Scroll down to the Status dropdown$")
	public void scrollDownToTheStatusDropdown()
	{
		myQueuePage.scrollToStatusDropdown();
		
	}


	@Then("^Save to come to MyQueue page$")
	public void saveToComeToMyQueuePage()
	{
		myQueuePage.clickSaveNextButton();
		logger.info("Saved");

	}

	@Then("^Verify the status of the changed document$")
	public void verifyTheStatusOfTheChangedDocument()
	{
		logger.info("Entered into Verification step");
		boolean isFound = myQueuePage.checkElementPresentInList(selectedWorkflowID);
		Assert.assertTrue(isFound);

	}

}
