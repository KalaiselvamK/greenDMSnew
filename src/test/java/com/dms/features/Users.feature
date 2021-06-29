@Users
Feature: Users Feature

Scenario: Adding User
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Add Users page 
	Then Fill all the details and Submit
	And Logout the application

@UsersSelected	
Scenario: Testing Department Page
	Given Open Browser
	Then Go to GreenDMS application
	Then Login to the application
	Then Moving to Department User page 
	Then Fill Department Name and Submit
	And Delete the created Department
	And Logout the application
	