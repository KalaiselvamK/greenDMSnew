package com.dms.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.dms.base.TestBase;
import com.dms.util.CommonUtils;

public class TeamsPage extends TestBase {


	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	public TeamsPage() {PageFactory.initElements(driver, this);}
	
//	Team – add
	@FindBy(id = "txtGroupName") private WebElement teamNameTextBox;
	@FindBy(id = "txtDescription") private WebElement teamDescriptionTextBox;
	@FindBy(id = "radActive1") private WebElement activeYES;
	@FindBy(id = "radActive2") private WebElement aciveNO;
	@FindBy(id = "selectUsers") private WebElement leftSelect;
	@FindBy(id = "addUsers") private WebElement moveRightButton;
	@FindBy(id = "selectedUsers") private WebElement rightSelect;
	@FindBy(id = "removeUsers") private WebElement moveLeftButton;
	@FindBy(name = "btnSubmit") private WebElement submitButton;

//	Team - manage
	@FindBy(xpath = "//h5[text()='TESTTEAM']//parent::td//following-sibling::td[2]//a[1]") private WebElement editIcon;
	@FindBy(xpath = "//h5[text()='TESTTEAM']//parent::td//following-sibling::td[2]//a[2]") private WebElement deleteIcon;

	String random;
	
	public TeamsPage fillTeamName() {
		random = CommonUtils.randomNumber();
		teamNameTextBox.sendKeys("TESTTEAMNAME"+random);
		return this;
	}
	
	public TeamsPage fillTeamDescription() {
		teamDescriptionTextBox.sendKeys("TESTDESCRIPTION"+random);
		return this;
	}
	
	public TeamsPage addingSelectedUser() {
		Select select = new Select(leftSelect);
		select.selectByIndex(0);
		select.selectByIndex(1);
		moveRightButton.click();

		select = new Select(rightSelect);
		select.selectByIndex(0);
		moveLeftButton.click();
		return this;
	}
	
	public void clickSubmitButton()
	{
		submitButton.click();
		commonPreloadWait();
	}
	
	
}
