'use client';

import { GoogleLogin } from '@react-oauth/google';
import { useTransition } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { handleGoogleLogin } from '@/app/actions/auth';

export default function GoogleButton() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (credential: string) => {
    try {
      const response = await handleGoogleLogin(credential);

      if (response.isSuccess) {
        toast({
          title: 'Başarılı',
          description: response.message,
        });

        router.push('/dashboard');
      } else {
        throw new Error(response.validationErrors.join(', '));
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Hata',
        description: error instanceof Error ? error.message : 'Giriş başarısız',
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {isPending ? (
        <Button>
          <Loader2 className="w-4 h-4 animate-spin" />
        </Button>
      ) : (
        <GoogleLogin
          onSuccess={(response) => {
            startTransition(() => {
              handleLogin(response.credential!);
            });
          }}
          onError={() => {
            toast({
              variant: 'destructive',
              title: 'Hata',
              description: 'Google girişi başarısız oldu',
            });
          }}
          useOneTap
          state_cookie_domain="akilliprompt.com"
        />
      )}
    </div>
  );
}
