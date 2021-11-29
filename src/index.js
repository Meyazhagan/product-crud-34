import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import AppRoutes from "./routes/AppRoutes";

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,

  document.getElementById("root")
);
