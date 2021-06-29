package com.dms.pages;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.dms.base.TestBase;
import com.dms.util.CommonUtils;

public class FolderPage extends TestBase{

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	public FolderPage(){PageFactory.initElements(driver, this);}


	//	@FindBy(xpath = "//b[text()='Parent']") private WebElement parentRadioButton;
	//	@FindBy(id = "//input[@id='radClassType1']//parent::label") private WebElement documentRadioButton;
	@FindBy(id = "txtClassName") private WebElement folderNameTextBox;
	@FindBy(id = "txtClassDescription") private WebElement descriptionTextBox;
	@FindBy(id = "txtUniqueClassId") private WebElement folderUniqueIDTextBox;
	@FindBy(id = "selectParentClass") private WebElement createFolderUnderDropdown;
	@FindBy(id = "indexgroupid") private WebElement indexGroupDropdown;
	@FindBy(id = "btnSubmit") private WebElement submitButton; 

	String folder;
	String random = CommonUtils.randomNumber();
	Select select;

	public void clickParentRadioButton()
	{
		logger.info("Entered to select Parent radio button");
		driver.findElement(By.xpath("//input[@id='radClassType1']//parent::label")).click();
	} 
	public void clickDocumentRadioButton()
	{		
		logger.info("Entered to select Document radio button");
		driver.findElement(By.xpath("//input[@id='radClassType2']//parent::label")).click();
	}

	public void enterFolderName(String folder)
	{
		this.folder = folder;
		folderNameTextBox.sendKeys(folder+random);	
		logger.info("Folder Name: "+ folder + random);
	}

	public void enterFolderDescription()
	{
		descriptionTextBox.sendKeys(folder + random +"  Description");
		logger.info("Folder Description: "+folder + random +"  Description");
	}
	public void folderUniqueID()
	{
		folderUniqueIDTextBox.sendKeys("TESTID"+random);
		logger.info("Folder Unique ID: "+"TESTID" + random);
	}

	public void selectParentFolder(String parentFolder)
	{
		logger.info("Folder name should be created: "+parentFolder);
		select = new Select(createFolderUnderDropdown);
		List<WebElement> options = select.getAllSelectedOptions();
		for(WebElement option: options)
		{
			logger.info("Current Visible text "+option.getText());
			if(option.getText().contains(parentFolder))
			{
				select.selectByVisibleText(option.getText());
				logger.info("Selected Parent Folder: " + option.getText());
				break;
			}
		}

	}

	public void SelectIndexGroup()
	{
		select = new Select(indexGroupDropdown);
		select.selectByIndex(1);
		logger.info("First index selected");
	}

	public String clickSubmitButton()
	{
		submitButton.click();
		return folder+random;
	}

}
