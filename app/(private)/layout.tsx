import AdminNavbar from '@/components/admin/navbar';
import Main from '@/components/Main';
import VerifyEmailNotice from '@/components/VerifyEmailNotice';
import React from 'react';

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <VerifyEmailNotice />
      <Main>
        <AdminNavbar />
        {children}
      </Main>
    </>
  );
}