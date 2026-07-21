"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PracticeAreasAdmin() {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/practice-areas")
      .then((res) => res.json())
      .then((data) => setAreas(data))
      .catch(console.error);
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this practice area?")) return;
    try {
      const token = localStorage.getItem("admin_token");
      await fetch(`http://localhost:3001/practice-areas/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      setAreas(areas.filter((a: any) => a.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Practice Areas</h1>
        <Link href="/admin/practice-areas/new" className="btn btn-primary">
          <i className="ph ph-plus"></i> Add Area
        </Link>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Icon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((area: any) => (
              <tr key={area.id}>
                <td>{area.name}</td>
                <td><i className={area.iconUrl}></i> {area.iconUrl}</td>
                <td className="actions-cell">
                  <button onClick={() => handleDelete(area.id)} className="btn-icon text-red">
                    <i className="ph ph-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            {areas.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center">No practice areas found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
