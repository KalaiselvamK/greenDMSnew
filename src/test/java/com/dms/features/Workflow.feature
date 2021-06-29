@Workflow
Feature: Testng Workflow Feature

Scenario: Creating Workflow
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Enter into Workflow master page
	When Enter plus icon to create new Workflow
	Then Enter workflow name
	Then Fill step details
	And Save workflow and verify
	And Logout the application

