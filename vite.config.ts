/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, UserConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, 
    environment: "jsdom",
  },
} as UserConfig)