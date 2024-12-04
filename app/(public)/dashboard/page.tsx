'use client';

import Main from '@/components/Main';
import {Button} from '@/components/ui/button';
import {signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import VerifyEmailNotice from '@/components/VerifyEmailNotice';
import React from 'react';

// TODO: giriş yapmamış üyelerin ücretsiz kısımlara erişip erişemeyeceği konuşulacak.
export default function DashboardPage() {
  const {data: session, status} = useSession();

  if (status === 'loading') {
    return (
      <Main className="w-screen h-screen grid place-content-center">
        <p>Yükleniyor...</p>
      </Main>
    );
  }

  return (
    <>
      <VerifyEmailNotice/>
      <Main className="h-screen grid place-content-center">
        <h1>Dashboard Page</h1>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.firstName}</p>
        <p>{session?.user?.lastName}</p>
        <p>{session?.user?.name}</p>
        <Image src={session?.user?.image} width={50} height={50} alt="User Image"/>
        <p> isAdmin : {session?.user?.isAdmin ? 'Admin' : 'User'}</p>
        <Button
          variant={session?.user ? 'destructive' : 'ghost'}
          disabled={!session?.user}
          onClick={() => signOut()}
        >
                    Çıkış Yap
        </Button>
      </Main>
    </>
  );
}
