@DashboardFeature
Feature: Dashboard Feature

Scenario: Check Dashboard
	Given Open Browser
	Then Go to GreenDMS application
	When Checking loging page title is "GREENDMS - 4.0.0.19"
	And Login to the application
	