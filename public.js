if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(n[u])return;let s={};const o=e=>r(e,u),f={module:{uri:u},exports:s,require:o};n[u]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(l(...e),s)))}}define(["./workbox-bdea3f40"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_ipx/_/nuxt/full-logo-green-dark.svg",revision:"b657758991a4ae5d86b0e9fac4b515ed"},{url:"_ipx/_/nuxt/full-logo-green-light.svg",revision:"ef9a2117742ef56019ec72c8bfb543ff"},{url:"_ipx/_/nuxt/icon-green.svg",revision:"b0d2bf20c6507a57102f081dd6291526"},{url:"_nuxt/_plugin-vue_export-helper.c27b6911.js",revision:null},{url:"_nuxt/404.177f3ca1.js",revision:null},{url:"_nuxt/500.177f3ca1.js",revision:null},{url:"_nuxt/about.4c0b1a8d.js",revision:null},{url:"_nuxt/all.8e423578.js",revision:null},{url:"_nuxt/CookieBanner.d1b05e33.js",revision:null},{url:"_nuxt/default.4be4657b.js",revision:null},{url:"_nuxt/default.7e5909c5.css",revision:null},{url:"_nuxt/Dropdown.82a047f7.js",revision:null},{url:"_nuxt/entry.176ba9b8.js",revision:null},{url:"_nuxt/entry.c3975e45.css",revision:null},{url:"_nuxt/error-404.049214fc.js",revision:null},{url:"_nuxt/error-404.fdd90155.css",revision:null},{url:"_nuxt/error-500.01ab1405.js",revision:null},{url:"_nuxt/error-500.f4699d7d.css",revision:null},{url:"_nuxt/error.2e552fcd.js",revision:null},{url:"_nuxt/i18n.config.2960a5a0.js",revision:null},{url:"_nuxt/i18n.options.6bfbe09c.js",revision:null},{url:"_nuxt/Icon.1c139970.js",revision:null},{url:"_nuxt/Icon.805dfee4.css",revision:null},{url:"_nuxt/IconCSS.1b5dd431.js",revision:null},{url:"_nuxt/IconCSS.c4e67302.css",revision:null},{url:"_nuxt/index.c156f3a0.js",revision:null},{url:"_nuxt/index.cf112933.js",revision:null},{url:"_nuxt/LanguageSelector.6f93b5aa.js",revision:null},{url:"_nuxt/LanguageSelector.vue.14b4e34d.js",revision:null},{url:"_nuxt/ThemeSwitcher.b0c31b39.js",revision:null},{url:"_nuxt/ThemeSwitcher.vue.c47a8e58.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"200",revision:"5fde68f69b7d1d491abf306f25ff30de"},{url:"404",revision:"5fde68f69b7d1d491abf306f25ff30de"},{url:"404",revision:"684a384ec7b1a0580cb5ef79c7a48e50"},{url:"500",revision:"88c20e5167185a43e003abaa746f7bbd"},{url:"about",revision:"7f91ef50ccefb49aaf61f7ee35314636"},{url:"all",revision:"e456667446a1bf5034296eed1c02e6fa"},{url:"css/nuxt-google-fonts.css",revision:"6e9b243db570316e02a671df8888aece"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"fr/404",revision:"ec59e3c38326da111dfc79c11a04b07b"},{url:"fr/500",revision:"de6c7d00975284b2a5823a5c0d1c1ea2"},{url:"fr/about",revision:"cf7e2329400146ec152d4b8195d022fd"},{url:"fr/all",revision:"fbb4d2e73c84e128c9de1c7be15f966e"},{url:"fr",revision:"6282867759116644dde2d9097014598f"},{url:"/",revision:"136186680790d9480beb79c0495213de"},{url:"nuxt/favicon.ico",revision:"6c3319f45e82e05c646c0cb5a790d61a"},{url:"nuxt/full-logo-green-dark.svg",revision:"b657758991a4ae5d86b0e9fac4b515ed"},{url:"nuxt/full-logo-green-light.svg",revision:"ef9a2117742ef56019ec72c8bfb543ff"},{url:"nuxt/icon-green.svg",revision:"b0d2bf20c6507a57102f081dd6291526"},{url:"nuxt/maskable-icon-512x512.png",revision:"5f45725aae3723e3c419486edc3e955a"},{url:"nuxt/pwa-192x192.png",revision:"e0860dbf21ddd1449df3e44164ec8016"},{url:"nuxt/pwa-512x512.png",revision:"8638a6aadef8e9b0c3dfcd6d9838e6a0"},{url:"nuxt/pwa-64x64.png",revision:"9e6f2282cc67f6bde409c44c3ebc5166"},{url:"favicon.ico",revision:"5c1028350a39fb9e5a9bfbe280326e28"},{url:"manifest.webmanifest",revision:"325010f98007750a7fb251fa78bab385"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("/",new e.CacheOnly,"GET")}));
