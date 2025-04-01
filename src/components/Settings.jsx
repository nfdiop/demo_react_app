import { useState } from "react";

export function Settings() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "Enterprise Dashboard",
    siteDescription: "Comprehensive analytics and management platform",
    timezone: "UTC-5",
    dateFormat: "MM/DD/YYYY",
    language: "en-US",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    systemAlerts: true,
    marketingEmails: false,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    ipRestriction: false,
    auditLogging: true,
  });

  const [activeTab, setActiveTab] = useState("general");

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecuritySettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "general":
        return (
          <div className="settings-form">
            <div className="form-group">
              <label htmlFor="siteName">Site Name</label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                value={generalSettings.siteName}
                onChange={handleGeneralChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="siteDescription">Site Description</label>
              <textarea
                id="siteDescription"
                name="siteDescription"
                value={generalSettings.siteDescription}
                onChange={handleGeneralChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="timezone">Timezone</label>
              <select
                id="timezone"
                name="timezone"
                value={generalSettings.timezone}
                onChange={handleGeneralChange}
              >
                <option value="UTC-12">UTC-12</option>
                <option value="UTC-11">UTC-11</option>
                <option value="UTC-10">UTC-10</option>
                <option value="UTC-9">UTC-9</option>
                <option value="UTC-8">UTC-8 (Pacific)</option>
                <option value="UTC-7">UTC-7 (Mountain)</option>
                <option value="UTC-6">UTC-6 (Central)</option>
                <option value="UTC-5">UTC-5 (Eastern)</option>
                <option value="UTC-4">UTC-4</option>
                <option value="UTC-3">UTC-3</option>
                <option value="UTC-2">UTC-2</option>
                <option value="UTC-1">UTC-1</option>
                <option value="UTC+0">UTC+0</option>
                <option value="UTC+1">UTC+1</option>
                <option value="UTC+2">UTC+2</option>
                <option value="UTC+3">UTC+3</option>
                <option value="UTC+4">UTC+4</option>
                <option value="UTC+5">UTC+5</option>
                <option value="UTC+6">UTC+6</option>
                <option value="UTC+7">UTC+7</option>
                <option value="UTC+8">UTC+8</option>
                <option value="UTC+9">UTC+9</option>
                <option value="UTC+10">UTC+10</option>
                <option value="UTC+11">UTC+11</option>
                <option value="UTC+12">UTC+12</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dateFormat">Date Format</label>
              <select
                id="dateFormat"
                name="dateFormat"
                value={generalSettings.dateFormat}
                onChange={handleGeneralChange}
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                <option value="MMMM D, YYYY">MMMM D, YYYY</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="language">Language</label>
              <select
                id="language"
                name="language"
                value={generalSettings.language}
                onChange={handleGeneralChange}
              >
                <option value="en-US">English (US)</option>
                <option value="en-GB">English (UK)</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
                <option value="de-DE">German</option>
                <option value="ja-JP">Japanese</option>
                <option value="zh-CN">Chinese (Simplified)</option>
              </select>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="settings-form">
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="emailNotifications"
                name="emailNotifications"
                checked={notificationSettings.emailNotifications}
                onChange={handleNotificationChange}
              />
              <label htmlFor="emailNotifications">Email Notifications</label>
              <p className="setting-description">
                Receive notifications via email
              </p>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="pushNotifications"
                name="pushNotifications"
                checked={notificationSettings.pushNotifications}
                onChange={handleNotificationChange}
              />
              <label htmlFor="pushNotifications">Push Notifications</label>
              <p className="setting-description">
                Receive notifications in your browser
              </p>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="weeklyReports"
                name="weeklyReports"
                checked={notificationSettings.weeklyReports}
                onChange={handleNotificationChange}
              />
              <label htmlFor="weeklyReports">Weekly Reports</label>
              <p className="setting-description">
                Receive weekly summary reports
              </p>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="systemAlerts"
                name="systemAlerts"
                checked={notificationSettings.systemAlerts}
                onChange={handleNotificationChange}
              />
              <label htmlFor="systemAlerts">System Alerts</label>
              <p className="setting-description">
                Receive alerts about system status
              </p>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="marketingEmails"
                name="marketingEmails"
                checked={notificationSettings.marketingEmails}
                onChange={handleNotificationChange}
              />
              <label htmlFor="marketingEmails">Marketing Emails</label>
              <p className="setting-description">
                Receive promotional emails and updates
              </p>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="settings-form">
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="twoFactorAuth"
                name="twoFactorAuth"
                checked={securitySettings.twoFactorAuth}
                onChange={handleSecurityChange}
              />
              <label htmlFor="twoFactorAuth">Two-Factor Authentication</label>
              <p className="setting-description">
                Require a second form of authentication when logging in
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="sessionTimeout">Session Timeout (minutes)</label>
              <input
                type="number"
                id="sessionTimeout"
                name="sessionTimeout"
                value={securitySettings.sessionTimeout}
                onChange={handleSecurityChange}
                min="5"
                max="120"
              />
              <p className="setting-description">
                Automatically log out after period of inactivity
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="passwordExpiry">Password Expiry (days)</label>
              <input
                type="number"
                id="passwordExpiry"
                name="passwordExpiry"
                value={securitySettings.passwordExpiry}
                onChange={handleSecurityChange}
                min="30"
                max="365"
              />
              <p className="setting-description">
                Force password change after specified number of days
              </p>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="ipRestriction"
                name="ipRestriction"
                checked={securitySettings.ipRestriction}
                onChange={handleSecurityChange}
              />
              <label htmlFor="ipRestriction">IP Restriction</label>
              <p className="setting-description">
                Limit access to specific IP addresses
              </p>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="auditLogging"
                name="auditLogging"
                checked={securitySettings.auditLogging}
                onChange={handleSecurityChange}
              />
              <label htmlFor="auditLogging">Audit Logging</label>
              <p className="setting-description">
                Log all user actions for security review
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-layout">
        <div className="settings-sidebar">
          <button
            className={`settings-tab ${
              activeTab === "general" ? "active" : ""
            }`}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={`settings-tab ${
              activeTab === "notifications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
          <button
            className={`settings-tab ${
              activeTab === "security" ? "active" : ""
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
          <button className="settings-tab">Appearance</button>
          <button className="settings-tab">Integrations</button>
          <button className="settings-tab">Billing</button>
        </div>

        <div className="settings-content">
          {renderTabContent()}

          <div className="settings-actions">
            <button className="save-button">Save Changes</button>
            <button className="cancel-button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
