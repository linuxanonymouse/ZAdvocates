import { getApiUrl } from '../../../lib/api';
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AttorneysAdmin() {
  const [attorneys, setAttorneys] = useState([]);

  useEffect(() => {
    fetch(getApiUrl('/attorneys'))
      .then((res) => res.json())
      .then((data) => setAttorneys(data))
      .catch(console.error);
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this attorney?")) return;
    try {
      const token = localStorage.getItem("admin_token");
      await fetch(getApiUrl(`/attorneys/${id}`), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      setAttorneys(attorneys.filter((a: any) => a.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Attorneys</h1>
        <Link href="/admin/attorneys/new" className="btn btn-primary">
          <i className="ph ph-plus"></i> Add Attorney
        </Link>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attorneys.map((attorney: any) => (
              <tr key={attorney.id}>
                <td>{attorney.name}</td>
                <td>{attorney.title}</td>
                <td>{attorney.email}</td>
                <td className="actions-cell">
                  <button onClick={() => handleDelete(attorney.id)} className="btn-icon text-red">
                    <i className="ph ph-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            {attorneys.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center">No attorneys found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
