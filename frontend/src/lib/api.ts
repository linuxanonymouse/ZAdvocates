export const getApiUrl = (path: string) => {
  const isServer = typeof window === 'undefined';
  const baseUrl = isServer ? (process.env.BACKEND_URL || 'http://localhost:4001') : '/api';
  return `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
};
