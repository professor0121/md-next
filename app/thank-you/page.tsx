"use client";

import { Suspense } from "react";
import TankYouContent from "./ThankYouContent";
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TankYouContent />
    </Suspense>
  );
}