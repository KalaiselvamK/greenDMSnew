package com.dms.stepDefinitions;

import org.apache.log4j.Logger;
import com.dms.pages.DashboardPage;
import com.dms.pages.SettingsPage;

import cucumber.api.java.en.Then;

public class SettingsStepDef {

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());
	DashboardPage dashboard = new DashboardPage();
	SettingsPage settingsPage;


	@Then("^Moving to General Setting page$")
	public void movingToGeneralSettingPage() {
		logger.info("***Moving to General Settings Page***");
		settingsPage = dashboard.navigateGeneralSettingsPage();
	}

	@Then("^Fill all the Setting details and Update$")
	public void fillAllTheSettingDetailsAndUpdate() {
		settingsPage.selectCutCopy().selectshowProperties().selectPrivacy().selectDateFormat().fillWaitMinute().selectMultiLevel().clickUpdateButton();
		logger.info("All deails in General Settings page are filled");


	}



}
