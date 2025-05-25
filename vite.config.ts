import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "localhost",
    port: 5050,
  },
  base: '/',
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
        @use "@/styles/variables" as *;
        @use "@/styles/mixins" as * ;
      `
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      
    },
  },
  // Điều này đảm bảo mỗi lần build, các file sẽ có tên mới khác (hash) → ngăn cache lỗi.
  build: {
    manifest: true,
    sourcemap: false,
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  }  
}));
