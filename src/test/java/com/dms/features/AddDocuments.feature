@AddDocuments
Feature: Testing Add Documents Feature

	
Scenario: Adding Single Document to Unassigned Folder
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Add Documents page
	Then Add single document to Unassigned Folder
	And Logout the application


Scenario: Adding Single Document to MyDocuments Folder
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Add Documents page
	And Add single document to My Documents Folder
	And Logout the application
	
@selectedScenario
Scenario: Adding Single Document to DMS Folder
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Add Documents page
	And Add single document to DMS Folder
	And Logout the application

	
Scenario: Adding Multiple Document to Unassigned folder
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Add Documents page
	And Add multiple documents to Unassigned Folder
	And Logout the application
	
	