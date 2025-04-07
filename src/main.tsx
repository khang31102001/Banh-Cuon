import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageProvider } from './Contexts/LanguageContext';
import { ThemeProvider } from 'next-themes';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>


    </React.StrictMode>
  );
} else {
  console.error("Không tìm thấy phần tử có id='root'.");
}
