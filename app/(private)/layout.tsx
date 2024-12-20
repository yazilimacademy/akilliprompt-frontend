import AdminNavbar from '@/components/admin/navbar';
import Main from '@/components/Main';
import React from 'react';

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Main>
        <AdminNavbar />
        {children}
      </Main>
    </>
  );
}
