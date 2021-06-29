package com.dms.pages;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.dms.base.TestBase;
import com.dms.util.CommonUtils;

public class WorkFlowPage extends TestBase {
	
	public WorkFlowPage(){PageFactory.initElements(driver, this);}

	
	@FindBy(id = "selectWorkflow") private WebElement workflowDropdown;
	@FindBy(id = "txtWorkflowName") private WebElement workflowTxtBox;
	@FindBy(id = "newWorkflow") private WebElement newWorkflowIcon;
	@FindBy(id = "saveWorkflow") private WebElement saveWorkflowIcon;
	@FindBy(id = "deleteWorkflow") private WebElement deleteWorkflowIcon;	//reuse confirm/cancel
	@FindBy(id = "stepsAddCtrl") private WebElement newStepIcon;		//click two times
	@FindBy(xpath = "//input[@name='stepName_0']") private WebElement stepNameTextBox_1;
	@FindBy(id = "userId_0") private WebElement userSelect_1;
	@FindBy(name = "leadTime_0") private WebElement leadTime_1;
	@FindBy(id = "leadTimeUnits_0") private WebElement leadTimeDropdown_1;
	@FindBy(id = "skip_0") private WebElement skip_1;
	@FindBy(id = "preClose_0") private WebElement preClose_1;
	
	
	//refresh and vefify
	@FindBy(xpath = "//a[@id='refreshworkflow']") private WebElement refreshIcon;
	@FindBy(xpath = "//select[@id='selectWorkflow']//child::option") private List<WebElement> allRecordsOfDropDown;
	

	
	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	String randomNumber;
	Select select ;
	
	public void clickPlusIcon()
	{
		newWorkflowIcon.click();
	}
	
	public String enterWorkFlowName()
	{
		randomNumber = CommonUtils.randomNumber();
		workflowTxtBox.sendKeys("TESTWORKFLOW"+randomNumber);
		return "TESTWORKFLOW"+randomNumber;
	}
	
	public void enterStepDetails()
	{
		select = new Select(leadTimeDropdown_1);
		stepNameTextBox_1.sendKeys("TESTSTEP"+randomNumber);
		logger.info("Step name entered: "+"TESTSTEP"+randomNumber);
		leadTime_1.sendKeys("1");
		logger.info("Lead time entered as 1");
//		select.selectByIndex(index);
	}
	
	public boolean clickSaveButton(String toBeCheckedElement)
	{
		saveWorkflowIcon.click();	
		commonPreloadWait();
		logger.info("Save button clicked");
		return isRecordFoundInGrid(allRecordsOfDropDown, toBeCheckedElement);
	}
	
}
