import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider, } from 'styled-components';
import { GlobalStyle, } from './global/AppStyles.comp';
import { Theme, } from './global/themes/themeLight';
import 'normalize.css';
import './global/font.css';
import { disableReactDevTools, } from '@fvilers/disable-react-devtools';


if (import.meta.env.PROD) {
    disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={Theme}>
        <React.StrictMode>
            <GlobalStyle />
            <App />
        </React.StrictMode>
    </ThemeProvider>,
);
