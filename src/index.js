import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CustomersOpinionsPage from './routes/customersOpinionsPage';
import ReturnedOrdersPage from './routes/returnedOrdersPage';
import UnpaidOrdersPage from './routes/unpaidOrdersPage';
import UnsentOrdersPage from './routes/unsentOrdersPage';
import LoginPage from './routes/loginPage';

const resources = {
  en: {
    translation: {
      orders: "Orders",
      sellingTips: "Selling Tips",
      sellingPlot: "Selling Plot",
      customerOpinions: "Customer Opinions",
      offersRank: "Offers Rank",
      unpaid: "Unpaid",
      unsent: "Unsent",
      returns: "Returns",
      nextTip: "Next Tip",
      soldQuant: "Sold Quantity",
      turnover: "Turnover",
      uniqueViews: "Unique Views",
      noOffersText: "You don’t have any offers yet...",
      noOrdersText:
        "You don’t have any orders. Let’s see how to promote your offers.",
      changeLanguage: "Change language",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December",
      lackOfOrdersText: "Familiarize with selling tips and start selling!"
    }
  },
  pl: {
    translation: {
      orders: "Zamówienia",
      sellingTips: "Porady sprzedażowe",
      sellingPlot: "Wykres sprzedaży",
      customerOpinions: "Opinie kupujących",
      offersRank: "Ranking ofert",
      unpaid: "Nieopłacone",
      unsent: "Niewysłane",
      returns: "Zwroty",
      nextTip: "Następna porada",
      soldQuant: "Sprzedanych sztuk",
      turnover: "Obrót",
      uniqueViews: "Unikalne wyświetlenia",
      noOffersText: "Nie posiadasz na razie żadnych ofert...",
      noOrdersText:
        "Nie posiadasz żadnych zamówień. Zobacz jak promować swoje oferty.",
      changeLanguage: "Zmień język",
      monday: "Poniedziałek",
      tuesday: "Wtorek",
      wednesday: "Środa",
      thursday: "Czwartek",
      friday: "Piątek",
      saturday: "Sobota",
      sunday: "Niedziela",
      january: "Styczeń",
      february: "Luty",
      march: "Marzec",
      april: "Kwiecień",
      may: "Maj",
      june: "Czerwiec",
      july: "Lipiec",
      august: "Sierpień",
      september: "Wrzesień",
      october: "Październik",
      november: "Listopad",
      december: "Grudzień",
      lackOfOrdersText: "Zapoznaj się z poradami sprzedaży i zacznij sprzedawać!"
    }
  }
};

i18n.use(initReactI18next).init({
  resources: resources,
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
