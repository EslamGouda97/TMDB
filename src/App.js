import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/Routes';
import React, { useState } from "react";
import LanguageContext from "./context/languages";
import { Provider } from 'react-redux';
import  store  from './store/store';



function App() {
  const [lang, setLang] = useState('en')

  return (
    <Provider store={store}>
         <div
    className={lang === "ar" ? "text-right" : "text-left"}
    dir={lang === "ar" ? "rtl" : "ltr"}
  >
    <LanguageContext.Provider value={{ lang, setLang }}>
    <BrowserRouter>
 
      <AppRoutes/>
  
    </BrowserRouter>
    </LanguageContext.Provider>
    </div>
    </Provider>
 

  );
}

export default App;