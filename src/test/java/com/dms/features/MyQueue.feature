@MyQueue
Feature: MyQueue Feature

Scenario Outline: Decline And Complete Documents
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Enter into MyQueue page
	When Select "<Initial>" from the dropdown
	Then Enter inside any one from the displayed list
	Then Scroll down to the Status dropdown
	And Select "<Final>" from the dropdown
	Then Save to come to MyQueue page
	And Select "<Final>" from the dropdown
	And Verify the status of the changed document
	And Logout the application
	
	Examples:
	
		|	Initial		|	Final		|
		|	In Progress	|	Declined	|
		|	In Progress	|	Completed	|
	
	
#Scenario: Complete a Document
#	Given Open Browser
#	Then Go to GreenDMS application
#	Then Login to the application
#	Then Enter into MyQueue page
#	When Select "In Progress" from the dropdown
#	Then Enter inside any one from the displayed list
#	Then Scroll down to the Status dropdown
#	And Select "Completed" from the dropdown
#	Then Save to come to MyQueue page
#	And Select "Completed" from the dropdown
#	And Verify the status of the changed document