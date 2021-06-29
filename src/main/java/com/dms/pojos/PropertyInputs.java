package com.dms.pojos;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.apache.log4j.Logger;

public class PropertyInputs {

	private String userName;		//data hiding
	private String password;
	private String URL;
	private int waitTime;
	private String expFooter;
	private Properties prop;
	private FileInputStream fis;
//	private FileOutputStream fos;

	Logger logger=Logger.getLogger(this.getClass().getSimpleName());

	public PropertyInputs()
	{
		try 
		{
			prop= new Properties();
			fis = new FileInputStream(".\\src\\main\\java\\com\\dms\\properties\\config.properties");
			prop.load(fis);

//			fos = new FileOutputStream(".\\src\\main\\java\\com\\dms\\properties\\config.properties");
		}
		catch (Exception e)
		{
			logger.info(e.toString());
		}
		finally {
			try {fis.close();}
			catch(IOException e) {logger.info(e.toString());}
		}

		this.userName=prop.getProperty("userName");
		this.password=prop.getProperty("passWord");
		this.URL=prop.getProperty("url");
		this.waitTime=Integer.parseInt(prop.getProperty("waitTime"));
		this.expFooter = prop.getProperty("expFooter");
	}


	public String getUserName() 
	{
		return userName;
	}
	public String getPassword() 
	{
		return password;
	}
	public String getURL() 
	{
		return URL;
	}
	public int getWaitTime() 
	{
		return waitTime;
	}
	public String expFooter() 
	{
		return expFooter;
	}

}
