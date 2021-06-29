package com.dms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.dms.base.TestBase;

public class DashboardPage extends TestBase {

	public DashboardPage()	{PageFactory.initElements(driver, this);}


	//left side pane [sidebar-menu]
	@FindBy(xpath = "//span[text()='Dashboard']") private WebElement dashboardBar;
	@FindBy(xpath = "//span[text()='Repository']") private WebElement repositoryBar;
	@FindBy(xpath = "//span[text()='Add Document']") private WebElement addDocumentBar;
	@FindBy(xpath = "//span[starts-with(text(),'MyQ (')]") private WebElement myQBar;
	@FindBy(xpath = "//span[starts-with(text(),'Reminders (')]") private WebElement remindersBar;
	@FindBy(xpath = "//span[text()='Bulk Job']") private WebElement bulkJobBar;
	@FindBy(xpath = "//span[text()='Bulk Import']") private WebElement bulkImportBar;
	@FindBy(xpath = "//span[text()='Reports']") private WebElement reportsBar;
	@FindBy(xpath = "//span[text()='Folder']") private WebElement folderBar;
	@FindBy(xpath = "//span[text()='Folder']//ancestor::li//ul//li//a[text()='Add']") private WebElement folderAddBar;
	@FindBy(xpath = "//span[text()='Folder']//ancestor::li//ul//li//a[text()='Manage']") private WebElement folderManageBar;
	@FindBy(xpath = "//span[text()='Index Group']") private WebElement indexGroupBar;
	@FindBy(xpath = "//span[text()='User']") private WebElement userBar;
	@FindBy(xpath = "//span[text()='User']//ancestor::li//ul//li//a[text()='Add']") private WebElement userAddBar;
	@FindBy(xpath = "//span[text()='User']//ancestor::li//ul//li//a[text()='Manage']") private WebElement userManageBar;
	@FindBy(xpath = "//span[text()='User']//ancestor::li//ul//li//a[contains(text(),'Department')]") private WebElement userDocumentBar;
	@FindBy(xpath = "//span[text()='Team']") private WebElement teamBar;
	@FindBy(xpath = "//span[text()='Team']//ancestor::li//ul//li//a[text()='Add']") private WebElement teamAddBar;
	@FindBy(xpath = "//span[text()='Team']//ancestor::li//ul//li//a[text()='Manage']") private WebElement teamManageBar;
	@FindBy(xpath = "//span[text()='Workflow']") private WebElement workflowBar;
	@FindBy(xpath = "//span[text()='EMail Server']") private WebElement eMailServerBar;
	@FindBy(xpath = "//span[text()='Settings']") private WebElement settingsBar;
	@FindBy(xpath = "//span[text()='Settings']//ancestor::li//ul//li//a[text()='Email']") private WebElement settingsEmailBar;
	@FindBy(xpath = "//span[text()='Settings']//ancestor::li//ul//li//a[text()='Bulk Job']") private WebElement settingsBulkJobBar;
	@FindBy(xpath = "//span[text()='Settings']//ancestor::li//ul//li//a[text()='General']") private WebElement settingsGeneralBar;
	@FindBy(xpath = "//span[text()='Trash']") private WebElement TrashBar;



	public DashboardPage navigateToDashboardPage() {
		return navigateToPage(dashboardBar, DashboardPage.class);
	}

	public RepositoryPage navigateRepositoryPage() {
		return navigateToPage(repositoryBar, RepositoryPage.class);
	}

	public AddDocumentsPage navigateToAddDocumentPage() {
		return navigateToPage(addDocumentBar, AddDocumentsPage.class);
	}

	public MyQueuePage navigateToMyQueuePage() {
		return navigateToPage(myQBar, MyQueuePage.class);
	}

	public RemindersPage navigateRemindersPage() {
		return navigateToPage(remindersBar, RemindersPage.class);
	}

	public ReportsPage navigateReportsPage() {
		return navigateToPage(reportsBar, ReportsPage.class);
	}
	
	public FolderPage navigateAddFolderPage() {
		return navigateToPage(folderBar, folderAddBar, FolderPage.class);
	}
	
	public FolderPage navigateManageFolderPage() {
		return navigateToPage(folderBar, folderManageBar, FolderPage.class);
	}

	public IndexGroupPage navigateIndexGroupPage() {
		return navigateToPage(indexGroupBar, IndexGroupPage.class);
	}

	public UsersPage navigateAddUserPage() {
		return navigateToPage(userBar, userAddBar, UsersPage.class);
	}
	
	public UsersPage navigateManageUserPage() {
		return navigateToPage(userBar, userManageBar, UsersPage.class);
	}
	
	public UsersPage navigateDepartmentUserPage() {
		return navigateToPage(userBar, userDocumentBar, UsersPage.class);
	}

	public TeamsPage navigateAddTeamsPage() {
		return navigateToPage(teamBar, teamAddBar, TeamsPage.class);
	}
	
	public TeamsPage navigateManageTeamsPage() {
		return navigateToPage(teamBar, teamManageBar, TeamsPage.class);
	}

	public WorkFlowPage navigateToWorkFlowPage() {
		return navigateToPage(workflowBar, WorkFlowPage.class);
	}

	public SettingsPage navigateEmailSettingsPage() {
		return navigateToPage(settingsBar, settingsEmailBar, SettingsPage.class);
	}
	
	public SettingsPage navigateBulkJobSettingsPage() {
		return navigateToPage(settingsBar, settingsBulkJobBar, SettingsPage.class);
	}
	
	public SettingsPage navigateGeneralSettingsPage() {
		return navigateToPage(settingsBar, settingsGeneralBar, SettingsPage.class);
	}

	public TrashPage navigateTrashPage() {
		return navigateToPage(TrashBar, TrashPage.class);
	}



}
