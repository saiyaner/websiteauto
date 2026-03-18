import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import AdminLayout from "./layouts/AdminLayout"
import DashboardAdmin from "./pages/dashboard/dashboardAdmin"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardAdmin />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App