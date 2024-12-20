import AdminNavbar from "@/components/admin/navbar";
import Main from "@/components/Main";
import React from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <Main>
      <AdminNavbar />
      {children}
    </Main>
  );
}
