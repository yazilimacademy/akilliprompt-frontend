const API_URL = {
  BASE: "https://testapi.akilliprompt.com/v1",
  AUTH: {
    GOOGLE_LOGIN: "/Auth/google-login",
    REFRESH_TOKEN: "/Auth/refresh-token",
  },
} as const;

export default API_URL;
