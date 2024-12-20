import { getServerAccessToken } from '@/app/actions/auth';

export async function getServerSession() {
  const token = await getServerAccessToken();

  if (!token) return null;

  // TODO: Token'dan user bilgilerini decode et veya API'den al
  return {
    user: {
      isAdmin: false,
    },
  };
}

export async function auth() {
  return await getServerSession();
}
