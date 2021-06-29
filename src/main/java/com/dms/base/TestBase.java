package com.dms.base;

import java.util.List;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.dms.interfaces.ICommon;
import com.dms.pojos.PropertyInputs;
import com.dms.singleton.SingletonDriverInstance;
import com.vimalselvam.cucumber.listener.Reporter;


public class TestBase implements ICommon {

	public static WebDriver driver;
	public static PropertyInputs propertyInputs;
	public static WebDriverWait wait;
	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	public TestBase(){ 
		try {
			propertyInputs = new PropertyInputs();
			PropertyConfigurator.configure(".\\src\\main\\java\\com\\dms\\properties\\log4j.properties");
		}
		catch (Exception e) {
			e.printStackTrace();
			logger.info(e.toString());
		}
	}

	@Override
	public void setup() {
		try {
			driver = SingletonDriverInstance.getDriver();
			int time=propertyInputs.getWaitTime();			//need to create singleton class
			wait = new WebDriverWait(driver, time);
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(time, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
			logger.info("Browser set-up completed");
			Reporter.addStepLog("Browser opened");
		} 
		catch(Exception e){
			logger.info("Exception in Browser set-up");
			logger.info(e.toString());
			driver.quit();
			logger.info("JVM shutting down....!!!!");
			Reporter.addStepLog("Exception in browser opening, JVM shutting down");
			System.exit(0);
		}
	}

	@Override
	public void openURL(String url) {
		driver.get(url);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h2/span")));
	}	

	@Override
	public void login(String userName, String passWord) {
		logger.info("Logging in...");
		driver.findElement(By.id("txtLoginId")).sendKeys(propertyInputs.getUserName());
		driver.findElement(By.id("txtPassword")).sendKeys(propertyInputs.getPassword());
		driver.findElement(By.id("btnLogin")).submit();

		WebElement logoutButton = driver.findElement(By.xpath("//a[@href='/logout']"));
		if(logoutButton.isDisplayed())
		{
			logger.info("Already logged in, so logging out and retrying...");
			logoutButton.click();
			driver.findElement(By.id("txtLoginId")).sendKeys(propertyInputs.getUserName());
			driver.findElement(By.id("txtPassword")).sendKeys(propertyInputs.getPassword());
			driver.findElement(By.id("btnLogin")).submit();
		}

		preloaderWait();
	}

	@Override
	public void logout() {
		commonPreloadWait();
//		commonPreloadWait();
		logger.info("Logging out...");
		WebElement element = driver.findElement(By.xpath("//a[text()='Logout']"));
		wait.until(ExpectedConditions.elementToBeClickable(element)).click();
		logger.info("Logged out...");
	}

	@Override
	public String titleCheck() {
		logger.info("Checking title");
		return driver.getTitle();
	}

	@Override
	public String footerCheck() {
		logger.info("Checking footer");
		WebElement element = driver.findElement(By.cssSelector(".main-footer"));
		return element.getText();
	}

	@Override
	public <T> T navigateToPage(WebElement element, Class<T> landingClass){
		element.click();
		preloaderWait();
		//return (T)landingClass.newInstance();  -- another way
		try {
			logger.info("Generic method called to navigate page:  "+landingClass.newInstance().getClass().getName());
			return landingClass.getDeclaredConstructor().newInstance();
		}
		catch (Exception e) 
		{
			logger.info(e.toString());
			return null;
		}
	}

	@Override
	public <T> T navigateToPage(WebElement firstElement, WebElement secondElement, Class<T> landingClass) 
	{
		firstElement.click();
		secondElement.click();		
		preloaderWait();
		//return (T)landingClass.newInstance();  -- another way
		try {
			logger.info("Generic method called to navigate page:  "+landingClass.newInstance().getClass().getName());
			return landingClass.getDeclaredConstructor().newInstance();
		}
		catch (Exception e) 
		{
			logger.info(e.toString());
			return null;
		}
	}

	@Override
	public void preloaderWait() {
		logger.info("Waiting for preloader...");
		wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
	}

	public void commonPreloadWait()
	{
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.MILLISECONDS);

		while(true)
		{
			logger.info("Entered into while block...");
			String flag = null;

			if(driver.findElements(By.xpath("//div[@class='loadmodal']")).size() != 0)
			{
				logger.info("Waiting for loadmodal disappear...");
				wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@class='loadmodal']"))));
				logger.info("Waited for loadmodal disappear...");
				flag = "loadmodal";
			}

			if(driver.findElements(By.xpath("//div[@class='sweet-overlay' and contains(@style,'display: block')]")).size() != 0)
			{
				logger.info("Waiting for sweet-overlay disappear...");
				wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@class='sweet-overlay' and contains(@style,'display: block')]"))));
				logger.info("Waited for sweet-overlay disappear...");
				flag = "sweet-overlay";
			}

			if(driver.findElements(By.xpath("//body[contains(@class,'stop-scrolling')]")).size() != 0)
			{
				logger.info("Waiting for stop-scrolling disappear...");
				wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//body[contains(@class,'pace-done')]")));
				logger.info("Waited for stop-scrolling disappear...");
				flag = "stop-scrolling";
			}


			if(driver.findElements(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]")).size() != 0)
			{
				logger.info("Waiting for preloader disappear...");
				wait.until(ExpectedConditions.invisibilityOf(driver.findElement(By.xpath("//div[@id='preloader' and contains(@style,'opacity')]"))));
				logger.info("Waited for preloader disappear...");
				flag = "preloader";
			}

			if(flag==null)
			{
				logger.info("All waits are over");
				break;
			}
			else {logger.info(flag);}
		}
		driver.manage().timeouts().implicitlyWait(propertyInputs.getWaitTime(), TimeUnit.SECONDS);

	}

	public boolean isRecordsFoundInGrid()
	{
		if(driver.findElements(By.xpath("//div[@class='panel-body']//table")).size() != 0)
		{
			return true;
		}
		else {return false;}
	}
	
	public boolean isRecordFoundInGrid(List<WebElement> elements, String toBeCheckedElement)
	{
		boolean isFound = false;
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		logger.info("Record to be checked: "+ toBeCheckedElement);
		for(WebElement elemnt : elements )
		{
			logger.info("current iteration record: "+ elemnt.getText());
			if(elemnt.getText().contains(toBeCheckedElement)) {
				isFound = true;
				logger.info("Record Found");
				break;
			}
		}
		return isFound;
	}

	@Override
	public void tearDown() {
		logger.info("WebDriver going to quit...");
		driver.quit();
	}
	
	public void scrollTo(WebElement element)
	{
		((JavascriptExecutor)driver).executeScript("arguments[0].scrollIntoView();", element);
		logger.info("Scrolled to the element");
	}

}
