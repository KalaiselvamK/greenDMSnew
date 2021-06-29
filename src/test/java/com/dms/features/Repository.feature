@RepositoryFeature
Feature: Repository Feature

@RepositoryFeatureSelected
Scenario: Checking all personal folders
	Given Enter into Repository folder
	When Enter and Verify Personal folder
	Then Ensure Private folder header is "Repository / Private Documents" and verify
	And Ensure Shared folder header is "Repository / Shared Documents" and verify
	And Ensure MyDocuments folder header is "Repository / My Documents" and verify
	And Ensure Unassigned folder header is "Repository / *********" and verify
	
	
Scenario: Checking DMS folder
	Given Enter into Repository folder
	When Enter and Verify DMS folder/subfolder
	
	
Scenario: Perform individual file actions
	Given Enter into Repository folder
	When Enter and Verify DMS folder/subfolder
	Then Check file info
	And Make document private
	And Set reminder
	
	
Scenario: Perform footer operations
	Given Export as ZIP file
	Then Export as XLSX file
	And Export as CSV file
	And Select a file and delete
	
Scenario: Perform details search action
	Given Fetch any single file's details from grid
	Then Search in details search pane and verify
	
	