import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SellerDashboardHome from "./SellerDashboard/SellerDashboardHome/SellerDashboardHome.jsx";
import { StoreContextProvider } from "../context/storeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <StoreContextProvider>
            <App />
          </StoreContextProvider>
        }
      />
      <Route path="/seller" element={<SellerDashboardHome />} />
    </Routes>
  </BrowserRouter>
);
