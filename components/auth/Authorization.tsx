"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getServerAccessToken } from "@/app/actions/auth";

interface AuthorizationProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

// TODO: admin yetki kontrolü için user endpointi eklendiğinde bu component isAdmin mi kontrolü içinde kullanılacak
export default function Authorization({
  children,
  adminOnly,
}: AuthorizationProps) {
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      const token = await getServerAccessToken();

      if (!token) {
        router.push("/login");
      }

      /* if (adminOnly && !token.isAdmin) {
        router.push("/dashboard");
      } */
    }

    checkAuth();
  }, [router]);

  return <>{children}</>;
}
