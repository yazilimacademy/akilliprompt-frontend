import API_URL from "@/constants/ApiUrl";
import { getServerAccessToken, refreshAccessToken } from "@/app/actions/auth";

interface FetchOptions extends RequestInit {
  requireAuth?: boolean;
}

abstract class BaseFetchClient {
  // eslint-disable-next-line no-unused-vars
  constructor(protected baseUrl: string) {}

  protected async baseFetch<T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
}

class PublicClient extends BaseFetchClient {
  async fetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    return this.baseFetch(endpoint, options);
  }
}

class PrivateClient extends BaseFetchClient {
  private isRefreshing = false;

  async fetch<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
    const token = await getServerAccessToken();
    if (!token) {
      throw new Error("Authentication required");
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          ...options.headers,
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        if (!this.isRefreshing) {
          this.isRefreshing = true;
          try {
            await refreshAccessToken();
          } finally {
            this.isRefreshing = false;
          }
        }
        return this.fetch(endpoint, options);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
}

export const client = new PublicClient(API_URL.BASE);
export const privateClient = new PrivateClient(API_URL.BASE);
