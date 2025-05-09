import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Base from "./layouts/base.jsx";
import { Toaster } from "@/components/ui/sonner";
import App from "./App.jsx";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router";
import Cards from "./pages/Cards";
import Rules from "./pages/Rules";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </Base>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
