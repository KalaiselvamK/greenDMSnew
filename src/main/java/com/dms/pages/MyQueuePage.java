package com.dms.pages;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.dms.base.TestBase;
import com.vimalselvam.cucumber.listener.Reporter;


public class MyQueuePage extends TestBase {

	//MyQueue list page	
	@FindBy(id = "workflowSelect") private WebElement workflowDropdown;
	@FindBy(id = "userSelect") private WebElement userDropdown;
	@FindBy(xpath = "//label[contains(text(),'Status')]//following-sibling::select") private WebElement statusDropdown;
	@FindBy(id = "assignUserSelect") private WebElement changeOwnerDropdown;
	@FindBy(xpath = "//tbody[@id='docListTableBody']//child::td[2]//a") private WebElement firstDocumentLink;
	@FindBy(xpath = "//tbody[@id='docListTableBody']//child::td//a") private List<WebElement> allRecords;
	@FindBy(id = "saveNxtBtn") private WebElement saveNextButton;

	public MyQueuePage(){PageFactory.initElements(driver, this);}
	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	Select select;

	public void selectWorkflowDropDown()
	{
		select = new Select(workflowDropdown);
		select.deselectByIndex(0);
	}

	public void selectUserDropDown()
	{
		select = new Select(userDropdown);
		select.selectByVisibleText(propertyInputs.getUserName().toUpperCase());
	}
	public void selectStausDropDown(String status)
	{
		select = new Select(statusDropdown);
		select.selectByVisibleText(status);
	}

	public String clickFirstDocument()
	{
		if(isRecordsFoundInGrid())
		{
			String workflowID = firstDocumentLink.getText();
			firstDocumentLink.click();
			preloaderWait();
			return workflowID;
		}
		else
		{
			logger.info("No Records Found");
			Reporter.addStepLog("No Records Found");
			throw new RuntimeException("No Records Found. Unable to process further");
		}
	}


	public void scrollToStatusDropdown()
	{
		scrollTo(statusDropdown);
	}

	public void clickSaveNextButton() {
		saveNextButton.click();
		preloaderWait();
	}


	public boolean checkElementPresentInList(String toBeCheckedElement)
	{
		logger.info("Record to be checked: "+toBeCheckedElement);
		return isRecordFoundInGrid(allRecords, toBeCheckedElement);
	}
}
