import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { HashRouter } from "react-router-dom";
import './index.css';

//TODO:При деплое на сервер поменять HashRouter на BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);