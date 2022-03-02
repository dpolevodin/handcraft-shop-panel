import React from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Routes, Route } from "react-router-dom";
import { LoginPage, AdminPage, UserPage } from "./pages/";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}