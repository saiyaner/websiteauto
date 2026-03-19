import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin", icon: "dashboard" },
    { name: "Pesanan", path: "/admin/pesanan", icon: "shopping_cart" },
    { name: "Produk", path: "/admin/produk", icon: "inventory_2" },
    { name: "Pembayaran", path: "/admin/pembayaran", icon: "payment" },
    { name: "User", path: "/admin/user", icon: "person" },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-background-dark z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 lg:static lg:block">
      <div className="p-6 flex items-center justify-between lg:block">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white">rocket_launch</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Marketplace</h2>
        </div>
        <label className="lg:hidden p-2 text-slate-500" for="mobile-menu-checkbox">
          <span className="material-symbols-outlined">close</span>
        </label>
      </div>
      <nav className="space-y-2 p-4">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg ${location.pathname === item.path
              ? "bg-primary/10 text-primary"
              : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
          >
            <span className="material-symbols-outlined text-lg">
              {item.icon}
            </span>
            <span>{item.name}</span>
          </Link>
        ))}
        <div className="flex items-center gap-3 px-3 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors cursor-pointer">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-semibold leading-normal">Logout</p>
        </div>
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2">
          <img className="size-10 rounded-full border-2 border-primary/20" data-alt="User profile avatar of a smiling man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdJOv-M4KcsvQcfxEZjIdQ0X7aK5l_R4O7o7wx35BD7uAVv71Ec-OPEIZuNtA8Uyurg6WoT_UQliVTfEVoM9lNIeUt-GbfLd3xWMXEwri_CSzUHg8jG85aTc2eFTInSau5GKhze2_E4s5_-awL6TGA_zdRYBXAFd5Fztvj2Kgl_C3LBAxat8Ajx5tkQvn9iB4Ar022kZEOQBc0AFnvVZKT1_PBEHrXXwhQSbws8ti1g9vCmxtXUvkngU8DTNXMn3LxzKDVGKuCS2Mu" />
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-sm font-semibold truncate">Alex Johnson</h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs truncate">Pro Plan Member</p>
          </div>
        </div>
      </div>
    </aside>
  );
}