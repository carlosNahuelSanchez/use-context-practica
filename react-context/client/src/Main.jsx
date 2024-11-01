import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './components/Home';
import { LoginForm } from './components/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <LoginForm/>
    </React.StrictMode>
);