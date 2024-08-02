import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodeAuthentication from "./pages/CodeAuthentication";
import DashBoard from "./pages/DashBoard";
import StartFormScratch from "./pages/StartFromScratch";
import StartFromInspire from "./pages/StartFromInspire";
import GenerateFromScratch from "./pages/GenerateFromScratch";
import Profile from "./pages/Profile";
import GeneratedFromInspire from "./pages/GeneratedFromInspire";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/code-auth" element={<CodeAuthentication />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/scratch" element={<StartFormScratch />}></Route>
        <Route path="/inspire" element={<StartFromInspire />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/generate-scratch"
          element={<GenerateFromScratch />}
        ></Route>
        <Route
          path="/generate-inspire"
          element={<GeneratedFromInspire />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
