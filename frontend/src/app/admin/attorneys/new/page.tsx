"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewAttorney() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch("http://localhost:4001/attorneys", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, title: position, bio, email, imageUrl }),
      });
      if (res.ok) {
        router.push("/admin/attorneys");
      } else {
        alert("Failed to add attorney");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Add New Attorney</h1>
        <Link href="/admin/attorneys" className="btn btn-outline">
          Cancel
        </Link>
      </div>

      <div className="admin-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Title/Position</label>
            <input type="text" value={position} onChange={e => setPosition(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Profile Image URL</label>
            <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="/assets/attorney.jpg" />
          </div>
          <div className="form-group">
            <label>Biography</label>
            <textarea 
              value={bio} 
              onChange={e => setBio(e.target.value)} 
              required 
              rows={10}
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Save Attorney</button>
        </form>
      </div>
    </div>
  );
}
