package com.dms.stepDefinitions;

import org.apache.log4j.Logger;

import com.dms.pages.DashboardPage;
import com.dms.pages.TeamsPage;

import cucumber.api.java.en.Then;

public class TeamsStepDef {
	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	TeamsPage teamsPage;
	
	
	@Then("^Moving to Add Teams page$")
	public void movingToAddTeamsPage(){
		logger.info("***Moving to Add Users Page***");
		teamsPage = dashboard.navigateAddTeamsPage();
	  }

	@Then("^Fill Team details and Submit$")
	public void fillTeamDetailsAndSubmit(){
		teamsPage.fillTeamName().fillTeamDescription().addingSelectedUser().clickSubmitButton();
		logger.info("All Details Entered, Teams Created");

	  }


	
}
