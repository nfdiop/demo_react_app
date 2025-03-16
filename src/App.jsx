import { useState } from "react";
import "./App.css";
import { Clock } from "./components/Clock";
import { Dashboard } from "./components/Dashboard";
import { Settings } from "./components/Settings";
import { UserManagement } from "./components/UserManagement";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    // Only load the component when the corresponding tab is active
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <UserManagement />;
      case "settings":
        return <Settings />;
      default:
        return <HomePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <h1>Enterprise Dashboard</h1>
          <nav className="main-nav">
            <button
              className={activeTab === "home" ? "active" : ""}
              onClick={() => setActiveTab("home")}
            >
              Home
            </button>
            <button
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={activeTab === "users" ? "active" : ""}
              onClick={() => setActiveTab("users")}
            >
              User Management
            </button>
            <button
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </button>
          </nav>
        </div>
        <Clock />
      </header>
      <main className="content-area">{renderContent()}</main>
    </div>
  );
}

// Simple loading component
function LoadingFallback({ title }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading {title}...</p>
    </div>
  );
}

// Home page component
function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <h2>Welcome to the Enterprise Dashboard</h2>
      <p>Select a module to get started:</p>

      <div className="feature-cards">
        <div className="feature-card" onClick={() => onNavigate("dashboard")}>
          <h3>Dashboard</h3>
          <p>View key metrics and performance indicators</p>
        </div>

        <div className="feature-card" onClick={() => onNavigate("users")}>
          <h3>User Management</h3>
          <p>Manage users, roles and permissions</p>
        </div>

        <div className="feature-card" onClick={() => onNavigate("settings")}>
          <h3>Settings</h3>
          <p>Configure application preferences</p>
        </div>
      </div>
    </div>
  );
}

export default App;
