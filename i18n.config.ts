import en from "./locales/en.json";
import fr from "./locales/fr.json";

export default defineI18nConfig(() => ({
  legacy: false,
  langDir: "./locales",
  messages: { "en-US": en, "fr-FR": fr },
  baseUrl: import.meta.env.VITE_BASE_URL,
  fallbackLocale: "en",
  locales: [
    {
      code: "en",
      iso: "en-US",
      isCatchallLocale: true,
    },
    {
      code: "fr",
      iso: "fr-FR",
    },
  ],
}));
