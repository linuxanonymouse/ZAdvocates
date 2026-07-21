import { getApiUrl } from '../../../lib/api';
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function InsightsAdmin() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch(getApiUrl('/insights'))
      .then((res) => res.json())
      .then((data) => setInsights(data))
      .catch(console.error);
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this insight?")) return;
    try {
      const token = localStorage.getItem("admin_token");
      await fetch(getApiUrl(`/insights/${id}`), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      setInsights(insights.filter((i: any) => i.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Insights</h1>
        <Link href="/admin/insights/new" className="btn btn-primary">
          <i className="ph ph-plus"></i> New Insight
        </Link>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {insights.map((insight: any) => (
              <tr key={insight.id}>
                <td>{insight.title}</td>
                <td>{insight.category}</td>
                <td>{new Date(insight.createdAt).toLocaleDateString()}</td>
                <td className="actions-cell">
                  <button onClick={() => handleDelete(insight.id)} className="btn-icon text-red">
                    <i className="ph ph-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            {insights.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center">No insights found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
