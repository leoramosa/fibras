import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
import App from "./route/App";
import SimpleReactLightbox from 'simple-react-lightbox'

const container = document.getElementById("app");

ReactDOM.render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>
, container);
