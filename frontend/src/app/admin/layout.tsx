"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [pathname, router]);

  if (!isAuthenticated && pathname !== "/admin/login") {
    return null; // or a loading spinner
  }

  if (pathname === "/admin/login") {
    return <div className="admin-login-layout">{children}</div>;
  }

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-brand" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><i className="ph ph-bank"></i> ZAdvocates Admin</div>
          <button 
            className="admin-mobile-menu-btn" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
          >
            <i className={`ph ${isSidebarOpen ? "ph-x" : "ph-list"}`}></i>
          </button>
        </div>
        <div className={`admin-sidebar-content ${isSidebarOpen ? "open" : ""}`}>
          <nav className="admin-nav">
            <Link href="/admin" className={pathname === "/admin" ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
              <i className="ph ph-squares-four"></i> Dashboard
            </Link>
            <Link href="/admin/insights" className={pathname.includes("/admin/insights") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
              <i className="ph ph-article"></i> Insights
            </Link>
            <Link href="/admin/attorneys" className={pathname.includes("/admin/attorneys") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
              <i className="ph ph-users"></i> Attorneys
            </Link>
            <Link href="/admin/practice-areas" className={pathname.includes("/admin/practice-areas") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
              <i className="ph ph-briefcase"></i> Practice Areas
            </Link>
            <Link href="/admin/consultations" className={pathname.includes("/admin/consultations") ? "active" : ""} onClick={() => setIsSidebarOpen(false)}>
              <i className="ph ph-calendar-check"></i> Consultations
            </Link>
          </nav>
          <div className="admin-logout">
            <button onClick={() => {
              localStorage.removeItem("admin_token");
              router.push("/admin/login");
            }}>
              <i className="ph ph-sign-out"></i> Logout
            </button>
          </div>
        </div>
      </aside>
      <main className="admin-content">
        {children}
      </main>
    </div>
  );
}
