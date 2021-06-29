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

public class UsersPage extends TestBase{


	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	public UsersPage() {PageFactory.initElements(driver, this);}


	//	User Creation
	@FindBy(id = "txtUserName") private WebElement userNameTextBox;
	@FindBy(id = "txtRealName") private WebElement realNameTextBox;
	@FindBy(id = "txtEmpId") private WebElement employeeIDtextBox;
	@FindBy(id = "txtDepartment") private WebElement departmentDropdown;
	@FindBy(id = "radUserType") private WebElement userTypeDropdown;
	@FindBy(id = "txtPassWord") private WebElement passwordTextBox;
	@FindBy(id = "txtConfirmPassWord") private WebElement confirmPassword;
	@FindBy(id = "txtEmailServer") private WebElement emailServerDropdown;
	@FindBy(id = "txtUserEmail") private WebElement emailIDTextBox;
	@FindBy(name = "btnSubmit") private WebElement submitButton;


	//	User-manage
	@FindBy(xpath = "//a[@title='Edit']") private WebElement editIcon;

	//	User-department
	@FindBy(id = "txtDepartment") private WebElement departmentTextBox;
	@FindBy(xpath = "//input[@name='tblTxtDeprtmentName']") private WebElement allDepartments;
	@FindBy(xpath = "//input[@value='System Administration']//parent::td//following-sibling::td//a[1]") private WebElement saveChangeIcon; //need to pass as parameter
	@FindBy(xpath = "//input[@value='System Administration']//parent::td//following-sibling::td//a[2]") private WebElement deleteDepartment; //need to pass as parameter
	@FindBy(xpath = "//button[@class='cancel']") private WebElement cancelButton;	//can be reused these two
	@FindBy(xpath = "//button[@class='confirm']") private WebElement confirmButton;	//same for cancel’s confirm too
	@FindBy(xpath = "//td//input") private List<WebElement> allDepartmentNames;	//same for cancel’s confirm too
	
	


	Select select;
	private static String randomID;
	private static String createdDepartment;

	public void fillUserName() {
		randomID =CommonUtils.randomNumber();
		String name = "TESTUSERNAME"+randomID;
		userNameTextBox.sendKeys(name);
		logger.info("User Name Filled: "+name);

	}
	public void fillRealName() {
		String name = "TESTREALNAME"+randomID;
		realNameTextBox.sendKeys(name);
		logger.info("Real Name Filled: "+name);

	}
	public void fillEmpID() {
		String name = "TESTEMPID"+randomID;
		employeeIDtextBox.sendKeys(name);
		logger.info("Emp ID Filled: "+name);

	}
	public void selectDept() {
		select = new Select(departmentDropdown);
		select.selectByIndex(1);
	}
	public void selectUser() {
		select = new Select(userTypeDropdown);
		select.selectByIndex(1);
	}
	public void fillPassword() {
		passwordTextBox.sendKeys("Welcome@123");
	}
	public void fillConfirmPassword() {
		confirmPassword.sendKeys("Welcome@123");
	}

	public void fillEmailID() {
		emailIDTextBox.sendKeys("TESTUSERNAME"+randomID+"@abc.com");
	}

	public void clickSubmitButton() {
		submitButton.click();
		commonPreloadWait();
	}
	public String fillDepartmentName() {
		randomID =CommonUtils.randomNumber();
		createdDepartment = "TESTDEPARTMENT"+randomID;
		departmentTextBox.sendKeys(createdDepartment);
		return createdDepartment;
	}
	
	
	public void deleteCreatedDepatment(String dept)
	{
		driver.findElement(By.xpath("//input[@value='"+dept+"']//parent::td//following-sibling::td//a[2]")).click();
		logger.info("Created Department: "+dept +" Deleted Successfully");

		try {
			Thread.sleep(500);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		confirmButton.click();
		commonPreloadWait();
	}


}
