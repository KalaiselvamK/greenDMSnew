@Folder	
Feature: Testing Folders Feature


Scenario: Creating Document folder inside Repository
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Folder page
	Then Create Document Folder inside "Repository"
	And Logout the application
		
Scenario: Creating Parent Folder
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Folder page
	Then Create Parent Folder
	And Logout the application
	
@FolderSpecific
Scenario: Creating Document Folder inside Parent Folder
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Folder page
	Then Create Document Folder inside "Parent Folder"
	And Logout the application
