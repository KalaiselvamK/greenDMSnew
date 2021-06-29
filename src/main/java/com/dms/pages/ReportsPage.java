package com.dms.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.dms.base.TestBase;

public class ReportsPage extends TestBase{

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	public ReportsPage() {PageFactory.initElements(driver, this);}



	@FindBy(id = "sReport") private WebElement reportDropdown;
	@FindBy(name = "btnSubmit") private WebElement submitButton;

	//Same for : Access History & Document folder access history 
	@FindBy(xpath = "//select[@id='userid' or @id='classid']") private WebElement userOrDocFolderDropdown;
	@FindBy(id = "txtFromDate") private WebElement fromDate;
	@FindBy(id = "txtToDate") private WebElement toDate;

	Select select;


	public void selectReportDropdown(String visibleText){
		select = new  Select(reportDropdown);
		select.selectByVisibleText(visibleText);

	}
	
	public void clickSubmitBtton(){
		submitButton.click();
		preloaderWait();
	}


	public void selectUserDropdown(){
		select = new Select(userOrDocFolderDropdown);
		select.selectByIndex(1);

	}

	public void enterFromDate(String frmDate) throws InterruptedException{
		logger.info("From Date is : "+ frmDate);
		fromDate.sendKeys(frmDate);
		Thread.sleep(300);

		toDate.sendKeys(Keys.ENTER);
	}

	public void enterToDate(String tDate) throws InterruptedException{
		logger.info("To Date is : "+ tDate);
		toDate.sendKeys(tDate);
		Thread.sleep(300);
		toDate.sendKeys(Keys.ENTER);
	}
	
	public boolean ensureRecordListed()
	{
		return isRecordsFoundInGrid();
	}
}



