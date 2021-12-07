import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
      changeLanguage: "Change language"
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
      changeLanguage: "Zmień język"
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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
