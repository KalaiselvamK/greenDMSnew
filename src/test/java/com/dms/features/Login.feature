@LoginFeature
Feature: Login Feature

Scenario: Check Login Functionality
	Given Open Browser
	Then Go to GreenDMS application
	When Checking loging page title is "GREENDMS - 4.0.0.19"
	And Login to the application
	And Logout the application
	

	