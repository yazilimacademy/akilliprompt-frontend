import {object, string} from 'zod';

export const signInSchema = object({
// eslint-disable-next-line camelcase
  email: string({required_error: 'Email is required'})
    .min(1, 'Email gereklidir')
    .email('Geçersiz mail'),
  // eslint-disable-next-line camelcase
  password: string({required_error: 'Password is required'})
    .min(1, 'Şifre gereklidir')
    .min(8, 'Şifreniz en az 8 karakter uzunluğunda olmalıdır')
    .max(32, 'Şifreniz en fazla 32 karakter uzunluğunda olmalıdır'),
});