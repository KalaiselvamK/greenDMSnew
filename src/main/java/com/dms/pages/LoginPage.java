package com.dms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.dms.base.TestBase;

public class LoginPage extends TestBase {

	@FindBy(id = "txtLoginId") private WebElement userNameTextBox;
	@FindBy(id = "txtPassword") private WebElement passWordTextBox;
	@FindBy(id = "btnLogin") private WebElement LoginButton;
	
	public LoginPage() {
		super();
		PageFactory.initElements(driver, this);
	}
}
