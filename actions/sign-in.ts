"use server"

import { signInFormSchema, SignInFormSchema } from "@/schemas/schema.user";
import { ZodError } from "zod";
import { AuthError } from "next-auth";

export default async function signInAction(formData: SignInFormSchema) {
    try {
        const parsedData = signInFormSchema.parse(formData);

        return {
            success: true,
            message: "Giriş başarılı!",
        };
    } catch (error: any) {
        if (error instanceof ZodError) {
            return {
                success: false,
                message: error.errors.map(e => ({
                    validation: e.path[0],
                    code: e.code,
                    message: e.message,
                })),
            };
        }

        if (error instanceof AuthError) {
            let message: null | string;
            switch (error.type) {
                case "CredentialsSignin":
                    message = "Email ya da şifre geçersiz";
                    break;
                default:
                    message = "Bir hata oluştu";
                    break;
            }
            return {
                success: false,
                message: message,
            };
        }

        return {
            success: false,
            message: "Beklenmeyen bir hata oluştu.",
        };
    }
}
