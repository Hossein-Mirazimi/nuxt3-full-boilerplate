import en from "./locales/en.json";
import fr from "./locales/fr.json";
import fa from "./locales/fa.json";

export default defineI18nConfig(() => ({
  legacy: false,
  langDir: "./locales",
  messages: { "en-US": en, "fr-FR": fr, "fa-IR": fa },
  baseUrl: import.meta.env.VITE_BASE_URL,
  fallbackLocale: "en",
  locales: [
    {
      code: "en",
      iso: "en-US",
      dir: "ltr",
      isCatchallLocale: true,
    },
    {
      code: "fa",
      iso: "fa-IR",
      dir: "ltr",
    },
    {
      code: "fr",
      iso: "fr-FR",
      dir: "rtl",
    },
  ],
}));
