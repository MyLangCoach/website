import React from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./app/store";
import "./index.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { initializeAnalytics,logPageView } from "./util/analytics";
initializeAnalytics();
const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-center" reverseOrder={true} />
      </PersistGate>
      <App />
    </Provider>
  </React.StrictMode>
);
