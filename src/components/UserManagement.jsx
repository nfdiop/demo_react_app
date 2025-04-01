import { useState } from "react";

const USERS = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2023-10-26 09:45 AM",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "editor",
    status: "active",
    lastLogin: "2023-10-25 03:22 PM",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    role: "viewer",
    status: "inactive",
    lastLogin: "2023-10-20 11:15 AM",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "admin",
    status: "active",
    lastLogin: "2023-10-26 08:30 AM",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    role: "editor",
    status: "active",
    lastLogin: "2023-10-24 02:45 PM",
  },
  {
    id: 6,
    name: "Diana Miller",
    email: "diana.miller@example.com",
    role: "viewer",
    status: "pending",
    lastLogin: "Never",
  },
  {
    id: 7,
    name: "Edward Davis",
    email: "edward.davis@example.com",
    role: "editor",
    status: "active",
    lastLogin: "2023-10-25 10:20 AM",
  },
  {
    id: 8,
    name: "Fiona Clark",
    email: "fiona.clark@example.com",
    role: "viewer",
    status: "active",
    lastLogin: "2023-10-23 04:10 PM",
  },
  {
    id: 9,
    name: "George Robinson",
    email: "george.robinson@example.com",
    role: "admin",
    status: "inactive",
    lastLogin: "2023-10-15 09:30 AM",
  },
  {
    id: 10,
    name: "Hannah Lee",
    email: "hannah.lee@example.com",
    role: "viewer",
    status: "active",
    lastLogin: "2023-10-26 11:05 AM",
  },
];

export function UserManagement() {
  const [filteredUsers, setFilteredUsers] = useState(USERS);
  const [selectedRole, setSelectedRole] = useState("all");

  const handleInputValueChange = (e) => {
    const searchTerm = e.target.value;
    if (searchTerm.trim() === "") {
      setFilteredUsers(USERS);
    }
    // Lazy load Fuse.js
    const Fuse = import("fuse.js").then((module) => module.default);

    const fuse = new Fuse(USERS, {
      keys: ["name", "email"],
      includeScore: true,
    });
    const results = fuse.search(searchTerm);
    const filteredUsers = results.map((result) => result.item);
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="user-management-container">
      <h2>User Management</h2>

      <div className="user-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search users..."
            onChange={handleInputValueChange}
            className="search-input"
          />
        </div>

        <div className="filter-container">
          <label>Filter by role:</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="role-filter"
          >
            <option value="all">All roles</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        <button className="add-user-button">Add New User</button>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role}`}>{user.role}</span>
                </td>
                <td>
                  <span className={`status-indicator ${user.status}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.lastLogin}</td>
                <td className="action-buttons">
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <button disabled>Previous</button>
        <span className="page-indicator">Page 1 of 1</span>
        <button disabled>Next</button>
      </div>
    </div>
  );
}
