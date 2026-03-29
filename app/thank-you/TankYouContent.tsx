"use client";
import { useSearchParams } from "next/navigation";

export default function ThankYouContent() {
  const params = useSearchParams();

  const name = params.get("name");
  const phone = params.get("phone");
  const address = params.get("address");
  const pincode = params.get("pincode");
  const quantity = params.get("quantity");
  const total = params.get("total");
  const product = params.get("product");
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "'Noto Sans Devanagari', 'Noto Sans', sans-serif",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          padding: "40px 32px 36px",
          maxWidth: "460px",
          width: "100%",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Success Icon */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            backgroundColor: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: "#111827",
            margin: "0 0 8px",
            textAlign: "center",
          }}
        >
          धन्यवाद! 🎉
        </h1>
        <p
          style={{
            fontSize: 14,
            color: "#6b7280",
            textAlign: "center",
            lineHeight: 1.6,
            margin: "0 0 24px",
            maxWidth: 320,
          }}
        >
          आपका ऑर्डर सफलतापूर्वक दर्ज हो गया है। हम जल्द ही आपसे संपर्क करेंगे।
        </p>

        {/* Order Box */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#f0fdf4",
            borderRadius: 12,
            padding: 20,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 18 }}>📦</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>
              ऑर्डर विवरण
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 0",
              borderBottom: "1px solid #d1fae5",
            }}
          >
            <span style={{ fontSize: 13.5, color: "#6b7280" }}>ऑर्डर आईडी</span>
            <span
              style={{
                fontSize: 13.5,
                color: "#111827",
                textAlign: "right",
                maxWidth: "55%",
              }}
            >
              ord-01212
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 0",
              borderBottom: "1px solid #d1fae5",
            }}
          >
            <span style={{ fontSize: 13.5, color: "#6b7280" }}>मात्रा</span>
            <span
              style={{
                fontSize: 13.5,
                color: "#111827",
                textAlign: "right",
                maxWidth: "55%",
              }}
            >
              {quantity}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 0",
              borderBottom: "1px solid #d1fae5",
            }}
          >
            <span style={{ fontSize: 13.5, color: "#6b7280" }}>उत्पाद</span>
            <span
              style={{
                fontSize: 13.5,
                color: "#111827",
                textAlign: "right",
                maxWidth: "55%",
              }}
            >
              {product}
            </span>
          </div>
          {/* Total */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 0 0",
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>
              कुल राशि
            </span>
            <span style={{ fontSize: 17, fontWeight: 800, color: "#dc2626" }}>
              {total}
            </span>
          </div>

          {/* Contact & Address */}
          <div
            style={{
              borderTop: "1px solid #d1fae5",
              marginTop: 10,
              paddingTop: 10,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14 }}>📞</span>
              <span style={{ fontSize: 13, color: "#374151" }}>{phone}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14 }}>📍</span>
              <span style={{ fontSize: 13, color: "#374151" }}>{address}</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#374151",
            }}
          >
            <span style={{ fontSize: 15 }}>🚚</span>
            <span>फ्री डिलीवरी</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "#374151",
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                border: "1.5px solid #16a34a",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                color: "#16a34a",
                fontWeight: 700,
              }}
            >
              ✓
            </span>
            <span>Cash on Delivery</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            width: "100%",
            backgroundColor: "#16a34a",
            color: "#ffffff",
            border: "none",
            borderRadius: 10,
            padding: "15px",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          होम पेज पर वापस जाएं
        </button>
      </div>
    </div>
  );
}
