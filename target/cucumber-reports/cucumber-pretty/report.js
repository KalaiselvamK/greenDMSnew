$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
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
  "duration": 58185775801,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.goToGreeDMSApplication()"
});
formatter.result({
  "duration": 3174502599,
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
  "duration": 413416599,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.loginToTheApplication()"
});
formatter.result({
  "duration": 22652525399,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.logoutTheApplication()"
});
formatter.result({
  "duration": 31486703899,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: [[ChromeDriver: chrome on WINDOWS (efed1d524cf0c24e8b3d553a346e6e5c)] -\u003e xpath: //a[text()\u003d\u0027Logout\u0027]] (tried for 30 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SHARP\u0027, ip: \u0027192.168.1.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 91.0.4472.114, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir1...}, goog:chromeOptions: {debuggerAddress: localhost:58839}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: none, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: efed1d524cf0c24e8b3d553a346e6e5c\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.dms.base.TestBase.logout(TestBase.java:93)\r\n\tat com.dms.stepDefinitions.LoginStepDef.logoutTheApplication(LoginStepDef.java:43)\r\n\tat ✽.And Logout the application(Login.feature:9)\r\n",
  "status": "failed"
});
