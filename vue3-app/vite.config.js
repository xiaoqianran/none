import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' 
import ElementPlus from 'unplugin-element-plus/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    ElementPlus({}), 
  ],
  server:{
    allowedHosts:true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // 关键就是这一行
      // 你还可以加更多别名
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  }
})
