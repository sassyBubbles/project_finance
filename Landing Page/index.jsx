import "../global.css";
import "../styleguide.css";
import "../global.css";
import "../styleguide.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingFr } from "./screens/LandingFr";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LandingFr />
  </StrictMode>,
);