import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

const catAlias = (path: string): string => resolve(__dirname, path);

const plugins = [
  vue(),
  AutoImport({
    imports: [
      'vue',
      {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar'
        ]
      }
    ]
  }),
  Components({
    resolvers: [NaiveUiResolver()]
  })
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);

  return {
    root: './',
    base: './',
    envDir: './conf',
    publicDir: 'assets',

    plugins,

    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http://localhost:8080', // TODO
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve(
              'src/assets/less/index.less'
            )}";`
          },
          javascriptEnabled: true
        }
      }
    },

    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'img/',
      sourcemap: env.VITE_MODE_NAME === 'development',
      minify: env.VITE_MODE_NAME === 'development' ? 'terser' : false,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        },
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]'
        }
      }
    },

    resolve: {
      alias: {
        api: catAlias('./src/api'),
        assets: catAlias('./src/assets'),
        components: catAlias('./src/components'),
        router: catAlias('./src/router'),
        static: catAlias('./src/static'),
        store: catAlias('./src/store'),
        types: catAlias('./src/types'),
        utils: catAlias('./src/utils'),
        views: catAlias('./src/views')
      }
    }
  };
});
