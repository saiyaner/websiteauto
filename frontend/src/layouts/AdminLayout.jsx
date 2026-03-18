import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <main className="p-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
          <Outlet />
        </main>
      </div>

    </div>
  );
}