import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"), // each time we're writing down "@" -> watch the file "src"
      "@feature": path.resolve(__dirname, "./src/feature/"),
      "@products": path.resolve(__dirname, "./src/feature/products"),
      
    }
  }
})
