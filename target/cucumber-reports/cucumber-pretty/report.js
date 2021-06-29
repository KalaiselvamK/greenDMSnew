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
formatter.scenario({
  "line": 5,
  "name": "Adding Single Document to Unassigned Folder",
  "description": "",
  "id": "testing-add-documents-feature;adding-single-document-to-unassigned-folder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Moving to Add Documents page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Add single document to Unassigned Folder",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 21327614200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 1464408700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 18859438600,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.movingToAddDocumentsPage()"
});
formatter.result({
  "duration": 17903319500,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.addSingleDocumentToUnassignedFolder()"
});
formatter.result({
  "duration": 915213700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 45708109700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(AddDocuments.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Adding Single Document to MyDocuments Folder",
  "description": "",
  "id": "testing-add-documents-feature;adding-single-document-to-mydocuments-folder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Moving to Add Documents page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Add single document to My Documents Folder",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 1271514300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 469943500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20998274000,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.movingToAddDocumentsPage()"
});
formatter.result({
  "duration": 16906336700,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.addSingleDocumentToMyDocumentsFolder()"
});
formatter.result({
  "duration": 1541050400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 45751895300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(AddDocuments.feature:20)\r\n",
  "status": "failed"
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
  "duration": 162397100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 506566000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20338513100,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.movingToAddDocumentsPage()"
});
formatter.result({
  "duration": 16602723300,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.addSingleDocumentToDMSFolder()"
});
formatter.result({
  "duration": 2940024500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 46584320100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(AddDocuments.feature:29)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 32,
  "name": "Adding Multiple Document to Unassigned folder",
  "description": "",
  "id": "testing-add-documents-feature;adding-multiple-document-to-unassigned-folder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Moving to Add Documents page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Add multiple documents to Unassigned Folder",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 191023000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 593206400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20751151800,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.movingToAddDocumentsPage()"
});
formatter.result({
  "duration": 17239096600,
  "status": "passed"
});
formatter.match({
  "location": "AddDocumentsStepDef.addMultipleDocumentToUnassignedFolder()"
});
formatter.result({
  "duration": 1039528900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 46048576800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(AddDocuments.feature:38)\r\n",
  "status": "failed"
});
formatter.uri("Dashboard.feature");
formatter.feature({
  "line": 2,
  "name": "Dashboard Feature",
  "description": "",
  "id": "dashboard-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DashboardFeature"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check Dashboard",
  "description": "",
  "id": "dashboard-feature;check-dashboard",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Checking loging page title is \"GREENDMS - 4.0.0.19\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Login to the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 225633400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 370234100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GREENDMS - 4.0.0.19",
      "offset": 31
    }
  ],
  "location": "LoginStepDef.checkingLogingPageTitleIs(String)"
});
formatter.result({
  "duration": 29815400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20497437500,
  "status": "passed"
});
formatter.uri("Folder.feature");
formatter.feature({
  "line": 2,
  "name": "Testing Folders Feature",
  "description": "",
  "id": "testing-folders-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Folder"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Creating Document folder inside Repository",
  "description": "",
  "id": "testing-folders-feature;creating-document-folder-inside-repository",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Moving to Folder page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Create Document Folder inside \"Repository\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 115100600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 395672600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20619941700,
  "status": "passed"
});
formatter.match({
  "location": "FolderStepDef.movingToFolderPage()"
});
formatter.result({
  "duration": 8290580300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Repository",
      "offset": 31
    }
  ],
  "location": "FolderStepDef.createDocumentFolderInside(String)"
});
formatter.result({
  "duration": 1891391000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 40076266500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Folder.feature:11)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Creating Parent Folder",
  "description": "",
  "id": "testing-folders-feature;creating-parent-folder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Moving to Folder page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Create Parent Folder",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 208859700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 426744300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20604074000,
  "status": "passed"
});
formatter.match({
  "location": "FolderStepDef.movingToFolderPage()"
});
formatter.result({
  "duration": 8688879600,
  "status": "passed"
});
formatter.match({
  "location": "FolderStepDef.createParentFolder()"
});
formatter.result({
  "duration": 1369713300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 52986531200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Folder.feature:19)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "Creating Document Folder inside Parent Folder",
  "description": "",
  "id": "testing-folders-feature;creating-document-folder-inside-parent-folder",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@FolderSpecific"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Moving to Folder page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Create Document Folder inside \"Parent Folder\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 327683300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 406297700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20821169500,
  "status": "passed"
});
formatter.match({
  "location": "FolderStepDef.movingToFolderPage()"
});
formatter.result({
  "duration": 8753619100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Parent Folder",
      "offset": 31
    }
  ],
  "location": "FolderStepDef.createDocumentFolderInside(String)"
});
formatter.result({
  "duration": 1501726500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 52811074500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Folder.feature:28)\r\n",
  "status": "failed"
});
formatter.uri("IndexGroup.feature");
formatter.feature({
  "line": 2,
  "name": "Index Group Feature",
  "description": "",
  "id": "index-group-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@IndexGroup"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Creating Index Group",
  "description": "",
  "id": "index-group-feature;creating-index-group",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Moving to Index Group page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click New button to create new index group",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Type Index Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Save and provide necessary details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Save and verify created Index Group",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 359159300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 478950200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 21095120100,
  "status": "passed"
});
formatter.match({
  "location": "IndexGroupStepDef.movingToIndexGroupPage()"
});
formatter.result({
  "duration": 113879246500,
  "status": "passed"
});
formatter.match({
  "location": "IndexGroupStepDef.clickNewButtonToCreateNewIndexGroup()"
});
formatter.result({
  "duration": 3949614000,
  "status": "passed"
});
formatter.match({
  "location": "IndexGroupStepDef.typeIndexName()"
});
formatter.result({
  "duration": 196896000,
  "status": "passed"
});
formatter.match({
  "location": "IndexGroupStepDef.saveAndProvideNecessaryDetails()"
});
formatter.result({
  "duration": 7453382200,
  "status": "passed"
});
formatter.match({
  "location": "IndexGroupStepDef.saveAndVerifyCreatedIndexGroup()"
});
formatter.result({
  "duration": 61447076900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31052968900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(IndexGroup.feature:13)\r\n",
  "status": "failed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check Login Functionality",
  "description": "",
  "id": "login-feature;check-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Checking loging page title is \"GREENDMS - 4.0.0.19\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Login to the application",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 13898286800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 525087800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GREENDMS - 4.0.0.19",
      "offset": 31
    }
  ],
  "location": "LoginStepDef.checkingLogingPageTitleIs(String)"
});
formatter.result({
  "duration": 16474200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 21541153000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31021736200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.uri("MyQueue.feature");
formatter.feature({
  "line": 2,
  "name": "MyQueue Feature",
  "description": "",
  "id": "myqueue-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@MyQueue"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Decline And Complete Documents",
  "description": "",
  "id": "myqueue-feature;decline-and-complete-documents",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter into MyQueue page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select \"\u003cInitial\u003e\" from the dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter inside any one from the displayed list",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Scroll down to the Status dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select \"\u003cFinal\u003e\" from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Save to come to MyQueue page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Select \"\u003cFinal\u003e\" from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the status of the changed document",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "myqueue-feature;decline-and-complete-documents;",
  "rows": [
    {
      "cells": [
        "Initial",
        "Final"
      ],
      "line": 20,
      "id": "myqueue-feature;decline-and-complete-documents;;1"
    },
    {
      "cells": [
        "In Progress",
        "Declined"
      ],
      "line": 21,
      "id": "myqueue-feature;decline-and-complete-documents;;2"
    },
    {
      "cells": [
        "In Progress",
        "Completed"
      ],
      "line": 22,
      "id": "myqueue-feature;decline-and-complete-documents;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Decline And Complete Documents",
  "description": "",
  "id": "myqueue-feature;decline-and-complete-documents;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@MyQueue"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter into MyQueue page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select \"In Progress\" from the dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter inside any one from the displayed list",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Scroll down to the Status dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select \"Declined\" from the dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Save to come to MyQueue page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Select \"Declined\" from the dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the status of the changed document",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 481079300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 742948100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 21033153700,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.enterIntoMyQueuePage()"
});
formatter.result({
  "duration": 4101342200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Progress",
      "offset": 8
    }
  ],
  "location": "MyQueueStepDef.selectFromTheDropdown(String)"
});
formatter.result({
  "duration": 112550700,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.enterInsideAnyOneFromTheDisplayedList()"
});
formatter.result({
  "duration": 7861448500,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.scrollDownToTheStatusDropdown()"
});
formatter.result({
  "duration": 27423000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Declined",
      "offset": 8
    }
  ],
  "location": "MyQueueStepDef.selectFromTheDropdown(String)"
});
formatter.result({
  "duration": 181942900,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.saveToComeToMyQueuePage()"
});
formatter.result({
  "duration": 3885507300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Declined",
      "offset": 8
    }
  ],
  "location": "MyQueueStepDef.selectFromTheDropdown(String)"
});
formatter.result({
  "duration": 181880400,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.verifyTheStatusOfTheChangedDocument()"
});
formatter.result({
  "duration": 1564140500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31109609300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(MyQueue.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "Decline And Complete Documents",
  "description": "",
  "id": "myqueue-feature;decline-and-complete-documents;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@MyQueue"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter into MyQueue page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select \"In Progress\" from the dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter inside any one from the displayed list",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Scroll down to the Status dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select \"Completed\" from the dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Save to come to MyQueue page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Select \"Completed\" from the dropdown",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the status of the changed document",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 449353900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 434644500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20676394700,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.enterIntoMyQueuePage()"
});
formatter.result({
  "duration": 4223249500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "In Progress",
      "offset": 8
    }
  ],
  "location": "MyQueueStepDef.selectFromTheDropdown(String)"
});
formatter.result({
  "duration": 159722400,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.enterInsideAnyOneFromTheDisplayedList()"
});
formatter.result({
  "duration": 7819805300,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.scrollDownToTheStatusDropdown()"
});
formatter.result({
  "duration": 25182200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completed",
      "offset": 8
    }
  ],
  "location": "MyQueueStepDef.selectFromTheDropdown(String)"
});
formatter.result({
  "duration": 364765700,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.saveToComeToMyQueuePage()"
});
formatter.result({
  "duration": 3864688200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completed",
      "offset": 8
    }
  ],
  "location": "MyQueueStepDef.selectFromTheDropdown(String)"
});
formatter.result({
  "duration": 374190900,
  "status": "passed"
});
formatter.match({
  "location": "MyQueueStepDef.verifyTheStatusOfTheChangedDocument()"
});
formatter.result({
  "duration": 1574540200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 30975113100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(MyQueue.feature:16)\r\n",
  "status": "failed"
});
formatter.uri("Reports.feature");
formatter.feature({
  "line": 2,
  "name": "Testing Reports Feature",
  "description": "",
  "id": "testing-reports-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@reports"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Generate all Reports One By One",
  "description": "",
  "id": "testing-reports-feature;generate-all-reports-one-by-one",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Moving to Reports page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select \"\u003cType of report\u003e\" from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Generate report by filling necessary details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify report loaded in grid",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "testing-reports-feature;generate-all-reports-one-by-one;",
  "rows": [
    {
      "cells": [
        "Type of report"
      ],
      "line": 14,
      "id": "testing-reports-feature;generate-all-reports-one-by-one;;1"
    },
    {
      "cells": [
        "Access History"
      ],
      "line": 15,
      "id": "testing-reports-feature;generate-all-reports-one-by-one;;2"
    },
    {
      "cells": [
        "Document Folder Access History"
      ],
      "line": 16,
      "id": "testing-reports-feature;generate-all-reports-one-by-one;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Generate all Reports One By One",
  "description": "",
  "id": "testing-reports-feature;generate-all-reports-one-by-one;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@reports"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Moving to Reports page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select \"Access History\" from dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Generate report by filling necessary details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify report loaded in grid",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 1459545400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 647361300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 21094954800,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.movingToReportsPage()"
});
formatter.result({
  "duration": 3734167400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Access History",
      "offset": 8
    }
  ],
  "location": "ReportsStepDef.selectFromDropdown(String)"
});
formatter.result({
  "duration": 3129284400,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.generateReportByFillingNecessaryDetails()"
});
formatter.result({
  "duration": 5577366500,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.verifyReportLoadedInGrid()"
});
formatter.result({
  "duration": 56407900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31060834900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Reports.feature:12)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Generate all Reports One By One",
  "description": "",
  "id": "testing-reports-feature;generate-all-reports-one-by-one;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@reports"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Moving to Reports page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select \"Document Folder Access History\" from dropdown",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Generate report by filling necessary details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify report loaded in grid",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 271813900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 431030700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20958796300,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.movingToReportsPage()"
});
formatter.result({
  "duration": 3141690200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Document Folder Access History",
      "offset": 8
    }
  ],
  "location": "ReportsStepDef.selectFromDropdown(String)"
});
formatter.result({
  "duration": 14564979600,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.generateReportByFillingNecessaryDetails()"
});
formatter.result({
  "duration": 16215933700,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.verifyReportLoadedInGrid()"
});
formatter.result({
  "duration": 30025068000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.dms.stepDefinitions.ReportsStepDef.verifyReportLoadedInGrid(ReportsStepDef.java:47)\r\n\tat ✽.And Verify report loaded in grid(Reports.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Generate all Reports One By One",
  "description": "",
  "id": "testing-reports-feature;generate-all-reports-one-by-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Moving to Reports page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Select Bulk Job from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Verify report loaded in grid",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 685134800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 463126600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 21456254700,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.movingToReportsPage()"
});
formatter.result({
  "duration": 4162473400,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.SelectBulkJobFromDropdown()"
});
formatter.result({
  "duration": 3641359300,
  "status": "passed"
});
formatter.match({
  "location": "ReportsStepDef.verifyReportLoadedInGrid()"
});
formatter.result({
  "duration": 21409600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 30716688100,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Reports.feature:27)\r\n",
  "status": "failed"
});
formatter.uri("Settings.feature");
formatter.feature({
  "line": 2,
  "name": "Settings Feature",
  "description": "",
  "id": "settings-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Settings"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Adding User",
  "description": "",
  "id": "settings-feature;adding-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Moving to General Setting page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Fill all the Setting details and Update",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 193180600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 428315100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20456431300,
  "status": "passed"
});
formatter.match({
  "location": "SettingsStepDef.movingToGeneralSettingPage()"
});
formatter.result({
  "duration": 4085634600,
  "status": "passed"
});
formatter.match({
  "location": "SettingsStepDef.fillAllTheSettingDetailsAndUpdate()"
});
formatter.result({
  "duration": 7235978900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31111904400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Settings.feature:10)\r\n",
  "status": "failed"
});
formatter.uri("Teams.feature");
formatter.feature({
  "line": 2,
  "name": "Teams Feature",
  "description": "",
  "id": "teams-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Teams"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Adding User",
  "description": "",
  "id": "teams-feature;adding-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Moving to Add Teams page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Fill Team details and Submit",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 206303900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 357849800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20935043500,
  "status": "passed"
});
formatter.match({
  "location": "TeamsStepDef.movingToAddTeamsPage()"
});
formatter.result({
  "duration": 3829232700,
  "status": "passed"
});
formatter.match({
  "location": "TeamsStepDef.fillTeamDetailsAndSubmit()"
});
formatter.result({
  "duration": 6901792300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31054124400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Teams.feature:10)\r\n",
  "status": "failed"
});
formatter.uri("Users.feature");
formatter.feature({
  "line": 2,
  "name": "Users Feature",
  "description": "",
  "id": "users-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Users"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Adding User",
  "description": "",
  "id": "users-feature;adding-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Moving to Add Users page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Fill all the details and Submit",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 221972300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 449579700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 20781043500,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDef.movingToAddUsersPage()"
});
formatter.result({
  "duration": 3822722700,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDef.fillAllTheDetailsAndSubmit()"
});
formatter.result({
  "duration": 7922444200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31122639700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Users.feature:10)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 13,
  "name": "Testing Department Page",
  "description": "",
  "id": "users-feature;testing-department-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@UsersSelected"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Moving to Department User page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Fill Department Name and Submit",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Delete the created Department",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 193291200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 438325900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 21155012000,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDef.movingToDepartmentUserPage()"
});
formatter.result({
  "duration": 3774861000,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDef.fillDepartmentNameAndSubmit()"
});
formatter.result({
  "duration": 2994280400,
  "status": "passed"
});
formatter.match({
  "location": "UsersStepDef.deleteTheCreatedDepartment()"
});
formatter.result({
  "duration": 3382543400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 32175508700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Users.feature:20)\r\n",
  "status": "failed"
});
formatter.uri("Workflow.feature");
formatter.feature({
  "line": 2,
  "name": "Testng Workflow Feature",
  "description": "",
  "id": "testng-workflow-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Workflow"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Creating Workflow",
  "description": "",
  "id": "testng-workflow-feature;creating-workflow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Go to GreenDMS application",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Login to the application",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter into Workflow master page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter plus icon to create new Workflow",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter workflow name",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Fill step details",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Save workflow and verify",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.openGreeDMSApplication()"
});
formatter.result({
  "duration": 194523900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 418936100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 21043291600,
  "status": "passed"
});
formatter.match({
  "location": "WorkFlowStepDef.enterIntoWorkflowMasterPage()"
});
formatter.result({
  "duration": 3241987500,
  "status": "passed"
});
formatter.match({
  "location": "WorkFlowStepDef.enterPlusIconToCreateNewWorkflow()"
});
formatter.result({
  "duration": 113758600,
  "status": "passed"
});
formatter.match({
  "location": "WorkFlowStepDef.enterWorkflowName()"
});
formatter.result({
  "duration": 211740800,
  "status": "passed"
});
formatter.match({
  "location": "WorkFlowStepDef.fillStepDetails()"
});
formatter.result({
  "duration": 446925300,
  "status": "passed"
});
formatter.match({
  "location": "WorkFlowStepDef.saveWorkflowAndVerify()"
});
formatter.result({
  "duration": 7777059100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31128947400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (c2537d762975b6f0b75080baafad7fe3)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\ELCOT\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56738}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c2537d762975b6f0b75080baafad7fe3\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:92)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Workflow.feature:13)\r\n",
  "status": "failed"
});
});