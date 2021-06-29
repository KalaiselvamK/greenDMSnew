package com.dms.pages;

import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.dms.base.TestBase;
import com.dms.util.CommonUtils;

public class IndexGroupPage extends TestBase{


	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	public IndexGroupPage() {PageFactory.initElements(driver, this);}

	@FindBy(id = "indexgroupid") private WebElement indexGroupDropdown;
	@FindBy(id = "txtIndexGroup") private WebElement newIndexGroupTextBox;
	@FindBy(id = "new") private WebElement newButton;
	@FindBy(id = "edit") private WebElement editButton;	//unable to edit
	@FindBy(id = "update") private WebElement saveUpdateButton;
	@FindBy(id = "delete") private WebElement deleteButton;	//delete redirects to edit
	@FindBy(id = "cancel") private WebElement cancelButton;

	//	New click new  fill textbox  save/update   enter details below
	@FindBy(id = "txtIndexDisplayName") private WebElement indexDisplayName;
	@FindBy(id = "cmbIndexFieldType") private WebElement indexFieldTypeDropdown;
	@FindBy(id = "cmbIndexType") private WebElement indexDataDropdown;
	@FindBy(id = "txtIndexLength") private WebElement maximunIndexLengthTextBox;
	@FindBy(id = "radMandatory1") private WebElement mandatoryYes;
	@FindBy(id = "radMandatory2") private WebElement mandatoryNo;
	@FindBy(id = "radPriority1") private WebElement priorityYes;
	@FindBy(id = "radPriority2") private WebElement priorityNo;
	@FindBy(id = "txtDefaultValue") private WebElement defaultValueTextBox;
	@FindBy(id = "radVisibility1") private WebElement visibilityYes;
	@FindBy(id = "radVisibility2") private WebElement visibilityNo;
	@FindBy(id = "btnAddIndex") private WebElement addIndexButton;

	String newIndexGroupName;
	Select select;
	public void clickNewButton(){
		newButton.click();
		preloaderWait();
	}

	public void enterNewName(){
		newIndexGroupName = "TESTINDEX"+CommonUtils.randomNumber();
		newIndexGroupTextBox.sendKeys(newIndexGroupName);
		logger.info("Index Group Name: "+newIndexGroupName);
	}

	public void clickSaveButton(){
		saveUpdateButton.click();
		commonPreloadWait();
	}

	public void fillIndexDisplayName(){
		indexDisplayName.sendKeys(newIndexGroupName);	
		logger.info("Index Display Name: "+newIndexGroupName);
	}

	public void selectIndexFieldType() {
		select = new Select(indexFieldTypeDropdown);
		select.selectByIndex(0);
	}

	public void selectIndexDataType() {
		select = new Select(indexDataDropdown);
		select.selectByIndex(2);
	}

	public void fillMaxIndexLength() {
		maximunIndexLengthTextBox.sendKeys("10");
	}

	public void fillDefaultValue() {
		defaultValueTextBox.sendKeys("null");
	}

	public void clickAddIndexButton() {
		addIndexButton.click();
		commonPreloadWait();
	}
	

	public boolean verifyCreatedIndexName() {
		select = new Select(indexGroupDropdown);
		List<WebElement> elements = select.getAllSelectedOptions();
		return isRecordFoundInGrid(elements, newIndexGroupName);
	}

}
