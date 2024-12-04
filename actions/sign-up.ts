"use server"

import {signUpFormSchema, SignUpFormSchema} from "@/schemas/schema.user";
import {hashPassword} from "@/utils/password";
import prisma from "@/lib/prisma";
import {ZodError} from "zod";

export default async function signUpAction(formData: SignUpFormSchema) {
    try {
        const data = signUpFormSchema.parse(formData);

        if (data.password !== data.passwordConfirmation) {
            return {
                success: false,
                message: "Şifreler uyuşmuyor!",
            };
        }

        const user_exist = await prisma.user.findUnique({
            where: {email: data.email},
        });

        if (user_exist) {
            return {
                success: false,
                message: "Bu email ile kayıtlı bir hesap mevcut.",
            };
        }

        const pwHash = await hashPassword(data.password);

        const user = await prisma.user.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: pwHash,
            },
        });

        return {
            success: true,
            message: "Kayıt başarılı!",
            user,
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

        return {
            success: false,
            message: error.message || "Beklenmeyen bir hata oluştu.",
        };
    }
}
