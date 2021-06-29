package com.dms.interfaces;


import org.openqa.selenium.WebElement;

public interface ICommon {

	void setup();
	void openURL(String url);
	void login(String userName, String passWord);
	void logout();
	String titleCheck();
	String footerCheck();
	<T>T navigateToPage(WebElement element, Class<T> landingClass);
	<T>T navigateToPage(WebElement fisrtElement, WebElement secondElement, Class<T> landingClass) throws Exception;
	void preloaderWait();
	void tearDown();
	void scrollTo(WebElement element);
	
}
