import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Pesanan", path: "/admin/pesanan" },
    { name: "Produk", path: "/admin/produk" },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r">
      <div className="p-4 font-bold text-xl">Admin</div>

      <nav className="space-y-2 p-4">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block p-2 rounded ${
              location.pathname === item.path
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}