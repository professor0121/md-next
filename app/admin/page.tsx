'use client';

import { useEffect } from "react";
import AdminLayout from "@/component/AdminLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getOrders } from "@/store/slices/orderSlice";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders({ limit: 100 })); // fetch more data for stats
  }, []);

  // 🔥 Date helpers
  const now = new Date();

  const isToday = (date: string) => {
    const d = new Date(date);
    return d.toDateString() === now.toDateString();
  };

  const isThisWeek = (date: string) => {
    const d = new Date(date);
    const firstDay = new Date(now.setDate(now.getDate() - now.getDay()));
    return d >= firstDay;
  };

  const isThisMonth = (date: string) => {
    const d = new Date(date);
    return (
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    );
  };

  // 🔥 Calculations
  const todayOrders = orders.filter((o) => isToday(o.createdAt));
  const weekOrders = orders.filter((o) => isThisWeek(o.createdAt));
  const monthOrders = orders.filter((o) => isThisMonth(o.createdAt));

  const sum = (arr: typeof orders) =>
    arr.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">

        <h1 className="text-2xl font-bold">Dashboard 🚀</h1>

        {/* 🔥 Cards */}
        <div className="grid grid-cols-3 gap-4">

          {/* Today */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm text-gray-500">Today Orders</h2>
            <p className="text-xl font-bold">{todayOrders.length}</p>
            <p className="text-green-600">₹{sum(todayOrders)}</p>
          </div>

          {/* Weekly */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm text-gray-500">Weekly Orders</h2>
            <p className="text-xl font-bold">{weekOrders.length}</p>
            <p className="text-green-600">₹{sum(weekOrders)}</p>
          </div>

          {/* Monthly */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm text-gray-500">Monthly Orders</h2>
            <p className="text-xl font-bold">{monthOrders.length}</p>
            <p className="text-green-600">₹{sum(monthOrders)}</p>
          </div>

        </div>

        {/* 🔥 Extra Stats */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm text-gray-500">Total Orders</h2>
            <p className="text-2xl font-bold">{orders.length}</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm text-gray-500">Total Revenue</h2>
            <p className="text-2xl font-bold text-green-600">
              ₹{sum(orders)}
            </p>
          </div>

        </div>

        {/* 🔥 Recent Orders */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-3">Recent Orders</h2>

          <ul className="space-y-2">
            {orders.slice(0, 5).map((o) => (
              <li key={o._id} className="flex justify-between border-b pb-2">
                <span>{o.product}</span>
                <span className="text-green-600">₹{o.total}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </AdminLayout>
  );
}