import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import frHero from "../Lang/fr/HeroTrans.json"
import frPortfolio from "../Lang/fr/PortfolioTrans.json"
import enHero from "../Lang/en/HeroTrans.json"
import enPortfolio from "../Lang/en/PortfolioTrans.json"
import deHero from "../Lang/de/HeroTrans.json"
import dePortfolio from "../Lang/de/PortfolioTrans.json"


const resources = {
    de:{
        translation:{
            deHero,
            dePortfolio
        }
    },
    en:{
        translation:{
            enHero,
            enPortfolio
        }
    },
    fr:{
        translation:{
            frHero,
            frPortfolio
        }
    }
}


i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)




.init({
    resources,
    fallbackLng: 'de',
    debug: true,

    interpolation: {
        escapeValue: false, // react already safes from xss
    },
})




export default i18n;

