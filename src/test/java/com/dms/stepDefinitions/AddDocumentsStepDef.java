package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import com.dms.base.TestBase;
import com.dms.pages.AddDocumentsPage;
import com.dms.pages.DashboardPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;


public class AddDocumentsStepDef extends TestBase {
	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	AddDocumentsPage addDocuments;



	@Then("^Moving to Add Documents page$")
	public void movingToAddDocumentsPage(){
		logger.info("***Moving to Add Documents page***");
		addDocuments = dashboard.navigateToAddDocumentPage();
//		Reporter.addStepLog("Moving to Add Documents page");
	}

	@Then("^Add single document to Unassigned Folder$")
	public void addSingleDocumentToUnassignedFolder(){
		logger.info("***Adding single document to Unassigned Folder***");
		addDocuments.selectAddDropDown("Single");
		logger.info("Single -- selected");
		addDocuments.uploadSingleFile("./TestData");
		addDocuments.selectAddToDropDown("Unassigned Folder");
		logger.info("Unassigned Folder -- selected");
		addDocuments.fillNotes();
		logger.info("Notes field filled");
		addDocuments.clickSaveButton();
		logger.info("Saved");
//		Reporter.addStepLog("Successfully added single document to Unassigned Folder");
	}

	@Then("^Add single document to My Documents Folder$")
	public void addSingleDocumentToMyDocumentsFolder(){
		logger.info("***Adding single document to My Documents Folder***");
		addDocuments.selectAddDropDown("Single");
		logger.info("Single -- selected");
		addDocuments.uploadSingleFile(".\\TestData");
		addDocuments.selectAddToDropDown("My Documents");
		logger.info("My Documents -- selected");
		addDocuments.selectUser("1");
		addDocuments.fillNotes();
		logger.info("Notes field filled");
		addDocuments.clickSaveButton();
		logger.info("Saved");
//		Reporter.addStepLog("Successfully added single document to My Documents Folder");
	}

	@Then("^Add single document to DMS Folder$")
	public void addSingleDocumentToDMSFolder(){
		logger.info("***Adding single document to DMS Folder***");
		addDocuments.selectAddDropDown("Single");
		logger.info("Single -- selected");
		addDocuments.uploadSingleFile(".\\TestData");
		addDocuments.selectAddToDropDown("DMS Folder");
		logger.info("DMS folder -- selected");
		addDocuments.selectDocumentFolder(1);
		logger.info("Document folder -- selected");
		addDocuments.enterBarCode();
		logger.info("BarCode entered");
		addDocuments.checkWorkflow();
		addDocuments.selectWorkflow(1);
		addDocuments.fillNotes();
		logger.info("Notes field filled");
		addDocuments.clickSaveButton();
		logger.info("Saved");
//		Reporter.addStepLog("Successfully added single document to DMS Folder");
	}


	@And("^Add multiple documents to Unassigned Folder$")
	public void addMultipleDocumentToUnassignedFolder(){
		logger.info("***Adding Multiple documents to Unassigned Folder***");
		addDocuments.selectAddDropDown("Multiple");
		logger.info("Multiple -- selected");
		addDocuments.uploadMultipleFiles(".\\TestData");
		addDocuments.selectAddToDropDown("Unassigned Folder");
		addDocuments.fillNotes();
		logger.info("Notes field filled");
		addDocuments.clickSaveButton();
		logger.info("Saved");
//		Reporter.addStepLog("Successfully added multiple documents to Unassigned Folder");
	}

}
