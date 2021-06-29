package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import com.dms.pages.DashboardPage;
import com.dms.pages.UsersPage;
import cucumber.api.java.en.Then;

public class UsersStepDef {

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	UsersPage usersPage;
	private static String createdDepartment;



	@Then("^Moving to Add Users page$")
	public void movingToAddUsersPage(){
		logger.info("***Moving to Add Users Page***");
		usersPage = dashboard.navigateAddUserPage();
	}

	@Then("^Fill all the details and Submit$")
	public void fillAllTheDetailsAndSubmit(){
		usersPage.fillUserName();
		usersPage.fillRealName();
		usersPage.fillEmpID();
		usersPage.selectDept();
		logger.info("Department selected");
		usersPage.selectUser();
		logger.info("User Selected");
		usersPage.fillPassword();
		logger.info("Password Filled");
		usersPage.fillConfirmPassword();
		logger.info("Confirm Password Filled");
		usersPage.fillEmailID();
		logger.info("Email ID Filled");
		usersPage.clickSubmitButton();
		logger.info("Submit button clicked");
	}



	@Then("^Moving to Department User page$")
	public void movingToDepartmentUserPage(){
		logger.info("***Moving to Departments Users Page***");
		usersPage = dashboard.navigateDepartmentUserPage();
	}

	@Then("^Fill Department Name and Submit$")
	public void fillDepartmentNameAndSubmit() throws InterruptedException{
		createdDepartment = usersPage.fillDepartmentName();
		logger.info("Created Department Name: "+createdDepartment);
		usersPage.clickSubmitButton();
		Thread.sleep(2000);
	}

	@Then("^Delete the created Department$")
	public void deleteTheCreatedDepartment(){
		usersPage.deleteCreatedDepatment(createdDepartment);
	}




}
