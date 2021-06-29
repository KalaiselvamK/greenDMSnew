package com.dms.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.dms.base.TestBase;

public class SettingsPage extends TestBase {

	

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	public SettingsPage() {PageFactory.initElements(driver, this);}

	
	@FindBy(id = "allowCutCopy") private WebElement allowCutCopyDropdown;
	@FindBy(id = "showDocPpty") private WebElement showPropertiesDropdown;
	@FindBy(id = "enableDocPrivacy") private WebElement enablePrivacyDropdown;
	@FindBy(xpath = "//select[@id='dateFormat']") private WebElement dateDropdown;
	@FindBy(id = "waitMinute") private WebElement waitTextBox;
	@FindBy(id = "folderMultilevel") private WebElement multiLevelDropdown;
	@FindBy(id = "btnSubmit") private WebElement updateButton;
	Select select;
	
	public SettingsPage selectCutCopy()
	{
		select = new Select(allowCutCopyDropdown);
		select.selectByIndex(0);
		return this;
	}
	public SettingsPage selectshowProperties()
	{
		select = new Select(showPropertiesDropdown);
		select.selectByIndex(0);
		return this;	
	}
	public SettingsPage selectPrivacy()
	{
		select = new Select(enablePrivacyDropdown);
		select.selectByIndex(0);
		return this;
	}
	public SettingsPage selectDateFormat()
	{
		select = new Select(dateDropdown);
		select.selectByIndex(0);
		return this;
	}

	public SettingsPage fillWaitMinute()
	{
		waitTextBox.clear();
		waitTextBox.sendKeys("60");
		return this;
	}
	
	public SettingsPage selectMultiLevel()
	{
		select = new Select(multiLevelDropdown);
		select.selectByIndex(0);
		return this;
	}
	public void clickUpdateButton()
	{
		updateButton.click();
		commonPreloadWait();
	}

	
	
}
