import { getApiUrl } from '../../lib/api';
"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch(getApiUrl('/stats'), {
      headers: { Authorization: `Bearer ${localStorage.getItem("admin_token")}` }
    })
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);

  if (!stats) return <div className="admin-page-header"><h1>Loading Dashboard...</h1></div>;

  return (
    <div>
      <div className="admin-page-header">
        <h1>Dashboard Overview</h1>
      </div>

      <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        <div className="admin-stat-card" style={{ background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Total Consultations</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.totalConsultations}</div>
        </div>
        <div className="admin-stat-card" style={{ background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Pending Consultations</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>
            {stats.consultationsByStatus.find((s: any) => s.name === 'Pending')?.value || 0}
          </div>
        </div>
        <div className="admin-stat-card" style={{ background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Total Insights</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {stats.contentOverview.find((s: any) => s.name === 'Insights')?.count || 0}
          </div>
        </div>
        <div className="admin-stat-card" style={{ background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Total Attorneys</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {stats.contentOverview.find((s: any) => s.name === 'Attorneys')?.count || 0}
          </div>
        </div>
      </div>

      <div className="admin-grid charts-grid" style={{ marginBottom: '40px' }}>
        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '24px' }}>Consultations by Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stats.consultationsByStatus}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {stats.consultationsByStatus.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
            {stats.consultationsByStatus.map((entry: any, index: number) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: entry.fill }}></div>
                <span style={{ fontSize: '0.875rem' }}>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '24px' }}>Content Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.contentOverview}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="var(--accent-gold)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ marginBottom: '24px' }}>Recent Consultations</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {stats.recentConsultations.map((c: any) => (
              <tr key={c.id}>
                <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                <td>{c.name}</td>
                <td>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.875rem',
                    background: c.status === 'pending' ? '#fef3c7' : c.status === 'reviewed' ? '#dbeafe' : '#dcfce7',
                    color: c.status === 'pending' ? '#b45309' : c.status === 'reviewed' ? '#1d4ed8' : '#15803d'
                  }}>
                    {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
            {stats.recentConsultations.length === 0 && (
              <tr>
                <td colSpan={3} style={{ textAlign: 'center' }}>No recent consultations.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
