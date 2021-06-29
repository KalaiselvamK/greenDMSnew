package com.dms.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import com.dms.base.TestBase;
import com.dms.util.CommonUtils;

public class RepositoryPage extends TestBase{

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	
//	Constructor
	public RepositoryPage() {
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(xpath = "//a[@href='/dms/repository']")	WebElement repositoryPane;	
	@FindBy(xpath = "//div[@class='panel-title']//h4")	WebElement panelTitle;	
	@FindBy(xpath = "//div[@title='Personal Folders']")	WebElement personalFolder;
	@FindBy(xpath = "//div[@title='DMS Folders']")	WebElement DMSFolder;
	
	//Personal Folder's subfolders
	@FindBy(xpath = "//h5[@title='Private Folder']")	WebElement privateFolder;
	@FindBy(xpath = "//h5[@title='Shared']")	WebElement sharedFolder;
	@FindBy(xpath = "//h5[@title='My Documents']")	WebElement myDocumentsFolder;
	@FindBy(xpath = "//h5[@title='Unassigned']")	WebElement unAssignedFolder;
	
	//	unassigned folder actions
	@FindBy(xpath = "//*[@id='dataTableExample1']/thead/tr[2]/th[4]/input")	WebElement fileNameSearch;
	@FindBy(xpath = "//*[@id='dataTableExample1']/thead/tr[2]/th[5]/input")	WebElement fileSizeSearch;
	@FindBy(xpath = "//*[@id='dataTableExample1']/thead/tr[2]/th[6]/input")	WebElement sourceSearch;
	
//	DMS folder check
	@FindBy(xpath = "//tr//th//input[@type='checkbox']")	WebElement masterCheckBox;
	@FindBy(xpath = "//tr[1]//td//input[@type='checkbox']")	WebElement individualCheckBox;
	@FindBy(xpath = "//tr[1]//td//img[@class='folder-icon']")	WebElement folderIconDMSfolder;
	@FindBy(xpath = "//*[@id='listview']/div/div/div/table/tbody/tr[1]/td[2]/h5/a/b") WebElement subFolderClick;
	@FindBy(xpath = "//table[@id='dataTableExample1']//tr[1]/td[5]") WebElement firstFile;
	
	
//	Individual file actions
	@FindBy(xpath = "//i[contains(@class,'fa-info')]")	WebElement fileInfo;
	@FindBy(xpath = "//h1[@class='modal-title']")	WebElement infoDialogueBox;	
	@FindBy(xpath = "//button[text()='Close']")	WebElement closeDialogureBox;	
	@FindBy(xpath = ".//a[@title='Print Document']")	WebElement printDocument;
	@FindBy(xpath = "//a[@title='Download Document']")	WebElement downloadDocument;
	@FindBy(xpath = "//a[@name='privatizefile']")	WebElement privatizeDocument;
	@FindBy(xpath = "//button[text()='No, cancel pls!']")	WebElement cancelPrivatize;
	@FindBy(xpath = "//button[@class='confirm']")	WebElement confirmCancelPrivatize;
	
	
		
	
	@FindBy(xpath = "//a[@id='btnBulkDelete']")	WebElement deleteIcon;
	@FindBy(xpath = "//a[@id='btnBulkDownload']")	WebElement downloadZIP;
	@FindBy(xpath = "//a[text()='XLSX']")	WebElement exportXLSX;
	@FindBy(xpath = "//a[text()='CSV']")	WebElement expostCSV;
	@FindBy(xpath = "//*[@id='detailSearchPanel']/div[1]/div[2]/ul/li[2]/a")	WebElement detailSearchIcon;
	@FindBy(xpath = "//a[@name='btnBulkreminder']")	WebElement alarmIcon;
	@FindBy(xpath = "//select[@id='txtuserName']")	WebElement userAlarm;
	@FindBy(xpath = "//textarea[@id='txtRDescription']")	WebElement descriptionAlarm;
	@FindBy(xpath = "//input[@id='txtDueOn']")	WebElement dueOnAlarm;
	@FindBy(xpath = "//button[@id='saveReminder']")	WebElement saveReminder;
	
	
//	==================Detail Search========================
	@FindBy(xpath = "//*[@id='detailSearchPanel']/div[1]/div[2]/ul/li[2]/a/i")	WebElement expandPanelButton;
	@FindBy(xpath = "//input[@id='txtFileName']")	WebElement fileNameTxtBox;
	@FindBy(xpath = "//input[@id='INDEXCOL_1']")	WebElement grnNoTxtBox;
	@FindBy(xpath = "//input[@id='INDEXCOL_2']")	WebElement boxNoTxtBox;
	@FindBy(xpath = "//input[@id='INDEXCOL_3']")	WebElement grnDateTxtBox;
	@FindBy(xpath = "//input[@id='INDEXCOL_4']")	WebElement rackNoTxtBox;
	@FindBy(xpath = "//input[@id='matchAnyFilters']")	WebElement matchAnyFilters;
	@FindBy(xpath = "//input[@id='includeFTS']")	WebElement includeFTS;
	@FindBy(xpath = "//input[@id='searchBtn']")	WebElement searchButton;
	@FindBy(xpath = "//input[@id='resetBtn']")	WebElement resetButton;
	
	
//	nth row of data to populate in details search text fields
	@FindBy(xpath = "//tbody/tr[4]/td[5]")	WebElement fileName;
	@FindBy(xpath = "//tbody/tr[4]/td[6]")	WebElement grnNo;
	@FindBy(xpath = "//tbody/tr[4]/td[7]")	WebElement boxNo;
	@FindBy(xpath = "//tbody/tr[4]/td[8]")	WebElement grnDate;
	@FindBy(xpath = "//tbody/tr[4]/td[9]")	WebElement rackNo;
	@FindBy(xpath = "//tbody/tr[1]/td[5]")	WebElement fileNameAfterFilter;
	
	
	
	
	
	public String Repository() throws Exception {
		repositoryPane.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		return panelTitle.getText();
	}
	
	public void personalFolderCheck() throws InterruptedException{
		repositoryPane.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		personalFolder.click();
		privateFolder.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		repositoryPane.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		personalFolder.click();
		sharedFolder.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		repositoryPane.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		personalFolder.click();
		myDocumentsFolder.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		repositoryPane.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		
		personalFolder.click();
		unAssignedFolder.click();
//		Validating unassigned folder alone
		Thread.sleep(3000);
		fileNameSearch.sendKeys("sss");
		fileNameSearch.clear();
		fileSizeSearch.sendKeys("sss");
		fileSizeSearch.clear();
		sourceSearch.sendKeys("sss");
		sourceSearch.clear();
		
	}
	
	public void enterDMSfolder() throws InterruptedException
	{
		repositoryPane.click();
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		DMSFolder.click();
		logger.info("subfolder check");
//		
//
//			try {
//				if(folderIconDMSfolder.isDisplayed()) {
//					logger.info("subfolder exists");
//				while(folderIconDMSfolder.isDisplayed())
//				{
//					logger.info("trying to click subfolder");
//					subFolderClick.click();
//				}}
//				
//			}
//			catch(Exception e)
//			{
//				e.printStackTrace();
//			}
		subFolderClick.click();
		
//		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
//		firstFile.click();
			
		}

	public void individualFileAction() throws InterruptedException
	{
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		firstFile.click();		
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		fileInfo.click();
		wait.until(ExpectedConditions.visibilityOf(closeDialogureBox));
		closeDialogureBox.click();
		wait.until(ExpectedConditions.visibilityOf(privatizeDocument));
		privatizeDocument.click();
		logger.info("eye icon clicked");
		wait.until(ExpectedConditions.visibilityOf(cancelPrivatize));
		cancelPrivatize.click();
		logger.info("cancel clicked");
		wait.until(ExpectedConditions.visibilityOf(confirmCancelPrivatize));
		confirmCancelPrivatize.click();
		logger.info("confirm clicked");

		
	}
	
	public void setReminder() throws InterruptedException
	{
				
//		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		alarmIcon.click();
		logger.info("alarm icon clicked");
		Select select = new Select(userAlarm);
		select.selectByIndex(0);
		logger.info("first index selected");
		descriptionAlarm.sendKeys("DescriptionTest");
		logger.info("description added");
		dueOnAlarm.sendKeys(CommonUtils.getDate(5));
		dueOnAlarm.sendKeys(Keys.ENTER);
		logger.info("due date set");
		saveReminder.click();
		logger.info("reminder set successfully");
		Thread.sleep(2000);
		driver.navigate().to("https://103.219.205.36:8443/dms/openfolder?folderid=1");
		logger.info("navigated back");

	}
	
	public void footerOperations()
	{
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
		masterCheckBox.click();
		masterCheckBox.click();
		
		individualCheckBox.click();
		downloadZIP.click();
		exportXLSX.click();
		expostCSV.click();
		individualCheckBox.click();
		deleteIcon.click();

	}
	
	public void detailsSearch() throws InterruptedException
	{
		Thread.sleep(3000);
		expandPanelButton.click();
		String filteredFileName=fileName.getText();
		fileNameTxtBox.sendKeys(filteredFileName);
		grnNoTxtBox.sendKeys(grnNo.getText());
		boxNoTxtBox.sendKeys(boxNo.getText());
		grnDateTxtBox.sendKeys(grnDate.getText());
		grnDateTxtBox.sendKeys(Keys.ENTER);
		searchButton.click();
		Thread.sleep(4000);
		Assert.assertEquals(filteredFileName, fileNameAfterFilter.getText());
	}
	
}
