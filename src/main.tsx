import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./app/App.tsx";
import ThemeProvider from "./shared/contexts/ThemeProvider.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
