import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Base from "./layouts/base.jsx";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <BrowserRouter>
        <Base />
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
