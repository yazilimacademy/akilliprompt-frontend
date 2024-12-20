const API_URL = {
  BASE: "https://testapi.akilliprompt.com/v1",
  AUTH: {
    GOOGLE_LOGIN: "/Auth/google-login",
    REFRESH_TOKEN: "/Auth/refresh-token",
  },
  CATEGORIES: "/Categories",
  PROMPT_COMMENTS: "/PromptComments",
  PROMPTS: {
    BASE: "/Prompts",
    GET_ALL: "/Prompts/get-all",
  },
} as const;

export default API_URL;
