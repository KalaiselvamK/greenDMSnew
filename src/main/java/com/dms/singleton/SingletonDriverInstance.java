package com.dms.singleton;

import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.CapabilityType;

public class SingletonDriverInstance {

	private static WebDriver driver=null;
	private SingletonDriverInstance(){}

	public static WebDriver getDriver()
	{
		if(driver==null)
		{
			System.setProperty("webdriver.chrome.driver",".\\ChromeDriver\\ChromeDriver.exe");
			ChromeOptions capability = new ChromeOptions();
			capability.setPageLoadStrategy(PageLoadStrategy.NONE);
			capability.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
			capability.setCapability(CapabilityType.ACCEPT_INSECURE_CERTS,true);        
			driver = new ChromeDriver(capability);
			return driver;
		}
		else return driver;
	}

}
