package com.dms.util;

import java.io.File;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class CommonUtils {

	public static String getFirstFileName(String directory) {
		File dir = new File(directory);
		File[] files = dir.listFiles();
		String path = files[0].toString();
		int beginIndex = path.lastIndexOf("\\");
		String fileName = path.substring(beginIndex+1);
		return fileName;
	}
	
	public static String randomNumber()
	{
		Random random = new Random();
		Integer rn =  random.nextInt(99);
		return rn.toString();
	}

	public static String getDate(int dateDeviation)
	{
		DateTimeFormatter format =	DateTimeFormatter.ofPattern("dd-MM-yyyy");
		LocalDateTime now = LocalDateTime.now();
		String extDate = format.format(now.plusDays(dateDeviation));
		return extDate;
	}
	
	

	public static List<String> getAllFileNames(String directory) {
		File dir = new File(directory);
		File[] filePaths = dir.listFiles();
		List<String> fileNames = new ArrayList<String>();
		for(int i=0; i<filePaths.length;i++)
		{
			if(!filePaths[i].isHidden())
			{
				String path = filePaths[i].toString();
				int beginIndex = path.lastIndexOf("\\");
				fileNames.add(path.substring(beginIndex+1));
			}
		}

		return fileNames;
	}



}
