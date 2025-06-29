import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Base from "./layouts/base.js";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <BrowserRouter>
        <Base />
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
