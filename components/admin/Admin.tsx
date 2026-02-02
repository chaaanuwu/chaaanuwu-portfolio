"use client";

import { useState } from "react";
import AdminNav from "./AdminNav";
import AdminDashboard from "./AdminDashboard";

interface Props {
    session: any;
}

export default function AdminDashboardClient({ session }: Props) {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="flex min-h-screen">
            {activeTab === "dashboard" && <AdminDashboard session={session} />}
            {activeTab === "projects" && <div className="flex-1 p-8">Projects Section</div>}
            {activeTab === "blog" && <div className="flex-1 p-8">Blog Posts Section</div>}
            {activeTab === "skills" && <div className="flex-1 p-8">Skills Section</div>}
        </div>
    );
}