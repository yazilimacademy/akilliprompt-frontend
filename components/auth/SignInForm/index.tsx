'use client';

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input';
import GoogleButton from '@/components/auth/GoogleButton';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {signInFormSchema, SignInFormSchema} from '@/schemas/schema.user';
import {Loader2Icon} from 'lucide-react';
import {useTransition} from 'react';
import {useRouter} from 'next/navigation';
import signInAction from '@/actions/sign-in';
import {useToast} from '@/hooks/use-toast';
import {PATH_AUTH_REGISTER, PATH_DASHBOARD} from '@/constants/paths';

export default function SignInForm({className}: { className?: string }) {
  const {toast} = useToast();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: SignInFormSchema) {
    startTransition(async () => {
      const {success, message} = await signInAction(values);
      if (success) return router.push(PATH_DASHBOARD);
      toast({
        title: 'Başarısız!',
        description: message as string,
        variant: 'destructive'
      });
    });
  }

  return (
    <div className={cn('space-y-5', className)}>
      <div>
        <span className="text-2xl font-bold">Akıllı Prompt</span>
        <h2 className="text-4xl font-black">Tekrar Hoşgeldiniz</h2>
        <p className="mt-4">Devam etmek için hesabınıza giriş yapın.</p>
      </div>
      <GoogleButton/>
      <div className="flex items-center justify-center gap-4 opacity-40">
        <div className="border border-foreground w-full "/>
        <span className="w-fit text-nowrap">ya da</span>
        <div className="border border-foreground w-full"/>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField control={form.control} name="email" render={
            ({field}) => (
              <FormItem>
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="nakres@example.com" type="email" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )
          }/>

          <FormField control={form.control} name="password" render={
            ({field, fieldState}) => (
              <FormItem>
                <FormLabel className="font-bold">Şifre</FormLabel>
                <FormControl>
                  <Input {...field} type="password"/>
                </FormControl>
                {
                  !fieldState.error ?
                    <FormDescription>Şifre en az 8 karakter uzunluğunda
                                            olmalıdır.</FormDescription> :
                    <FormMessage/>
                }
              </FormItem>
            )
          }/>

          <Button type="submit" variant="outline"
            disabled={!form.formState.isValid || isPending}>{
              isPending ? <Loader2Icon className="animate-spin"/> : 'Giriş Yap'
            }</Button>
        </form>
      </Form>
      <p className="w-full text-center">Bir hesabınız yok mu? <Link href={PATH_AUTH_REGISTER}
        className="font-bold">Üyel
                Ol</Link></p>
    </div>
  );
}