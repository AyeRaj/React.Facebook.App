import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navigationbar from "./Navigationbar";
import Leftsidebar from "./Leftsidebar";
import Rightbar from "./Rightbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <table>
      <tbody>
        <tr className="heading">
          <td colSpan={3}>
            <Navigationbar />
          </td>
        </tr>
        <tr>
          <td>
            <Leftsidebar />
          </td>
          <td>
            <App />
          </td>
          <td>
            <Rightbar />
          </td>
        </tr>
      </tbody>
    </table>
  </React.StrictMode>
);
reportWebVitals();
