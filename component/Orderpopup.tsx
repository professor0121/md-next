"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  popupOpen: boolean;
  setPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function OrderPopup({ popupOpen, setPopupOpen }: Props) {
  const [quantity, setQuantity] = useState(1);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const price = 1499;
  const total = price * quantity;

  // quantity
  const inc = () => setQuantity((q) => q + 1);
  const dec = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  // form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // validation
  const validate = () => {
    if (!form.name || !form.phone || !form.address || !form.pincode) {
      alert("⚠️ सभी डिटेल भरें");
      return false;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      alert("📱 सही 10 अंकों का मोबाइल नंबर डालें");
      return false;
    }

    if (!/^\d{6}$/.test(form.pincode)) {
      alert("📮 सही 6 अंकों का पिनकोड डालें");
      return false;
    }

    return true;
  };

  // submit
  const handleOrder = () => {
    if (!validate()) return;

    setLoading(true);
    const query = new URLSearchParams({
      name: form.name,
      phone: form.phone,
      address: form.address,
      pincode: form.pincode,
      quantity: quantity.toString(),
      total: total.toString(),
      product:"Josh Power 4-in-1 कॉम्बो"
    }).toString();

    router.push(`/thank-you?${query}`);

    const msg = `
    Name: ${form.name}
    Phone: ${form.phone}
    Address: ${form.address}
    Pincode: ${form.pincode}
    Quantity: ${quantity}
    Total: ₹${total}`;
    console.table(msg);
    setLoading(false);
    setPopupOpen(false);
  };
  return (
    <div
      className={`overlay ${popupOpen ? "active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setPopupOpen(false);
      }}
    >
      <div className="popup">
        {/* Header */}
        <div className="popup-header flex justify-between items-center">
          <h3 className="font-semibold text-lg">ऑर्डर करें</h3>
          <span
            onClick={() => setPopupOpen(false)}
            className="cursor-pointer text-xl"
          >
            &times;
          </span>
        </div>

        {/* Product + Qty */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-3 items-center">
            <img src="/josh.webp" className="w-16 h-16 rounded object-cover" />
            <div>
              <p className="font-semibold">Josh Power 4-in-1 कॉम्बो</p>
              <small className="text-gray-500">Powder + Capsule + Oil</small>
              <p className="font-bold text-green-600">₹{price}</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center border rounded-lg px-2">
            <button onClick={dec} className="px-2 text-lg">
              -
            </button>
            <span className="px-2">{quantity}</span>
            <button onClick={inc} className="px-2 text-lg">
              +
            </button>
          </div>
        </div>

        {/* Form */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name / पूरा नाम"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone / फोन नंबर"
        />

        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          rows={3}
          placeholder="Address / पता"
        />

        <input
          type="text"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Pincode / पिनकोड"
        />

        {/* Button */}
        <button
          onClick={handleOrder}
          disabled={loading}
          className="order-btn w-full mt-3"
        >
          {loading ? "Processing..." : `ऑर्डर करें - ₹${total}`}
        </button>
      </div>
    </div>
  );
}
