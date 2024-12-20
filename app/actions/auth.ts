"use server";

import { cookies } from "next/headers";
import API_URL from "@/constants/ApiUrl";

interface AuthResponse {
  data: {
    accessToken: { value: string };
    refreshToken: { value: string };
  };
  message: string;
  isSuccess: boolean;
  validationErrors: string[];
}

export async function setAuthTokens(access: string, refresh: string) {
  cookies().set("accessToken", access, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  cookies().set("refreshToken", refresh, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
}

export async function getServerAccessToken() {
  return cookies().get("accessToken")?.value;
}

export async function getServerRefreshToken() {
  return cookies().get("refreshToken")?.value;
}

export async function clearAuthTokens() {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
}

export async function refreshAccessToken() {
  const currentRefreshToken = await getServerRefreshToken();
  
  if (!currentRefreshToken) {
    throw new Error("No refresh token found");
  }

  const response = await fetch(`${API_URL.BASE}${API_URL.AUTH.REFRESH_TOKEN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken: currentRefreshToken,
    }),
  });

  if (!response.ok) {
    await clearAuthTokens();
    throw new Error("Token refresh failed");
  }

  const data = await response.json();
  await setAuthTokens(data.accessToken.value, data.refreshToken.value);
  return data.accessToken.value;
}

export async function handleGoogleLogin(credential: string) {
  try {
    const response = await fetch(
      `${API_URL.BASE}${API_URL.AUTH.GOOGLE_LOGIN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ googleToken: credential }),
      }
    );

    const data: AuthResponse = await response.json();

    if (data.isSuccess) {
      await setAuthTokens(data.data.accessToken.value, data.data.refreshToken.value);
    }

    return data;
  } catch (error) {
    throw new Error("Login işlemi başarısız oldu");
  }
}
