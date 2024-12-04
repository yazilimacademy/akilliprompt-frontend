import Main from '@/components/Main';
import React from 'react';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Main>{children}</Main>
  );
}
