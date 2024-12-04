import Main from "@/components/Main";
import { ThemeProvider } from "@/components/providers/theme-provider";
import VerifyEmailNotice from "@/components/VerifyEmailNotice";
import React from "react";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
      >
        <VerifyEmailNotice />
        <Main>{children}</Main>
      </ThemeProvider>
    </>
  );
}
