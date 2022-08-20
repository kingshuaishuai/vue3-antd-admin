import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      // eslint-disable-next-line new-cap
      resolvers: [ AntDesignVueResolver() ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
