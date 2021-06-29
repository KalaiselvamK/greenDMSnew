@Settings
Feature: Settings Feature

Scenario: Adding User
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to General Setting page 
	Then Fill all the Setting details and Update
	And Logout the application