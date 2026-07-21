"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewInsight() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch("http://localhost:4001/insights", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, category, content, imageUrl }),
      });
      if (res.ok) {
        router.push("/admin/insights");
      } else {
        alert("Failed to create insight");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Create New Insight</h1>
        <Link href="/admin/insights" className="btn btn-outline">
          Cancel
        </Link>
      </div>

      <div className="admin-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" value={category} onChange={e => setCategory(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="/assets/image.png" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea 
              value={content} 
              onChange={e => setContent(e.target.value)} 
              required 
              rows={10}
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Save Insight</button>
        </form>
      </div>
    </div>
  );
}
