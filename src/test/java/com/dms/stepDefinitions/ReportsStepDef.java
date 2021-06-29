package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import org.junit.Assert;

import com.dms.pages.DashboardPage;
import com.dms.pages.ReportsPage;
import com.dms.util.CommonUtils;

import cucumber.api.java.en.Then;

public class ReportsStepDef{

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	ReportsPage reportsPage;
	
	
	@Then("^Moving to Reports page$")
	public void movingToReportsPage() {
		logger.info("***Entering to Reports Page***");
		reportsPage = dashboard.navigateReportsPage();
	}
	
	@Then("^Select \"([^\"]*)\" from dropdown$")
	public void selectFromDropdown(String visibleText) {
		reportsPage.selectReportDropdown(visibleText);
		logger.info("Report: "+visibleText+" selected");
		reportsPage.clickSubmitBtton();
	    
	}
	
	@Then("^Generate report by filling necessary details$")
	public void generateReportByFillingNecessaryDetails() throws InterruptedException {
		reportsPage.selectUserDropdown();
		logger.info("User selected");
		reportsPage.enterFromDate(CommonUtils.getDate(-10));
		logger.info("From date entered");
		reportsPage.enterToDate(CommonUtils.getDate(0));
		logger.info("To date entered");
		reportsPage.clickSubmitBtton();
	}
	
	
	@Then("^Verify report loaded in grid$")
	public void verifyReportLoadedInGrid() {
	    Assert.assertTrue(reportsPage.ensureRecordListed());
		logger.info("Reports displayed in grid");

	}
	
	
	@Then("^Select Bulk Job from dropdown$")
	public void SelectBulkJobFromDropdown() {
		String visibleText = "Bulk Jobs";
		reportsPage.selectReportDropdown(visibleText);
		logger.info("Report: "+visibleText+" selected");
		reportsPage.clickSubmitBtton();
	}

}
