'use client';

import { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Users, Settings, ShipIcon, ChartArea } from "lucide-react";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <Home size={18} /> },
    { name: "Orders", path: "/admin/orders", icon: <ShipIcon size={18} /> },
    { name: "Analysis", path: "/admin/analysis", icon: <ChartArea size={18} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white p-4 transition-all duration-300 ${open ? "w-64" : "w-16"}`}>
        
        {/* Logo */}
        <div className="flex items-center justify-between mb-6">
          <h1 className={`${!open && "hidden"} text-xl font-bold`}>
            Admin Panel
          </h1>
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu */}
        <ul className="space-y-3">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <Link href={item.path} key={index}>
                <li
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                    isActive
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {item.icon}
                  <span className={`${!open && "hidden"}`}>
                    {item.name}
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold capitalize">
            {pathname.replace("/admin", "") || "Dashboard"}
          </h2>

          <div className="flex items-center gap-4">
            <span className="text-sm">Hello, Admin 👋</span>
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full"
              alt="profile"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}