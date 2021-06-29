package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import org.testng.Assert;

import com.dms.base.TestBase;
import com.dms.pages.DashboardPage;
import com.dms.pages.WorkFlowPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WorkFlowStepDef extends TestBase{
	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboardPage = new DashboardPage();
	WorkFlowPage workFlowPage;
	private static String createdWorkflowName;
	

	@Given("^Enter into Workflow master page$")
	public void enterIntoWorkflowMasterPage(){
		logger.info("**Navigating to Workflow Page**");
		workFlowPage = dashboardPage.navigateToWorkFlowPage();
	}

	@When("^Enter plus icon to create new Workflow$")
	public void enterPlusIconToCreateNewWorkflow(){
		workFlowPage.clickPlusIcon();
		logger.info("Plus icon clicked");

	}

	@Then("^Enter workflow name$")
	public void enterWorkflowName(){
		createdWorkflowName = workFlowPage.enterWorkFlowName();
		logger.info("Workflow created: "+createdWorkflowName);
	}

	@Then("^Fill step details$")
	public void fillStepDetails(){
		workFlowPage.enterStepDetails();
		logger.info("Step details filled");
	}

	@Then("^Save workflow and verify$")
	public void saveWorkflowAndVerify(){
		boolean isFound =  workFlowPage.clickSaveButton(createdWorkflowName);
		Assert.assertTrue(isFound);
		logger.info("Workflow creation completed successfully...");
	}


}
