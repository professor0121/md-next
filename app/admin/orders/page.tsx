'use client';

import { useEffect, useState } from "react";
import AdminLayout from "@/component/AdminLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getOrders } from "@/store/slices/orderSlice";

export default function OrdersPage() {
  const dispatch = useAppDispatch();
  const { orders, loading, page, totalPages } = useAppSelector(
    (state) => state.order
  );

  const [search, setSearch] = useState("");

  // 🔥 NEW FILTER STATES
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    dispatch(getOrders({ page: 1, limit: 10 }));
  }, []);


  // 🔥 Apply Filters
  const handleFilter = () => {
    dispatch(
      getOrders({
        search,
        page: 1,
        date: date || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      })
    );
  };

  // 🔥 Reset Filters
  const handleReset = () => {
    setSearch("");
    setDate("");
    setStartDate("");
    setEndDate("");

    dispatch(getOrders({ page: 1, limit: 10 }));
  };

  // 🔥 Pagination
  const handlePage = (p: number) => {
    dispatch(
      getOrders({
        page: p,
        search,
        date: date || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      })
    );
  };

  // 🔥 CSV Download (filtered data)
 const downloadCSV = () => {
  const headers = [
    "Order ID",
    "Name",
    "Phone",
    "Product",
    "Quantity",
    "Total",
    "Pincode",
    "Address",
    "Created At",
  ];

  const rows = orders.map((o) => [
    o.orderId,
    o.name,
    o.phone,
    o.product,
    o.quantity,
    o.total,
    o.pincode,
    o.address,
    new Date(o.createdAt).toLocaleString(),
  ]);

  const csvContent =
    [headers, ...rows].map((row) => row.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "orders.csv";
  a.click();
};
  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Orders 📦</h1>
          <button
            onClick={downloadCSV}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Download CSV
          </button>
        </div>
        {/* 🔥 FILTERS */}
        <div className="bg-white p-4 rounded shadow space-y-4">
          <h2 className="font-semibold">Filters 📅</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full"
          />

          {/* Single Date */}
          <div>
            <label className="text-sm">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Date Range */}
          <div className="flex gap-2">
            <div className="w-full">
              <label className="text-sm">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <div className="w-full">
              <label className="text-sm">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleFilter}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Apply Filter
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded shadow overflow-hidden">
          <table className="w-full text-left text-sm">
  <thead className="bg-gray-200">
    <tr>
      <th className="p-2">Order ID</th>
      <th className="p-2">Name</th>
      <th className="p-2">Phone</th>
      <th className="p-2">Product</th>
      <th className="p-2">Qty</th>
      <th className="p-2">Total</th>
      <th className="p-2">Pincode</th>
      <th className="p-2">Address</th>
      <th className="p-2">Date</th>
    </tr>
  </thead>

  <tbody>
    {orders.map((order) => (
      <tr key={order._id} className="border-t">
        <td className="p-2">{order.orderId}</td>
        <td className="p-2">{order.name}</td>
        <td className="p-2">{order.phone}</td>
        <td className="p-2">{order.product}</td>
        <td className="p-2">{order.quantity}</td>
        <td className="p-2">₹{order.total}</td>
        <td className="p-2">{order.pincode}</td>
        <td className="p-2">{order.address}</td>
        <td className="p-2">
          {new Date(order.createdAt).toLocaleString()}
        </td>
      </tr>
    ))}
  </tbody>
</table>
        </div>

        {/* Pagination */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}