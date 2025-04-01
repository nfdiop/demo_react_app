import { useState, useEffect } from "react";

export function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching dashboard data
    const fetchDashboardData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      setMetrics({
        activeUsers: 1342,
        revenue: 52689,
        conversionRate: 3.2,
        averageSessionTime: "3m 24s",
        topReferrers: ["Google", "Facebook", "Twitter", "LinkedIn"],
        recentTransactions: [
          { id: 1, user: "John Doe", amount: 129.99, date: "2023-10-26" },
          { id: 2, user: "Jane Smith", amount: 89.99, date: "2023-10-26" },
          { id: 3, user: "Bob Johnson", amount: 199.99, date: "2023-10-25" },
          { id: 4, user: "Alice Brown", amount: 149.99, date: "2023-10-25" },
        ],
      });
      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <div className="loading-data">Fetching dashboard data...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Active Users</h3>
          <p className="metric-value">{metrics.activeUsers.toLocaleString()}</p>
        </div>

        <div className="metric-card">
          <h3>Revenue</h3>
          <p className="metric-value">${metrics.revenue.toLocaleString()}</p>
        </div>

        <div className="metric-card">
          <h3>Conversion Rate</h3>
          <p className="metric-value">{metrics.conversionRate}%</p>
        </div>

        <div className="metric-card">
          <h3>Avg. Session Time</h3>
          <p className="metric-value">{metrics.averageSessionTime}</p>
        </div>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-panel">
          <h3>Top Referrers</h3>
          <ul className="referrer-list">
            {metrics.topReferrers.map((referrer, index) => (
              <li key={index}>{referrer}</li>
            ))}
          </ul>
        </div>

        <div className="dashboard-panel">
          <h3>Recent Transactions</h3>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {metrics.recentTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.user}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
