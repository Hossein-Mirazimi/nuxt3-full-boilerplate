// https://nuxt.com/docs/api/configuration/nuxt-config
import en from "./locales/en-US.json";
import fr from "./locales/fr-FR.json";
import packageJson from "./package.json";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    minify: true,
    compressPublicAssets: {
      brotli: true,
    },
    logLevel: 4,
  },
  runtimeConfig: {
    appVersion: packageJson.version,
    isProduction: process.env.NODE_ENV === "production",
  },
  // This is a fix for tailwind+i18n in production mode
  // https://github.com/nuxt-modules/i18n/issues/2177
  experimental: {
    inlineSSRStyles: false,
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "@nuxthq/ui",
    "nuxt-delay-hydration",
    "@nuxtjs/device",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@dargmuesli/nuxt-cookie-control",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    viewer: true,
  },
  imports: {
    dirs: ["./stores", "./locales"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  // https://color-mode.nuxtjs.org/
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  image: {
    provider: "ipx",
    quality: 80,
    format: ["png", "jpeg", "webp"],
  },
  // https://nuxt.com/modules/delay-hydration
  delayHydration: {
    mode: "init",
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
  },
  googleFonts: {
    families: {
      Inter: true,
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  eslint: {
    lintOnStart: false,
  },
  cookieControl: {
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year
    // set all these to true for highest GDPR enforcement
    isAcceptNecessaryButtonEnabled: true,
    isModalForced: false,
    isCookieIdVisible: true,
    closeModalOnClickOutside: true,
    // show cookie button
    isControlButtonEnabled: true,
    // disable to get unstyled css for tailwind
    isCssEnabled: false,
    isDashInDescriptionEnabled: false,
    cookies: {
      necessary: [
        {
          name: {
            fr: fr.cookies.necessary.title,
            en: en.cookies.necessary.title,
          },
          description: {
            fr: fr.cookies.necessary.description,
            en: en.cookies.necessary.description,
          },
          targetCookieIds: ["ncc_"],
        },
      ],
      optional: [],
    },
    locales: ["en", "fr"],
  },
});
