import React from 'react'
import ReactDOM from 'react-dom/client'

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import App from "./components/App";

import { GlobalStyles } from "./styles/Global";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer autoClose={1500} topRight />  
    <App />  
  </React.StrictMode>,
)
