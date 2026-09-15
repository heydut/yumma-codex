import { defineConfig } from 'yummacss';

export default defineConfig({
  source: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      parchment: '#f6f3f1',
      ink: '#242424',
      graphite: '#51504d',
      smoke: '#69645f',
      ash: '#ccc6bf',
      lake: '#2b59d1',
      moss: '#dce0d4',
      clay: '#e9d8cd',
      mist: '#dce2e5'
    },
    screens: { compact: '24rem' }
  }
});
