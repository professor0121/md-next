"use client";

import { useState } from "react";
import Image from "next/image";
import Countdown from "@/component/Countdown";
import OrderPopup from "@/component/Orderpopup";

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="gradient-herbal text-primary-foreground text-center py-1.5 px-4 text-xs font-medium sticky top-0 z-50 tracking-wide"
        style={{ color: "hsl(var(--primary-foreground))" }}>
        🚚 हर ऑर्डर पर फ्री और फास्ट डिलीवरी!
      </div>

      {/* Header */}
      <header className="sticky top-[28px] z-40 border-b"
        style={{ backgroundColor: "hsl(var(--card) / 0.9)", backdropFilter: "blur(20px)" }}>
        <div className="container mx-auto flex items-center justify-between h-12 md:h-14 px-4">
          {/* Mobile menu button */}
          <button className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: "hsl(var(--foreground))" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(var(--muted))")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="transition-colors hover:text-primary" style={{ color: "hsl(var(--foreground))" }}>Home</a>
            <a href="#benefits" className="transition-colors hover:text-primary" style={{ color: "hsl(var(--foreground))" }}>फ़ायदे</a>
          </nav>

          {/* Logo */}
          <div className="flex items-center gap-1.5 absolute left-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" style={{ color: "hsl(var(--primary))" }}>
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="font-bold text-base tracking-tight" style={{ color: "hsl(var(--primary))" }}>FIT FUSION AYURVEDA</span>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors relative"
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(var(--muted))")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              onClick={() => setPopupOpen(true)}
              aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--muted-foreground))" }}>
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 text-[10px] font-bold rounded-full flex items-center justify-center"
                style={{ backgroundColor: "hsl(var(--offer))", color: "hsl(var(--offer-foreground))" }}>1</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="gradient-herbal-light py-6 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full scale-75 blur-3xl"
                    style={{ backgroundColor: "hsl(var(--herbal-glow) / 0.2)" }}></div>
                  <Image
                    src="/josh.webp"
                    alt="Fit Fusion Josh Power Combo – Powder, Capsule, Gesotone & Tila Oil"
                    width={500}
                    height={500}
                    className="relative w-72 md:w-[500px] rounded-2xl drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs font-semibold mb-3"
                  style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--primary))" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                    <path d="M12 22V12" /><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" /><path d="m7.5 4.27 9 5.15" />
                  </svg>
                  4-in-1 कॉम्बो पैक
                </div>

                <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-2">
                  ताकत, ऊर्जा और <span className="text-gradient-herbal">स्टैमिना</span><br />का पावरहाउस
                </h1>

                <p className="text-sm md:text-base mb-3 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Josh Power Powder + Capsule + Gesotone Powder + Tila Josh Jawani Oil — विदारीकंद, कौंच बीज, सफ़ेद मूसली और अश्वगंधा से बना सम्पूर्ण आयुर्वेदिक फ़ॉर्मूला
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <span className="line-through text-base" style={{ color: "hsl(var(--muted-foreground))" }}>₹2,999</span>
                  <span className="text-2xl font-bold" style={{ color: "hsl(var(--offer))" }}>₹1,499</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: "hsl(var(--offer))", color: "hsl(var(--offer-foreground))" }}>50% OFF</span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setPopupOpen(true)}
                  className="w-full md:w-auto btn-cta-pop font-bold px-10 py-4 rounded-2xl text-lg mb-4 tracking-wide uppercase"
                  style={{ color: "hsl(var(--cta-foreground))" }}>
                  🛒 अभी ऑर्डर करें – COD
                </button>

                {/* Badges */}
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 text-xs rounded-full px-3 py-1.5 border"
                    style={{ color: "hsl(var(--muted-foreground))", backgroundColor: "hsl(var(--card))" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--secondary))" }}>
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" />
                      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                      <circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
                    </svg>
                    फ्री डिलीवरी
                  </div>
                  <div className="flex items-center gap-1.5 text-xs rounded-full px-3 py-1.5 border"
                    style={{ color: "hsl(var(--muted-foreground))", backgroundColor: "hsl(var(--card))" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--secondary))" }}>
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    COD उपलब्ध
                  </div>
                </div>

                {/* Live stats */}
                <div className="flex items-center gap-3 text-xs mb-3 justify-center md:justify-start" style={{ color: "hsl(var(--muted-foreground))" }}>
                  <span className="flex items-center gap-1 animate-pulse-soft">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    127 लोग अभी देख रहे हैं
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    ऑफ़र जल्दी खत्म होगा
                  </span>
                </div>

                {/* Countdown Timer */}
                <Countdown/>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-10 md:py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-2">
              🌿 Josh Power कॉम्बो के <span className="text-gradient-herbal">फायदे</span>
            </h2>
            <p className="text-center text-sm mb-8" style={{ color: "hsl(var(--muted-foreground))" }}>
              विदारीकंद · कौंच बीज · सफ़ेद मूसली · अश्वगंधा
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {[
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#f97316" }}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>,
                  title: "टेस्टोस्टेरोन बूस्ट",
                  desc: "प्राकृतिक जड़ी-बूटियों से हेल्दी टेस्टोस्टेरोन लेवल बनाए रखें"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7" style={{ color: "hsl(var(--primary))" }}><path d="M14.4 14.4 9.6 9.6" /><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" /><path d="m21.5 21.5-1.4-1.4" /><path d="M3.9 3.9 2.5 2.5" /><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" /></svg>,
                  title: "ताकत और मसल ग्रोथ",
                  desc: "अश्वगंधा और कौंच बीज से मांसपेशियों की मजबूती"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#eab308" }}><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>,
                  title: "ऊर्जा और स्टैमिना",
                  desc: "पूरे दिन भरपूर ऊर्जा और लंबे समय तक सहनशक्ति"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#3b82f6" }}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>,
                  title: "100% सुरक्षित",
                  desc: "विदारीकंद, सफ़ेद मूसली — बिना किसी साइड इफ़ेक्ट के"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7" style={{ color: "hsl(var(--secondary))" }}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
                  title: "बेहतर प्रदर्शन",
                  desc: "शारीरिक और मानसिक — दोनों में उत्कृष्ट परिणाम"
                },
                {
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#ef4444" }}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
                  title: "सम्पूर्ण वेलनेस",
                  desc: "4-in-1 कॉम्बो से शरीर को पूर्ण पोषण और देखभाल"
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="rounded-2xl p-4 md:p-6 shadow-card transition-all active:scale-[0.98] text-center border border-transparent hover:border-secondary/20 hover:shadow-herbal"
                  style={{ backgroundColor: "hsl(var(--card))" }}>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "hsl(var(--accent))" }}>
                    {icon}
                  </div>
                  <h3 className="font-semibold text-sm md:text-base mb-1">{title}</h3>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Dosage info */}
            <div className="mt-8 rounded-2xl p-5 md:p-6 max-w-2xl mx-auto border"
              style={{ backgroundColor: "hsl(var(--accent) / 0.5)" }}>
              <h3 className="font-bold text-sm md:text-base mb-3 text-center">📋 सेवन विधि</h3>
              <div className="space-y-2 text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                <p>💊 <strong>Josh Power Capsule:</strong> 1 कैप्सूल सुबह और 1 कैप्सूल शाम को या चिकित्सक के निर्देशानुसार</p>
                <p>🥄 <strong>Josh Power Powder:</strong> 1 चम्मच गर्म दूध के साथ सुबह-शाम</p>
                <p>🧴 <strong>Tila Josh Jawani Oil:</strong> आवश्यकतानुसार बाहरी उपयोग</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before / After Section */}
        <section className="py-10 md:py-16 gradient-herbal-light">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
              पहले | <span className="text-gradient-herbal">Josh Power के बाद</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { before: "😩", beforeLabel: "थकान और कमज़ोरी", after: "💪", afterLabel: "भरपूर ताकत और ऊर्जा" },
                { before: "😔", beforeLabel: "कम स्टैमिना और सहनशक्ति", after: "🏋️", afterLabel: "बेहतर स्टैमिना और एंड्योरेंस" },
                { before: "😟", beforeLabel: "मसल ग्रोथ में कमी", after: "🔥", afterLabel: "मांसपेशियों की मजबूत ग्रोथ" },
              ].map(({ before, beforeLabel, after, afterLabel }) => (
                <div key={beforeLabel} className="grid gap-2 md:gap-4 items-center" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
                  <div className="rounded-2xl aspect-square flex flex-col items-center justify-center p-3 md:p-4"
                    style={{ backgroundColor: "hsl(var(--muted))" }}>
                    <span className="text-3xl md:text-4xl mb-2">{before}</span>
                    <p className="text-[11px] md:text-sm text-center leading-snug" style={{ color: "hsl(var(--muted-foreground))" }}>{beforeLabel}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full gradient-herbal flex items-center justify-center shadow-herbal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "hsl(var(--primary-foreground))" }}>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <div className="rounded-2xl aspect-square flex flex-col items-center justify-center p-3 md:p-4 border-2 shadow-herbal"
                    style={{ backgroundColor: "hsl(var(--accent))", borderColor: "hsl(var(--secondary))" }}>
                    <span className="text-3xl md:text-4xl mb-2">{after}</span>
                    <p className="text-[11px] md:text-sm text-center font-medium leading-snug" style={{ color: "hsl(var(--accent-foreground))" }}>{afterLabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-10 md:py-16" style={{ backgroundColor: "hsl(var(--background))" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
              ⭐ ग्राहकों का <span className="text-gradient-herbal">अनुभव</span>
            </h2>

            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide">
              {[
                { initial: "र", name: "राजेश कुमार", date: "15 मार्च 2026", stars: 5, text: "Josh Power कॉम्बो शुरू किया और 2 हफ्ते में ही ताकत और ऊर्जा में ज़बरदस्त फ़र्क दिखा। जिम में परफ़ॉर्मेंस बहुत बढ़ गई। पूरी तरह आयुर्वेदिक है।" },
                { initial: "अ", name: "अमित शर्मा", date: "10 मार्च 2026", stars: 5, text: "अश्वगंधा और सफ़ेद मूसली वाला यह कॉम्बो कमाल है। थकान गायब हो गई, स्टैमिना बढ़ा। 4 प्रोडक्ट्स एक साथ मिलना बहुत फ़ायदेमंद रहा।" },
                { initial: "स", name: "सुनील वर्मा", date: "5 मार्च 2026", stars: 4, text: "Gesotone Powder और Josh Power Capsule साथ में ले रहा हूं। मसल ग्रोथ अच्छी हो रही है। COD से ऑर्डर किया, समय पर डिलीवरी हुई।" },
                { initial: "व", name: "विकास पटेल", date: "1 मार्च 2026", stars: 5, text: "पूरा कॉम्बो बहुत असरदार है। कौंच बीज और विदारीकंद का असर दिखता है। ऊर्जा, ताकत सब बढ़ा। परिवार वाले भी फ़र्क नोटिस कर रहे हैं।" },
              ].map(({ initial, name, date, stars, text }) => (
                <div key={name} className="rounded-2xl p-4 md:p-5 shadow-card min-w-[260px] snap-center shrink-0 md:min-w-0 border border-transparent hover:border-secondary/20 transition-colors relative"
                  style={{ backgroundColor: "hsl(var(--card))" }}>
                  {/* Quote icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-3 right-3 opacity-60" style={{ color: "hsl(var(--accent))" }}>
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  </svg>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full gradient-herbal flex items-center justify-center font-bold text-sm shadow-sm"
                      style={{ color: "hsl(var(--primary-foreground))" }}>{initial}</div>
                    <div>
                      <div className="font-semibold text-sm">{name}</div>
                      <div className="text-[11px]" style={{ color: "hsl(var(--muted-foreground))" }}>{date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={s <= stars ? "fill-yellow-400 text-yellow-400" : "text-muted"}>
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{text}</p>
                </div>
              ))}
            </div>

            {/* Mobile dots */}
            <div className="flex justify-center mt-3 gap-1.5 md:hidden">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--primary))" }}></div>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--muted-foreground) / 0.3)" }}></div>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--muted-foreground) / 0.3)" }}></div>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--muted-foreground) / 0.3)" }}></div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 gradient-herbal text-center relative overflow-hidden"
          style={{ color: "hsl(var(--primary-foreground))" }}>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-4 left-8 w-20 h-20 rounded-full border-2 border-white/30"></div>
            <div className="absolute bottom-4 right-12 w-32 h-32 rounded-full border border-white/20"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 opacity-80">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
            </svg>
            <h2 className="text-xl md:text-3xl font-bold mb-2">Josh Power कॉम्बो अभी ऑर्डर करें</h2>
            <p className="text-sm opacity-80 mb-6">4-in-1 आयुर्वेदिक पावर पैक — सीमित समय ऑफ़र!</p>
            <button
              onClick={() => setPopupOpen(true)}
              className="font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-opacity text-base"
              style={{ backgroundColor: "hsl(var(--cta))", color: "hsl(var(--cta-foreground))" }}>
              Cash on Delivery से ऑर्डर करें
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 md:py-8" style={{ backgroundColor: "hsl(var(--foreground))", color: "hsl(var(--background))" }}>
        <div className="container mx-auto px-4 flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span className="font-bold text-sm">FIT FUSION AYURVEDA</span>
          </div>
          <p className="text-xs opacity-70">© 2026 Fit Fusion Ayurveda. All rights reserved.</p>
          <div className="flex gap-4 text-xs opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2"
        style={{ background: "linear-gradient(to top, hsl(var(--background)) 60%, hsl(var(--background) / 0.95) 85%, transparent 100%)" }}>
        <button
          onClick={() => setPopupOpen(true)}
          className="w-full btn-cta-pop font-bold py-4 rounded-2xl shadow-xl text-sm flex items-center justify-center gap-2 uppercase tracking-wide"
          style={{ color: "hsl(var(--cta-foreground))" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <line x1="3" x2="21" y1="6" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          अभी ऑर्डर करें – ₹1,499 COD
        </button>
      </div>
      <div className="h-16 md:hidden"></div>

      {/* Order Popup */}
      <OrderPopup popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
    </div>
  );
}
