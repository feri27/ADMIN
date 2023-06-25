import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  LineController,
  BarController,
  PieController,
  DoughnutController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { HashRouter as Router } from "react-router-dom";

import $ from 'jquery';
import 'jquery';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/popper.min';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery-ui-dist/jquery-ui.min';
import '../node_modules/jquery-ui-dist/jquery-ui.min.css';
import '../node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon';
import '../node_modules/jquery-ui-timepicker-addon/dist/jquery-ui-timepicker-addon.css';
window.$ = window.jQuery = window.jquery = $;


Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  LineController,
  BarController,
  PieController,
  DoughnutController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
