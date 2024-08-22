import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://tabiji762.github.io/arkbutts/',
  plugins: [react()],
})
