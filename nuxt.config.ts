import path from "node:path";
// https://nuxt.com/docs/api/configuration/nuxt-config
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import packageJson from "./package.json";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    // sitemap: {
    //   autoAlternativeLangPrefixes: true,
    // },
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    minify: true,
    compressPublicAssets: {
      brotli: true,
    },
    logLevel: 4,
  },
  css: ["notivue/notifications.css", "notivue/animations.css"],
  runtimeConfig: {
    appVersion: packageJson.version,
    isProduction: process.env.NODE_ENV === "production",
  },
  // This is a fix for tailwind+i18n in production mode
  // https://github.com/nuxt-modules/i18n/issues/2177
  experimental: {
    inlineSSRStyles: false,
    payloadExtraction: true,
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@pinia/nuxt",
    "@nuxthq/ui",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "nuxt-delay-hydration",
    "@nuxtjs/device",
    "nuxt-icon",
    "@vite-pwa/nuxt",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@dargmuesli/nuxt-cookie-control",
  ],
  sitemap: {
    debug: true,
    enabled: true,
    urls: () => {
      return ["/404", "/500", "/", "/about"];
    },
    cacheTtl: 1000 * 60 * 60 * 24, // 1 day
  },
  robots: {
    allow: "*",
    debug: true,
    enabled: true,
  },
  site: {
    debug: true,
    url: "https://localhost:3000",
  },
  pwa: {
    injectRegister: "auto",
    registerType: "autoUpdate",
    workbox: {
      runtimeCaching: [
        { urlPattern: "/", method: "GET", handler: "CacheOnly" },
      ],
      globDirectory: path.resolve(".output", "public"),
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      swDest: "public",
    },
    client: {
      registerPlugin: true,
      installPrompt: true,
      periodicSyncForUpdates: 0,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
    manifest: {
      start_url: "/",
      name: "My Awesome App",
      short_name: "MyApp",
      description: "My Awesome App description",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/nuxt/pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "/nuxt/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/nuxt/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/nuxt/maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
  },
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
    baseURL:
      process.env.NODE_ENV === "production" ? "/nuxt3-full-boilerplate" : "/",
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
    // mode: "init",
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
    defaultLocale: "en",
    langDir: "./locales",
    customRoutes: "page",
    locales: [
      {
        code: "en",
        iso: "en-US",
        dir: "ltr",
        file: "en.json",
        isCatchallLocale: true,
      },
      {
        code: "fr",
        iso: "fr-FR",
        dir: "ltr",
        file: "fr.json",
      },
      {
        code: "fa",
        iso: "fa-IR",
        dir: "rtl",
        file: "fa.json",
      },
    ],
    vueI18n: "./i18n.config.ts",
    strategy: "prefix_except_default",
  },
  eslint: {
    emitError: false,
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
