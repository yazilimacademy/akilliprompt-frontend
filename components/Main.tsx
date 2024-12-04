import React from 'react';
import {cn} from '@/lib/utils';

export default function Main(
  {
    className,
    children,
  }: {
        className?: string,
        children: React.ReactNode
    }
): React.ReactNode {
  return (
    <main className={cn('min-h-screen', className)}>
      {children}
    </main>
  );
}