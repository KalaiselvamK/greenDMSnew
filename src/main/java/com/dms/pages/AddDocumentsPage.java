package com.dms.pages;

import java.io.File;
import java.time.Duration;
import java.util.List;
import java.util.function.Function;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.testng.Assert;

import com.dms.base.TestBase;
import com.dms.util.CommonUtils;




public class AddDocumentsPage extends TestBase {

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	public AddDocumentsPage() {PageFactory.initElements(driver, this);}

	@FindBy(id = "uploadTypeSelect") private WebElement addDropdown;
	@FindBy(id = "uploadBtn") private WebElement uploadButton;
	@FindBy(id = "addToSelect") private WebElement addToDropdown;
	@FindBy(id = "folderSelect") private WebElement documentFolderDropdown;
	@FindBy(id = "INDEXCOL_1") private WebElement barCodeTextBox;
	@FindBy(id = "userSelect") private WebElement userDropdown;
	@FindBy(id = "isWorkflow") private WebElement isWorkflowCheckbox;
	@FindBy(id = "workflowSelect") private WebElement workflowDropdown;
	@FindBy(id = "txtComments") private WebElement notesTextBox;
	@FindBy(id = "saveNxtBtn") private WebElement saveButton;

	private Select select;

	public void selectAddDropDown(String selection)
	{
		select = new Select(addDropdown);
		select.selectByVisibleText(selection);
	}

	public void uploadSingleFile(String filePath)
	{
		String fileName = CommonUtils.getFirstFileName(filePath);
		String absolutePath = filePath+"/"+fileName; 
		File file = new File(absolutePath);
		uploadButton.sendKeys(file.getAbsolutePath());
		logger.info("Uploaded file name is " + fileName);
		Assert.assertEquals(fileName, driver.findElement(By.xpath("//a[text()='"+fileName+"']")).getText(), "File name not as same as uploaded one");
	}

	public void uploadMultipleFiles(String filePath)
	{
		List<String> fileNames = CommonUtils.getAllFileNames(filePath);
		String absolutePath1 = filePath+"/"+fileNames.get(0); 
		String absolutePath2 = filePath+"/"+fileNames.get(1); 
		File file1 = new File(absolutePath1);
		File file2 = new File(absolutePath2);
		logger.info("First file name is " + fileNames.get(0));
		logger.info("Second file name is " + fileNames.get(1));
		logger.info("First file path is " + file1.getAbsolutePath());
		logger.info("Second file path is " + file2.getAbsolutePath());

		uploadButton.sendKeys(file1.getAbsolutePath()+"\n"+file2.getAbsolutePath());
		String s1 = "//a[text()='"+fileNames.get(0)+"']";
		String s2 = "//a[text()='"+fileNames.get(1)+"']";
		Assert.assertEquals(fileNames.get(0), driver.findElement(By.xpath(s1)).getText(), "File name not as same as uploaded one");
		Assert.assertEquals(fileNames.get(1), driver.findElement(By.xpath(s2)).getText(), "File name not as same as uploaded one");
	}

	public void selectAddToDropDown(String selection)
	{
		select = new Select(addToDropdown);
		select.selectByVisibleText(selection);
	}

	public void selectDocumentFolder(int selection)
	{
		select = new Select(documentFolderDropdown);
		select.selectByIndex(selection);
	}
	
	public void enterBarCode()
	{
		barCodeTextBox.sendKeys("11111");
	}

	public void selectUser(String selection)
	{
		select = new Select(userDropdown);
		select.selectByValue(selection);
	}

	public void checkWorkflow()
	{
		isWorkflowCheckbox.click();
	}

	public void selectWorkflow(int selection)
	{
		select = new Select(workflowDropdown);
		select.selectByIndex(selection);
	}

	public void fillNotes()
	{
		notesTextBox.sendKeys("Filling notes textbox");	
	}

	public void clickSaveButton()
	{
		saveButton.click();
		Wait<WebDriver> flWait = new FluentWait<WebDriver>(driver)							
				  .withTimeout(Duration.ofSeconds(30))
			  	  .pollingEvery(Duration.ofSeconds(3))
				.ignoring(StaleElementReferenceException.class);
		WebElement clickseleniumlink = flWait.until(new Function<WebDriver, WebElement>(){
			
			public WebElement apply(WebDriver driver ) {
				return driver.findElement(By.xpath("//div[@class='panel-body']//table"));
			}
		});
		clickseleniumlink.getText();

	}


}


