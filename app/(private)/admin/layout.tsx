import Main from "@/components/Main";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PATH_AUTH_LOGIN, PATH_DASHBOARD } from "@/constants/paths";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return redirect(PATH_AUTH_LOGIN);
  } else if (!session.user.isAdmin) {
    return redirect(PATH_DASHBOARD);
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Main>{children}</Main>
    </ThemeProvider>
  );
}
