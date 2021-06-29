package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import com.dms.base.TestBase;
import com.dms.pages.DashboardPage;
import com.dms.pages.FolderPage;

import cucumber.api.java.en.Then;

public class FolderStepDef extends TestBase{

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboardPage = new DashboardPage();
	FolderPage folderPage;
	private static String createdParentFolder;


	@Then("^Moving to Folder page$")
	public void movingToFolderPage() {
		folderPage = dashboardPage.navigateAddFolderPage();
		logger.info("***Entered into Folder Page***");
	}

	@Then("^Create Document Folder inside \"([^\"]*)\"$")
	public void createDocumentFolderInside(String folder) {
		folderPage.clickDocumentRadioButton();
		folderPage.enterFolderName("DOCUMENT");
		folderPage.enterFolderDescription();
		folderPage.folderUniqueID();
		if(folder.equalsIgnoreCase("Repository")){
			folderPage.selectParentFolder("Repository");
		}
		else if(folder.equalsIgnoreCase("Parent Folder")) {
			folderPage.selectParentFolder(createdParentFolder);
		}
		folderPage.SelectIndexGroup();
		createdParentFolder = folderPage.clickSubmitButton();
		logger.info("Created new folder is: " +createdParentFolder);
	}

	@Then("^Create Parent Folder$")
	public void createParentFolder() {
//		folderPage.clickParentRadioButton();
		folderPage.enterFolderName("PARENT");
		folderPage.enterFolderDescription();
		folderPage.selectParentFolder("Repository");
		folderPage.SelectIndexGroup();
		createdParentFolder = folderPage.clickSubmitButton();
		logger.info("Created new folder is: " +createdParentFolder);
	}



}
