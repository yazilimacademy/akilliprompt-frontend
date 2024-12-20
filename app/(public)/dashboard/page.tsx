"use client";

import Main from "@/components/Main";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import React from "react";

// TODO: giriş yapmamış üyelerin ücretsiz kısımlara erişip erişemeyeceği konuşulacak.
export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Main className="w-screen h-screen grid place-content-center">
        <p>Yükleniyor...</p>
      </Main>
    );
  }

  return (
    <>
      <Main className="h-screen grid place-content-center">
        <h1>Dashboard Page</h1>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.name}</p>
        <Button
          variant={session?.user ? "destructive" : "ghost"}
          disabled={!session?.user}
          onClick={() => signOut()}
        >
          Çıkış Yap
        </Button>
      </Main>
    </>
  );
}
