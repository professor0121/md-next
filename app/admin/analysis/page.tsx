'use client';

import { useEffect } from "react";
import AdminLayout from "@/component/AdminLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getOrders } from "@/store/slices/orderSlice";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";

export default function AnalysisPage() {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders({ limit: 100 }));
  }, []);

  // 🔥 Group by date
  const dataMap: Record<string, { date: string; revenue: number; orders: number }> = {};

  orders.forEach((o) => {
    const date = new Date(o.createdAt).toLocaleDateString();

    if (!dataMap[date]) {
      dataMap[date] = { date, revenue: 0, orders: 0 };
    }

    dataMap[date].revenue += o.total;
    dataMap[date].orders += 1;
  });

  const chartData = Object.values(dataMap);

  // 🔥 Top products
  const productMap: Record<string, number> = {};

  orders.forEach((o) => {
    productMap[o.product] = (productMap[o.product] || 0) + 1;
  });

  const topProducts = Object.entries(productMap)
    .map(([product, count]) => ({ product, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // 🔥 Total revenue
  const totalRevenue = orders.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">

        <h1 className="text-2xl font-bold">Analytics 📊</h1>

        {/* 🔥 Summary */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2>Total Orders</h2>
            <p className="text-xl font-bold">{orders.length}</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2>Total Revenue</h2>
            <p className="text-xl font-bold text-green-600">
              ₹{totalRevenue}
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2>Avg Order Value</h2>
            <p className="text-xl font-bold">
              ₹{orders.length ? Math.round(totalRevenue / orders.length) : 0}
            </p>
          </div>
        </div>

        {/* 🔥 Revenue Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="mb-4 font-semibold">Revenue Trend</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 🔥 Orders Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="mb-4 font-semibold">Orders Trend</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 🔥 Top Products */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="mb-4 font-semibold">Top Products</h2>

          <ul className="space-y-2">
            {topProducts.map((item, i) => (
              <li key={i} className="flex justify-between border-b pb-2">
                <span>{item.product}</span>
                <span>{item.count} orders</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </AdminLayout>
  );
}