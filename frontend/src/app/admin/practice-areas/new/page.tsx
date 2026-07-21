"use client";
import { getApiUrl } from '../../../../lib/api';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function NewPracticeArea() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [iconUrl, setIconUrl] = useState("ph ph-briefcase");
  const router = useRouter();

  const handleNameChange = (value: string) => {
    setName(value);
    if (!slug || slug === slugify(name)) {
      setSlug(slugify(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("admin_token");
      const res = await fetch(getApiUrl('/practice-areas'), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, slug, description, content, iconUrl }),
      });
      if (res.ok) {
        router.push("/admin/practice-areas");
      } else {
        alert("Failed to add practice area");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="admin-page-header">
        <h1>Add New Practice Area</h1>
        <Link href="/admin/practice-areas" className="btn btn-outline">
          Cancel
        </Link>
      </div>

      <div className="admin-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => handleNameChange(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>URL Slug</label>
            <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Phosphor Icon Class (e.g., ph ph-bank)</label>
            <input type="text" value={iconUrl} onChange={(e) => setIconUrl(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Short Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              className="form-textarea"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Full Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="ph ph-floppy-disk"></i> Save Practice Area
          </button>
        </form>
      </div>
    </div>
  );
}
