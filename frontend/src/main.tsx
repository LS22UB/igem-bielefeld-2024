import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import {LoadingProvider} from "./routing/LoadingProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <LoadingProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LoadingProvider>
    </React.StrictMode>,
);
