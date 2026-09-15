import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import yummacss from '@yummacss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const origin = env.SITE_URL || 'https://fieldwork.example';
  const email = env.CONTACT_EMAIL || 'hello@fieldwork.example';
  const url = new URL(origin);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS origin without a path, query or fragment.');
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    throw new Error('CONTACT_EMAIL must be a valid email address.');
  }
  return {
    plugins: [react(), yummacss()],
    define: {
      __SITE_URL__: JSON.stringify(url.origin),
      __CONTACT_EMAIL__: JSON.stringify(email)
    },
    build: { sourcemap: false, target: 'es2022' },
    server: { port: 5173, strictPort: true }
  };
});
