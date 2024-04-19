import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/scrimba-learn-react-02-digital-business-card/',
	plugins: [react()],
});
