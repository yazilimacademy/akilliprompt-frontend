import {z} from "zod";

const signUpFormSchema = z.object({
    firstName: z.string().min(1, {message: "Bu alan zorunludur"}),
    lastName: z.string().min(1, {message: "Bu alan zorunludur"}),
    email: z.string().email({message: "Geçersiz email!"}),
    password: z.string()
        .min(8, {message: "Şifreniz en az 8 karakter uzunluğunda olmalıdır"})
        .max(32, {message: "Şifreniz en fazla 32 karakter uzunluğunda olabilir"}),
    passwordConfirmation: z.string()
        .min(8, {message: "Şifreniz en az 8 karakter uzunluğunda olmalıdır"})
        .max(32, {message: "Şifreniz en fazla 32 karakter uzunluğunda olabilir"})
}).refine(data => data.password === data.passwordConfirmation, {
    message: "Şifreler eşleşmiyor!",
    path: ["passwordConfirmation"]
})

const signInFormSchema = z.object({
    email: z.string().email({message: "Geçersiz email!"}),
    password: z.string().min(1, {message: "Bir şifre girmelisin"})
})

export {signUpFormSchema, signInFormSchema}
export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
export type SignInFormSchema = z.infer<typeof signInFormSchema>