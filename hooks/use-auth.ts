"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getServerAccessToken } from "@/app/actions/auth";

interface UseAuthOptions {
  adminOnly?: boolean;
  redirectTo?: string;
  isPublicRoute?: boolean;
}

export default function useAuth(options: UseAuthOptions = {}) {
  const {
    adminOnly = false,
    redirectTo = "/login",
    isPublicRoute = false,
  } = options;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const token = await getServerAccessToken();

        if (isPublicRoute && token) {
          router.push("/dashboard");
          return;
        }

        if (!isPublicRoute && !token) {
          router.push(redirectTo);
          return;
        }

        /* if (adminOnly && !token.isAdmin) {
          router.push("/dashboard");
          return;
        } */

        setIsLoading(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        if (!isPublicRoute) {
          router.push(redirectTo);
        }
      }
    }

    checkAuth();
  }, [adminOnly, redirectTo, router, isPublicRoute]);

  return { isLoading };
}
