@IndexGroup
Feature: Index Group Feature

Scenario: Creating Index Group
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Index Group page 
	Then Click New button to create new index group
	And Type Index Name
	And Save and provide necessary details
	And Save and verify created Index Group
	And Logout the application