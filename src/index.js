import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomersOpinionsPage from './routes/customersOpinionsPage';
import ReturnedOrdersPage from './routes/returnedOrdersPage';
import UnpaidOrdersPage from './routes/unpaidOrdersPage';
import UnsentOrdersPage from './routes/unsentOrdersPage';
import LoginPage from './routes/loginPage';
import { translationResources } from './translations';

i18n.use(initReactI18next).init({
  resources: translationResources,
  lng: "pl",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<App />} />
        <Route path="customers-opinions" element={<CustomersOpinionsPage />} />
        <Route path="returned-orders" element={<ReturnedOrdersPage />} />
        <Route path="unpaid-orders" element={<UnpaidOrdersPage />} />
        <Route path="unsent-orders" element={<UnsentOrdersPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
