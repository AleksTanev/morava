import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8000,
    },
    css: {
        modules: {
            // Generate scoped class names
            generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
    },
    resolve: {
        alias: {
            // Map the paths to the correct folders
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
