import { useState, lazy, Suspense } from "react";
import "./App.css";
import { Clock } from "./components/Clock";

const Dashboard = lazy(() =>
  import("./components/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);
const UserManagement = lazy(() =>
  import("./components/UserManagement").then((module) => ({
    default: module.UserManagement,
  }))
);
const Settings = lazy(() =>
  import("./components/Settings").then((module) => ({
    default: module.Settings,
  }))
);

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    // Only load the component when the corresponding tab is active
    switch (activeTab) {
      case "dashboard":
        return (
          <Suspense fallback={<LoadingFallback title="Dashboard" />}>
            <Dashboard />
          </Suspense>
        );
      case "users":
        return (
          <Suspense fallback={<LoadingFallback title="User Management" />}>
            <UserManagement />
          </Suspense>
        );
      case "settings":
        return (
          <Suspense fallback={<LoadingFallback title="Settings" />}>
            <Settings />
          </Suspense>
        );
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
