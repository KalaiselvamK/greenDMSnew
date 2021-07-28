$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddDocuments.feature");
formatter.feature({
  "line": 2,
  "name": "Testing Add Documents Feature",
  "description": "",
  "id": "testing-add-documents-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AddDocuments"
    }
  ]
});
formatter.before({
  "duration": 10568500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Adding Single Document to DMS Folder",
  "description": "",
  "id": "testing-add-documents-feature;adding-single-document-to-dms-folder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@selectedScenario"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Moving to Add Documents page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Add single document to DMS Folder",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 13401810900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 3315876700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 11902900700,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.movingToAddDocumentsPage()"
});
formatter.result({
  "duration": 5339468700,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.addSingleDocumentToDMSFolder()"
});
formatter.result({
  "duration": 1074593300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with index: 1\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.setSelectedByIndex(Select.java:297)\r\n\tat org.openqa.selenium.support.ui.Select.selectByIndex(Select.java:172)\r\n\tat com.dms.pages.AddDocumentsPage.selectDocumentFolder(AddDocumentsPage.java:89)\r\n\tat com.dms.stepDefinitions.AddDocumentsStepDef.addSingleDocumentToDMSFolder(AddDocumentsStepDef.java:64)\r\n\tat ✽.And Add single document to DMS Folder(AddDocuments.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "status": "skipped"
});
});