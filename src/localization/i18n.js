import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as enL from './en.json'
import * as zhL from './zh.json'
//empty for now
const resources = {
  en: {
    translation: enL
  },
  zh: {
    translation: zhL
  }
}

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3', 
  //language to use if translations in user language are not available
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // not needed for react!!
  },
  react: {
    useSuspense:false,
 }
})

export default i18n
