@reports
Feature: Testing Reports Feature

Scenario Outline: Generate all Reports One By One
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Reports page
	Then Select "<Type of report>" from dropdown
	Then Generate report by filling necessary details
	And Verify report loaded in grid
	And Logout the application
Examples:
	|Type of report|
	|Access History|
	|Document Folder Access History|
	
	
	
Scenario: Generate all Reports One By One
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Reports page
	Then Select Bulk Job from dropdown
	And Verify report loaded in grid
	And Logout the application