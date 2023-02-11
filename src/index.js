import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App';
import './index.css';
import "./firebase";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App/>);
