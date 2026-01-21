

import { getSession } from "@/lib/auth";
import AdminDashboardClient from "@/components/admin/Admin";

export default async function AdminDashboardPage() {
  const session = await getSession(); // server-side fetch
  return <AdminDashboardClient session={session} />; // client wrapper
}