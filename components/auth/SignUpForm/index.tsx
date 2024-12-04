'use client';

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Input} from '@/components/ui/input';
import GoogleButton from '@/components/auth/GoogleButton';
import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {signUpFormSchema, SignUpFormSchema} from '@/schemas/schema.user';
import signUpAction from '@/actions/sign-up';
import {useRouter} from 'next/navigation';
import {useTransition} from 'react';
import {Loader2Icon} from 'lucide-react';
import {PATH_AUTH_LOGIN} from '@/constants/paths';
import {useToast} from '@/hooks/use-toast';


export default function SignUpForm({className}: { className?: string }) {
  const {toast} = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  async function onSubmit(values: SignUpFormSchema) {
    startTransition(async () => {
      const {success, message} = await signUpAction(values);
      if (success) return router.push(PATH_AUTH_LOGIN);
      toast({
        title: 'Başarısız!',
        description: message,
        variant: 'destructive'
      });
    });
  }

  return (
    <div className={cn('space-y-5', className)}>
      <div>
        <span className="text-2xl font-bold">Akıllı Prompt</span>
        <h2 className="text-4xl font-black">Hoşgeldiniz</h2>
        <p className="mt-4">Etkili promptlar ile yapay zeka deneyiminizi en üst seviyeye taşıyın. Başlamak
                    kaydolun</p>
      </div>
      <GoogleButton/>
      <div className="flex items-center justify-center gap-4 opacity-40">
        <div className="border border-foreground w-full "/>
        <span className="w-fit text-nowrap">ya da</span>
        <div className="border border-foreground w-full"/>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex gap-2 w-full">
            <FormField control={form.control} name="firstName" render={
              ({field}) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">İsim</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                </FormItem>
              )
            }/>

            <FormField control={form.control} name="lastName" render={
              ({field}) => (
                <FormItem className="w-full">
                  <FormLabel className="font-bold">Soyisim</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                </FormItem>
              )
            }/>
          </div>

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

          <FormField control={form.control} name="passwordConfirmation" render={
            ({field, fieldState}) => (
              <FormItem>
                <FormLabel className="font-bold">Şifre Onay</FormLabel>
                <FormControl>
                  <Input {...field} type="password"/>
                </FormControl>
                {
                  !fieldState.error ?
                    <FormDescription>Şifreyi onaylamak için tekrar giriniz.</FormDescription> :
                    <FormMessage/>
                }
              </FormItem>
            )
          }/>
          <Button type="submit" variant="outline"
            disabled={isPending}>{
              isPending ? <Loader2Icon className="animate-spin"/> : 'Kaydol'
            }</Button>
        </form>
      </Form>
      <p className="w-full text-center">Zaten bir hesabınız var mı? <Link href={PATH_AUTH_LOGIN}
        className="font-bold">Giriş
                Yap</Link></p>
    </div>
  );
}