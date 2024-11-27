import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en/en.json";
import navEn from "./resources/en/nav.json";
import formsEn from "./resources/en/forms.json";
import contactEn from "./resources/en/contact.json";
import ru from "./resources/ru/ru.json";
import navRu from "./resources/ru/nav.json";
import formsRu from "./resources/ru/forms.json";
import contactRu from "./resources/ru/contact.json";
import uz from "./resources/uz/uz.json";
import navUz from "./resources/uz/nav.json";
import formsUz from "./resources/uz/forms.json";
import contactUz from "./resources/uz/contact.json";
import uz_cyrl from "./resources/uz_cyrl/uz_cyrl.json";
import navKiril from "./resources/uz_cyrl/nav.json";
import formsKiril from "./resources/uz_cyrl/forms.json";
import contactKiril from "./resources/uz_cyrl/forms.json";
import { restoreSettings } from "../contexts/setting-context";

const resources = {
  en: { translation: { ...en, ...navEn, ...formsEn, ...contactEn } },
  ru: { translation: { ...ru, ...navRu, ...formsRu, ...contactRu } },
  uz: { translation: { ...uz, ...navUz, ...formsUz, ...contactUz } },
  "uz-Cyrl-UZ": {
    translation: { ...uz_cyrl, ...navKiril, ...formsKiril, ...contactKiril },
  },
};

const settingsLang = restoreSettings().lang;
i18next.use(initReactI18next).init({
  lng: settingsLang,
  resources,
  interpolation: {
    escapeValue: false,
  },
});
