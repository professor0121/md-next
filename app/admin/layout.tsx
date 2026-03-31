"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getProfile } from "@/store/slices/authSlice";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // ❗ Allow login page
      if (pathname === "/auth/login") {
        setChecking(false);
        return;
      }

      // 🔥 Verify token from backend
      const res = await dispatch(getProfile());

      if (getProfile.rejected.match(res)) {
        router.push("/auth/login");
      } else {
        setChecking(false);
      }
    };

    checkAuth();
  }, [pathname, dispatch]);

  if (checking) {
    return (
      <div className="h-screen flex items-center justify-center">
        Checking auth...
      </div>
    );
  }

  return <>{children}</>;
}