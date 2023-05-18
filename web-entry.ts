import Footer from "./app/components/Footer";
import React from 'react';
import ReactDOM from "react-dom/client"
import r2wc from "react-to-webcomponent"
const WebFooter = r2wc(Footer, React, ReactDOM);
customElements.define("rwc-footer", WebFooter);

