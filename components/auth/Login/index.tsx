'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleButton from '@/components/auth/GoogleButton';
import { cn } from '@/lib/utils';

export default function SignInForm({ className }: { className?: string }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className={cn('space-y-5', className)}>
        <div>
          <span className="text-2xl font-bold">Akıllı Prompt</span>
          <h2 className="text-4xl font-black">Tekrar Hoşgeldiniz</h2>
          <p className="mt-4">Devam etmek için hesabınıza giriş yapın.</p>
        </div>
        <GoogleButton />
      </div>
    </GoogleOAuthProvider>
  );
}
