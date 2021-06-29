package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import org.testng.annotations.Test;
import com.dms.base.TestBase;
import com.dms.pages.DashboardPage;
import com.dms.pages.RepositoryPage;
import com.vimalselvam.cucumber.listener.Reporter;


public class RepositoryStepDef extends TestBase{
	
	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	RepositoryPage repositoryPage;
	
	
	
	@Test(priority=1, enabled=true)
	public void enterRepository() throws Exception
	{
		logger.info("***Moving to Add Documents page***");
		repositoryPage = dashboard.navigateRepositoryPage();
		Reporter.addStepLog("Moving to Add Documents page");
	}
	
	@Test(priority=2, enabled=false)	
	public void personalFolderCheck() throws InterruptedException
	{
		repositoryPage.personalFolderCheck();
	}
	
	@Test(priority=3, enabled=false)
	public void DMSfolderTest() throws InterruptedException
	{
		repositoryPage.enterDMSfolder();
		repositoryPage.individualFileAction();
		repositoryPage.setReminder();
		repositoryPage.footerOperations();
		repositoryPage.detailsSearch();
		
	}

}
