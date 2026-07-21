"use client";

import { useEffect, useState } from "react";

export default function ConsultationsAdmin() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch("http://localhost:3001/consultations", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setConsultations(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleStatusChange = async (id: number, status: string) => {
    try {
      const token = localStorage.getItem("admin_token");
      await fetch(`http://localhost:3001/consultations/${id}/status`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({ status })
      });
      fetchConsultations();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this consultation?")) return;
    try {
      const token = localStorage.getItem("admin_token");
      await fetch(`http://localhost:3001/consultations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchConsultations();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Consultations</h1>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Contact Info</th>
              <th>Message</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((c: any) => (
              <tr key={c.id}>
                <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                <td>{c.name}</td>
                <td>
                  <div>{c.email}</div>
                  <div style={{ color: "var(--text-muted-light)", fontSize: "0.875rem" }}>{c.phone}</div>
                </td>
                <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.message}</td>
                <td>
                  <select 
                    value={c.status} 
                    onChange={(e) => handleStatusChange(c.id, e.target.value)}
                    style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                  >
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td className="actions-cell">
                  <button onClick={() => handleDelete(c.id)} className="btn-icon text-red" title="Delete">
                    <i className="ph ph-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            {consultations.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center">No consultations found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
