import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DashboardAdmin from "../pages/dashboard/dashboardAdmin";

export default function AppRoutes() {
  return (
      <Routes>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardAdmin />} />
        </Route>

      </Routes>
  );
}