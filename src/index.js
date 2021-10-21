import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    position: positions.BOTTOM_RIGHT,
    timeout: 3000,
    offset: '30px',
  }

const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  )

ReactDOM.render(<Root />, document.getElementById("root"));
